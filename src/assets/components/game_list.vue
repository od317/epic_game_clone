<script setup>

import { defineProps, reactive, toRef,ref } from "vue";


const props = defineProps({
  gamelist: Array,
});

 let gamelist = props.gamelist
 
 let slide = ref(false)
 let slide_perecent = ref("0")
 
 let backward  = ()=>{
  let tmp = parseInt(slide_perecent.value)
  tmp-=100
  console.log(tmp) 
  slide_perecent.value= new String(tmp)
  console.log(slide_perecent.value) }
 let forward = ()=>{
  let tmp = parseInt(slide_perecent.value)
  tmp+=100
  console.log(tmp) 
  slide_perecent.value= new String(tmp)
  console.log(slide_perecent.value) 
}

</script>

<template>


<div  class="flex flex-col  w-full h-fit items-center mt-[6rem] mb-[4.5rem]">
  
     <div class="flex justify-between w-[78%] px-2 mb-4 ">

        <label for="" class="text-xl text-white">Fabruary Saving Spotlight</label>
        <div>
          <button @click="backward" :disabled="parseInt(slide_perecent)<=0" :class="`disabled:bg-[#0f0f0f] text-white bg-[#212121] mx-2 rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropleft" ></ion-icon></button>
          <button @click="forward" :disabled="parseInt(slide_perecent)>=300" :class="` disabled:bg-[#0f0f0f] text-white bg-[#212121] rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropright"></ion-icon></button>   
        </div>
        
     </div>
    <div class="w-[78%] overflow-x-hidden">
        
        <div class="flex w-[400%]  flex-row">
                


                
                  <div v-for="gl in gamelist" :class="`flex  justify-between w-full  h-fit translate-x-[-${slide_perecent}%] transition-all duration-500`">
            
                      
                      <div class="group w-1/5 h-fit ml-2 mr-2 relative"  v-for="game in gl">
                             <div class="absolute flex w-full justify-end items-start p-3"> 
                             <button @click="console.log('oksss')" class=" 
                              relative rounded-full z-50 text-3xl   
                              opacity-0 group-hover:opacity-100 after: transition-all duration-100 
                              after_wish">
                                    <ion-icon class="bg-black text-white  rounded-full z-100 " name="add-circle-outline"></ion-icon>
                              </button>
                              </div>
                              <div class=" cursor-pointer  absolute flex items-start justify-end h-[20rem] p-3  w-full bg-gray-200 opacity-0 hover:opacity-10 transition-all duration-200">
                              </div>
                      
                      <img :src="game.img" alt=""  :class="`${ game.last ? 'w-0 h-0':'w-full h-[20rem]'} rounded-md`">
                      <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-2'}`">
                       <label for="" class="w-full text-sm text-gray-600">Base game </label>
                        <label for="" class="w-full text-xl text-white">{{ game.name }} </label>
                        <div class="flex w-full mt-2 items-center">
                          <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">50%</label>
                          <label for="" class="text-gray-500 mr-2 line-through">$59.99</label>
                          <label for="" class="text-white">$29.99</label>

                        </div>
                      </div>
                      <div :class="`${game.last? 'w-full h-full':'hidden '} relative flex justify-center items-center`">
                        <img :src="game.img" src="../img/ac-valhalla.webp" alt="">
                       <button :class="`${game.last? 'bg-blue1 text-white p-2 text-xl rounded-lg absolute z-10':''}`">see more</button>
                       <div class="absolute h-full w-full bg-black opacity-50"></div>
                      </div>
                      </div>

                  </div>



             

    </div>

    </div>
</div>




</template>