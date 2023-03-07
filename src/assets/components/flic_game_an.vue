<template>
    <Carousel class=" pt-[3rem] pl-[.3rem] md:hidden mb-[2rem] " :items-to-show="1.2" >
     
        <slide @Click="router_push(game.type,game.dst)" class="  h-full overflow-hidden rounded-[1rem]" v-for="game in games" :key="game">
         <div :class="` w-[90%]   rounded-[1rem]
                       flex  items-end text-white `">
                        <div class="flex flex-col  z-40">
                                <img class="w-[100%] mb-[1rem] ml-[1rem] rounded-lg" :src="game.img" alt="">
                                <label class="text-[.7rem] text-start pl-[1rem] font-bold" for="">{{ game.name }}</label>
                                <label class="text-start h-[3.5rem] w-[90%] pl-[1rem] mt-[.4rem] text-[.9rem] font-bold mb-[1rem]" for="">{{ game.label }}</label>
                                <label class="text-start w-[90%] pl-[1rem] mb-[1rem] text-[.8rem] font-bold " for="">{{game.down_text}}</label>
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
  import { useRouter  } from 'vue-router';

  let router = useRouter()
  
  const props = defineProps({
  games: Array,
  });

   let games = props.games

   for(let i of games){
    console.log("yes"+i.src)
   }
   let router_push = (type,dist)=>{

if(type == 'game'){
    router.push('/game/'+dist)
}

else{
    router.push('/browse?filter='+dist)
}

}

  </script>


