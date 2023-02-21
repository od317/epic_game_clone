<template>
    <Carousel class=" pt-[1rem]  md:hidden" :items-to-show="1.5" >
     
        <slide class="  h-full overflow-hidden" v-for="game in games" :key="game">
         <div :class="` w-[90%]  mb-[1rem]
                       flex flex-col center text-white  p-[.5rem]`">
                     <img class="  w-full h-[19rem] rounded-md" :src="game.img" alt="">
                        <div class="flex flex-col  z-40">
                                    <div :class="`flex flex-col items-start text-start w-full mt-2`">
                                            <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                            <label for="" class="w-full text-xl text-white">{{ game.name }} </label>
                                            <div class="flex w-full mt-2 items-center">
                                                    <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">50%</label>
                                                    <label for="" class="text-gray-500 mr-2 line-through">$59.99</label>
                                                    <label for="" class="text-white">$29.99</label>
                                            </div>
                            </div>
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

   let games_list = props.games
   console.log(games_list)
   let games = []
   for(let gl of games_list){
       for(let i of gl){
        games.push(i)
       }
   }
   for(let i of games){
    console.log("yes"+i.img)
   }
   

  </script>


