<template>
    <Carousel class=" pt-[1rem] pl-[.3rem] md:hidden mb-[2rem] " :items-to-show="1.2" >
     
        <slide @click="router_push_header(game.name)" class="  h-full overflow-hidden rounded-[1rem]" v-for="game in games" :key="game">
         <div :class="` pb-[110%] w-[90%]   rounded-[1rem]
                        text-white `">
                    <div class="absolute  opacity-30 w-full bg-black h-full rounded-[1rem]   text-white  z-30">
                    </div>
                     <div class=" absolute  h-full w-full rounded-[1rem] bg-cover bg-center" :style="`background-image: url(${game.logoimg});`"  ></div>
                        <div class="flex flex-col h-full justify-end absolute  z-40">
                                <label class=" text-start pl-[1rem] text-[100%] mb-[3%] font-bold" for="">Now on epic</label>
                                <label class="text-start w-[90%] text-[110%] pl-[1rem] mt-[.4rem]   mb-[3%]" for="">Break the cycle. Fight to survive as this 
                                award-winning third-person shooter brings Selene's story to PC.</label>
                                <label class="text-start w-[90%] flex flex-col pl-[1rem] mb-[1rem] text-[.8rem] font-bold " for="">
                                  <label for="">Starting at</label> 
                                  <label class="text-[150%] font-bold" for="">59.99$</label>  
                                </label>
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


  </script>


