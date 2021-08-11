import ml5 from "ml5"
import { ref } from "@vue/runtime-core"




const useMl5 = ()=> {

  let detector = null;
  const result = ref([]);

  async function setOjectDetector(type) {
   detector = await ml5.objectDetector(type);
   return detector;
 }

 async function detect(target){
   try {
    const res = await detector.detect(target);
    return result.value = res;
   }catch(err){
    console.log(err.message);
   }
 }

  return {result,setOjectDetector, detect};
}
export default useMl5;

// models  

// training

// detect
