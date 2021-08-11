<template>
    <div class="container mx-auto">
      <h1 class="text-center text-3xl my-2">Object Detections Video</h1>
      <div id="render"></div>
    </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import ml5 from "ml5";

async function setOjectDetector(type) {
   const detector = await ml5.objectDetector(type);
   return detector;
 }


async function createCapture() {
const parent = document.getElementById("render");
const video = document.createElement("video");
const canvas = document.createElement('canvas');

parent.appendChild(canvas);
canvas.id = 'canvas';
canvas.width =640;
canvas.height =480;


video.id="video";
video.autoplay =true;
video.width = 640;
video.height =480;
video.srcObject = await navigator.mediaDevices.getUserMedia({
  video: {
    cursor: "always",
  },
  audio: false,
});
const context = canvas.getContext("2d");

  video.addEventListener("play",()=>{
    function frame() {
      context.drawImage(video,0,0,640,480);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });

  const detector = await setOjectDetector('cocossd');
  function gotDetections(error,result) {
  if(error) throw new Error(error.message);

  result.map(res => {
    // Retacgle model
    context.strokeStyle = "green";
    context.lineWidth = 4;
    context.strokeRect(res.x,res.y,res.width,res.height);
    context.font = "20px Arial";
    context.fillStyle = "greenyellow";
    context.fillText(`${res.label}`,res.x + 10,res.y + 10);

  })
  detector.detect(video ,gotDetections)
}

detector.detect(video ,gotDetections)

 }





onMounted(() => {
  createCapture()
})

</script>
