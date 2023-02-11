<script setup>

import { defineProps, reactive, toRef,ref } from "vue";

const props = defineProps({
  game_an: Array,
});

  let game_an= props.game_an
  console.log(String(game_an.length))
</script>

<template>
   <div class="w-screen flex items-center justify-center mb-[3rem] mt-[5rem]">

    <div :class="`grid w-[78%]  grid-cols-${String(game_an.length)} grid-rows-1 gap-[2rem]`">

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

</template>