<template>
    <Carousel class="bg-green-400 px-[1rem] md:hidden" >
        <slide class=" w-full h-full" v-for="game in games" :key="slide">
        
         <div :class="`h-[40rem] w-[90%] bg-[url('https://images8.alphacoders.com/710/thumb-1920-710284.png')] bg-center bg-no-repeat bg-cover mb-[1rem]
                       flex  items-end text-white`">
                        <div class="flex flex-col pl-[1rem]">
                                <img class="w-[40%] mb-[1rem]" :src="game.slide_img" alt="">
                                <label class="text-[.9rem] text-start pl-[1rem] font-bold" for="">Now on epic</label>
                                <label class="text-start w-[90%] pl-[1rem] mt-[.4rem] text-[1.1rem] font-bold mb-[1rem]" for="">Break the cycle. Fight to survive as this 
                                award-winning third-person shooter brings Selene's story to PC.</label>
                                <label class="text-start w-[90%] pl-[1rem] mb-[1rem] text-[1.1rem] font-bold " for="">Starting at 59.99$</label>
                       </div>
        </div>

        </slide>

        <template #addons>
        <Pagination />
        </template>
    </Carousel>
  
  </template>
  
  <script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { defineProps, reactive, toRef,ref } from "vue";
  
  const props = defineProps({
  games: Array,
  });

   let games = props.games

   for(let i of games){
    console.log("yes"+i.src)
   }
   

  </script>