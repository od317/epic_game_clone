<script setup>

import { defineProps, reactive, toRef,ref } from "vue";
import flict from './flic_game_an.vue'
import { useRouter } from "vue-router";

let router = useRouter()

const props = defineProps({
  game_an: Array,
});

  let game_an= props.game_an


  let router_push = (type,dist)=>{

    if(type == 'game'){
        router.push('/game/'+dist)
    }

    else{
        router.push('/browse?filter='+dist)
    }
  
  }

</script>

<template>
   <div class="hidden w-screen md:flex items-center justify-center mb-[3rem] mt-[5rem]">

    <div v-if = "game_an.length==3" :class="`grid w-[78%]  grid-cols-3 grid-rows-1 gap-[2rem]`">

            <div @Click="router_push(ga.type,ga.dst)" v-for="ga in game_an" class="flex flex-col cursor-pointer max-h-[22rem]">
                <div class=" relative group">
                  <img  :src="ga.img" alt="" class="rounded-2xl w-full transition-all duration-150 cursor-pointer max-h-[18rem]">
                  <div class="bg-gray-400 absolute translate-y-[-100%] rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-100 w-full h-full max-h-[18rem]"></div>
               </div>
                <div class="p-4 flex flex-col w-full  cursor-pointer">
                    <label for="" class="text-white text-[1rem] cursor-pointer">{{ ga.name }}</label>
                    <p class="  overflow-y-hidden text-gray-400 cursor-pointer" >{{ ga.label }}</p>
                    <label for="" class="text-white mt-[1rem] hover:border-b-[.1rem] inline-block w-fit text-lg cursor-pointer">{{ ga.down_text }}</label>

                </div>
            </div>
        </div>


      <div v-else  :class="`grid md:px-[2rem] lg:px-0 lg:w-[78%]  grid-cols-2 grid-rows-1 gap-[2rem]`">

            <div @Click="router_push(ga.type,ga.dst)" v-for="ga in game_an" class="flex flex-col cursor-pointer max-h-[25rem]">
                <div class=" relative group">
                  <img  :src="ga.img" alt="" class="rounded-2xl w-full transition-all duration-150 cursor-pointer max-h-[18rem]">
                  <div class="bg-gray-400 absolute translate-y-[-100%] rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-100 w-full h-full max-h-[18rem]"></div>
               </div>
                <div class="p-4 flex flex-col w-full cursor-pointer">
                    <label for="" class="text-white text-[1.2rem]  cursor-pointer">{{ ga.name }}</label>
                    <p class=" my-[1rem] overflow-y-hidden text-gray-400 cursor-pointer">{{ ga.label }}</p>
                    <label for="" class="text-white hover:border-b-[.1rem] inline-block w-fit text-lg cursor-pointer">{{ ga.down_text }}</label>

                </div>
            </div>
        </div>  

    </div>

    <flict :games="game_an"/>
  

</template>