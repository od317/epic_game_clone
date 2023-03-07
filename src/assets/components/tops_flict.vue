<template>
    <Carousel class=" pt-[1rem]  md:hidden mb-[2rem] " :items-to-show="1.2" >
     
        <slide class=" pl-[2rem] last:border-r-0  h-full overflow-hidden flex flex-col items-start border-r-2 text-white" v-for="game_list in games" :key="game">
                    
                    <div class="flex text-start justify-between w-full pr-[1rem]" for="">
                        <label for="">{{ game_list.title }}</label>
                        <router-Link :to="'/collection/'+game_list.title" class="border-2 border-white py-[.2rem] px-[.4rem] rounded-md">view more</router-Link>
                    </div>
                    
                    <div class="w-full my-[1rem] flex flex-row" v-for="game in game_list.games">
                        <img class="w-[18%] mr-[1.1rem] rounded-md"  :src="game.logoimg" alt="">
                        <div class="flex flex-col text-start mt-[.5rem]" for="">
                            <label for="">{{ game.name }}</label>
                            <div class="flex flex-row items-center text-center mt-[.5rem]">
                                 <label :class="`${game.dis? '':'hidden'} bg-blue1 p-[.2rem] rounded-md mr-[.5rem]`" for="">{{ game.dis }}</label>
                                 <label for="" :class="`${game.preprice?'':'hidden'} p-[.2rem]  mr-[.5rem] text-gray-400 line-through`">{{ game.preprice }}</label> 
                                <label for="">{{ game.price }}</label>

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

   let games = props.games

   for(let i of games){
    console.log("yes"+i.src)
   }
   

  </script>


