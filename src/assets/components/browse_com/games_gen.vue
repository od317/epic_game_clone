<script setup>


import { defineProps, reactive, toRef,ref } from "vue";
import flic from './flic_gen.vue'

const props = defineProps({
  genlist: Array,
});

 let genlist = props.genlist
 


 let view_gen = ref([genlist[genlist.length-1],genlist[0],genlist[1]])
 let slide = ref(false)
 let slide_perecent = ref("100")
 let pos = [genlist.length-1,0,1]
 

 let backward  = ()=>{
  slide.value = true
  slide_perecent.value = '0'
  let wait = setTimeout(()=>{
        pos[0] = pos[0] == 0 ? genlist.length-1: pos[0]-1
        pos[1] = pos[1] == 0 ? genlist.length-1: pos[1]-1
        pos[2] = pos[2] == 0 ? genlist.length-1: pos[2]-1
        view_gen.value[0] = genlist[pos[0]]
        view_gen.value[1] = genlist[pos[1]]
        view_gen.value[2] = genlist[pos[2]]
    slide.value=false
  },500)
}
 let forward = ()=>{
       slide.value = true
       slide_perecent.value = '200'       
       let wait = setTimeout(()=>{
        pos[0] = pos[0] == genlist.length-1 ? 0: pos[0]+1
        pos[1] = pos[1] == genlist.length-1 ? 0: pos[1]+1
        pos[2] = pos[2] == genlist.length-1 ? 0: pos[2]+1
        view_gen.value[0] = genlist[pos[0]]
        view_gen.value[1] = genlist[pos[1]]
        view_gen.value[2] = genlist[pos[2]]
        slide.value=false
       },520)
 }
 window.scrollTo({
        top:0,
      })
</script>


<template>


<div class="md:hidden">
  <flic class="" :gen_list="genlist"/>
</div>


<div  class="hidden md:flex flex-col overflow-x-hidden w-full h-fit items-center  mb-[4.5rem]">
  
  <div class="flex justify-between lg:w-[78%]  md:w-[90%] px-2 mb-4 ">

     <label for="" class="text-xl text-white">Popular Genres</label>
     <div>
       <button :disabled="slide" @click="backward" :class="` disabled:cursor-pointer text-white bg-[#212121] mx-2 rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropleft" ></ion-icon></button>
       <button :disabled="slide" @click="forward"  :class="` disabled:cursor-pointer text-white bg-[#212121] rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropright"></ion-icon></button>   
     </div>
     
  </div>

 <div class="lg:w-[78%] md:w-[90%] justify-center  overflow-x-hidden ">
     
     <div  class="flex w-[300%]   flex-row">
             


             
               <div  v-for="genl in view_gen"  :class="` ${
                
                slide? 'translate-x-[-'+slide_perecent+'%] duration-500':'translate-x-[-100%]  duration-0'
                
                } flex  justify-between w-full  h-fit  transition-all`">
           
      
         
                   
                   <router-link :to="'games/'+game.set" class="group w-1/4  h-fit ml-4 first:ml-0 px-[1rem] pt-[2rem] pb-[1rem] mr-2 relative bg-dark2 flex flex-col rounded-md"  v-for="game in genl">
                 
                    <div class="flex justify-between ">
                    <div :style="`background-image: url(${game.imgs[1]});`"  :class="` bg-cover bg-center w-[40%] h-[8rem]   rounded-lg`"></div>
                    <div :style="`background-image: url(${game.imgs[0]});`" alt=""  :class="`  bg-cover bg-center translate-x-[60%]  absolute w-[40%] h-[8rem]   rounded-lg`"></div>
                    <div :style="`background-image: url(${game.imgs[2]});`" alt=""  :class="`  bg-cover bg-center  w-[40%] h-[8rem]  rounded-lg`"></div>

                   </div>       
                   <div class="text-center text-white text-xl mt-[1rem]">{{ game.type }}</div>                 
 
            </router-link>
               </div>



          

 </div>

 </div>
 
</div>



    
</template>