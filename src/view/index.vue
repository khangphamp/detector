<template>
    <div class="container mx-auto">
      <h1 class="text-center text-3xl my-2">Object Detections Image</h1>
      <div id="Render"></div>
    </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core"
import useCanvas from "../@uses/useCanvas";
import imgUrl from '../assets/images/baby.jpg'
import  useMl5 from "../@uses/useMl5";
const {result, createCanvas , loadImage } = useCanvas();

async function init() {
    // Load all resourses 
  const image = await loadImage(imgUrl);
  // when which ready createCanvas
  const canvas = await createCanvas();

  const {result, detect,setOjectDetector } = useMl5();


  // draw resourses to canvas
  const context = canvas.getContext("2d");



  context.drawImage(image, 0 ,0 ,640,480);

  // using model
  await setOjectDetector("cocossd");
  
  // detect 
  await detect(image);console.log(result);
  result.value.map(res => {
    // Retacgle model
    context.strokeStyle = "green";
    context.lineWidth = 4;
    context.strokeRect(res.x,res.y,res.width,res.height);
    context.font = "20px Arial";
    context.fillStyle = "greenyellow";
    context.fillText(`${res.label}`,res.x + 10,res.y + 10);

  })
} 

onMounted(() => {
  init();
})

</script>
