<script setup>

import { defineProps, reactive, toRef,ref } from "vue";

const props = defineProps({
      free_games:Array
});

   let free_games = props.free_games 

</script>

<template>

   <div class="w-screen flex items-start justify-center mb-[3rem]">

        <div class="flex flex-col rounded-md items-center pt-[2rem] justify-center w-[78%] bg-dark3">
                
                <div class="flex items-center w-[90%] mb-[2rem]">
                    <label for="" class="text-white text-[2.5rem] mr-2">
                        <ion-icon name="gift"></ion-icon>
                    </label>
                    <label for="" class="text-[1.3rem] text-white font-semibold flex-grow">Free games</label>
                     <button class="text-white text-[1.1rem] border py-1 px-3 rounded-md">view more</button>                   
                </div>

                <div class="grid grid-cols-3 grid-rows-1 gap-[1.1rem] w-[90%] pb-[2rem]">

                         <div v-for="fg in free_games" class="flex   flex-col rounded-t-md">
                                 <div class="relative mb-[1.5rem]">
                                    <div class="gird w-full grid-rows-2 grid-cols-1"></div>
                                    <img :src="fg.img" alt="" class=" rounded-t-md w-full">
                                    <div for="" :class="` ${!fg.cs? 'rounded-b-md  p-1 w-[100%]  text-center text-white bg-blue1':'hidden'}`">Free now</div>
                                    <div for="" :class="`${fg.cs? 'rounded-b-md  p-1 w-full text-center text-white bg-black':'hidden'}`">Coming soon</div>
                                 </div>
                                    <label for="" class="text-white text-xl">{{ fg.name }}</label>
                                    <label for="" class=" text-gray-300 text-sm">{{ fg.text }}</label>
                        </div>

                </div>

        </div>

   </div>

</template>