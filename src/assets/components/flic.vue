<template>
    <Carousel class="bg-green-400 px-[1rem]" >
        <slide class=" w-full h-full" v-for="game in games" :key="slide">
        
         <div :class="`h-[40rem] w-[90%] bg-[url('${game.srcm}')] bg-center bg-no-repeat bg-cover mb-[1rem]`">
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