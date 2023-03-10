<template>
    
    <div class="md:hidden mt-[4rem]">
 
         <router-link :to="`games/${type}`"><button class="pl-[1.5rem] text-[1.4rem] text-white">{{ view_type }}</button></router-link> 

    </div>
    
    <Carousel class=" pt-[1rem]  md:hidden" :items-to-show="1.5" >
     
        <slide class="  h-full overflow-hidden" v-for="game in games" :key="game">
         <div :class="` w-[90%]  mb-[1rem]
                       flex flex-col center text-white  p-[.5rem]`">
                    <router-link :to="`game/`+game.name"> 
                     <img class="  w-full h-[19rem] rounded-md" :src="game.logoimg" alt="">
                    </router-link>
                     <div class="flex flex-col  z-40">
                                    <div :class="`flex flex-col items-start text-start w-full mt-2`">
                                            <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                            <label for="" class="w-full text-xl text-white">{{ game.name }} </label>
                                            <div class="flex w-full mt-2 items-center">
                                                    <label v-if="game.dis" for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">{{game.dis}}</label>
                                                    <label v-if="game.oldprice" for="" class="text-gray-500 mr-2 line-through">${{ game.oldprice }}</label>
                                                    <label  for="" class="text-white">${{ game.price }}</label>
                                            </div>
                            </div>
                       </div>
        </div>
        </slide>

        
    </Carousel>
  
  </template>
  
  <script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { defineProps, reactive, toRef,ref } from "vue";
  
  const props = defineProps({
  games: Array,
  type: String
  });

   let games_list = props.games
   let type = props.type
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
   let view_type = ref('')
   switch(type){
    case 'ac':
        view_type.value = 'Action Games'
        break
    case 'adv':
        view_type.value = 'Adventuer Games'
        break
    case 'fps':
        view_type.value = 'Top Fps Games'
        break
    case 'ac-adv':
        view_type.value = 'Top Action Adventure Games'
        break
    case 'mp':
        view_type.value = 'Top Mulyiplayer Games'
        break
    default:
        break  
 }

  </script>


