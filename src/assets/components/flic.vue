<template>
    <Carousel class=" pt-[1rem] pl-[.3rem] md:hidden mb-[2rem] " :items-to-show="1.2" >
     
        <slide @click="router_push_header(game.name)" class="  h-full overflow-hidden rounded-[1rem]" v-for="game in games" :key="game">
         <div :class="`h-[26rem] w-[90%]   rounded-[1rem]
                       flex  items-end text-white `">
                    <div class="absolute opacity-30 w-full bg-black h-full rounded-[1rem]   text-white  z-30">
                    </div>
                     <img class=" absolute  h-full w-full rounded-[1rem]" :src="game.logoimg" alt="">
                        <div class="flex flex-col  z-40">
                                <label class="text-[.7rem] text-start pl-[1rem] font-bold" for="">Now on epic</label>
                                <label class="text-start w-[90%] pl-[1rem] mt-[.4rem] text-[.9rem] font-bold mb-[1rem]" for="">Break the cycle. Fight to survive as this 
                                award-winning third-person shooter brings Selene's story to PC.</label>
                                <label class="text-start w-[90%] pl-[1rem] mb-[1rem] text-[.8rem] font-bold " for="">Starting at 59.99$</label>
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
  import { useRouter } from 'vue-router';
  let router = useRouter()

  let router_push_header = (name)=>{

        router.push('/game/'+name)
    }


  const props = defineProps({
  games: Array,
  });

   let games = props.games

   for(let i of games){
    console.log("yes"+i.src)
   }
   

  </script>


