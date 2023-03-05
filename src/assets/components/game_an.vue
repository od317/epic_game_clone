<script setup>

import { defineProps, reactive, toRef,ref } from "vue";
import flict from './flic_game_an.vue'


const props = defineProps({
  game_an: Array,
});

  let game_an= props.game_an
</script>

<template>
   <div class="hidden w-screen md:flex items-center justify-center mb-[3rem] mt-[5rem]">

    <div v-if = "game_an.length==3" :class="`grid w-[78%]  grid-cols-3 grid-rows-1 gap-[2rem]`">

            <div v-for="ga in game_an" class="flex flex-col ">
                <img :src="ga.img" alt="" class="rounded-2xl">
                <div class="p-4 flex flex-col w-full">
                    <label for="" class="text-white text-xl">{{ ga.name }}</label>
                    <p class=" h-[6.5rem] overflow-y-hidden text-gray-400">{{ ga.label }}</p>
                    <label for="" class="text-white mt-[2rem] text-lg">save now</label>

                </div>
            </div>
        </div>


      <div v-else  :class="`grid w-[78%]  grid-cols-2 grid-rows-1 gap-[2rem]`">

            <div v-for="ga in game_an" class="flex flex-col ">
                <img :src="ga.img" alt="" class="rounded-2xl">
                <div class="p-4 flex flex-col w-full">
                    <label for="" class="text-white text-xl">{{ ga.name }}</label>
                    <p class=" h-[6.5rem] overflow-y-hidden text-gray-400">{{ ga.label }}</p>
                    <label for="" class="text-white mt-[2rem] text-lg">save now</label>

                </div>
            </div>
        </div>  

    </div>

    <flict :games="game_an"/>
  

</template>