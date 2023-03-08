<script setup>

import { defineProps, reactive, toRef,ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter()

const props = defineProps({
      free_games:Array
});

   let free_games = props.free_games 

   let router_push_more = ()=>{
      router.push('/browse?filter=free')
   }

   let router_push_game = (game)=>{
      router.push('/game/'+game)
   }

</script>

<template>

   <div class="hidden w-screen md:flex items-start justify-center mb-[4rem]">

        <div class="flex flex-col rounded-md items-center pt-[2rem] justify-center w-[78%] bg-dark3">
                
                <div class="flex items-center w-[90%] mb-[2rem]">
                    <label for="" class="text-white text-[2.5rem] mr-2">
                        <ion-icon name="gift"></ion-icon>
                    </label>
                    <label for="" class="text-[1.3rem] text-white font-semibold flex-grow">Free games</label>
                     <button @Click="router_push_more()" class="text-white text-[1.1rem] border py-1 px-3 rounded-md hover:bg-gray-400 hover:bg-opacity-40 transition-all duration-150">view more</button>                   
                </div>

                <div class="grid grid-flow-col grid-rows-1 gap-[1.1rem] w-[90%] pb-[2rem]">

                         <div @Click="router_push_game(fg.name )" v-for="fg in free_games" class="flex   flex-col rounded-t-md cursor-pointer">
                                 <div class="relative mb-[1.5rem]  cursor-pointer group  overflow-hidden">
                                    <img :src="fg.img" alt="" class=" rounded-t-md w-full cursor-pointer min-h-[11.5rem] max-h-[16rem]">
                                    <div class="w-full h-full absolute group-hover:opacity-30 transition-all duration-200 opacity-0 bg-gray-400 translate-y-[-100%] z-30"></div>
                                    <div for="" :class="` ${!fg.cs? 'rounded-b-md  p-1 w-[100%]  text-center text-white bg-blue1':'hidden'} cursor-pointer`">Free now</div>
                                    <div for="" :class="`${fg.cs? 'rounded-b-md  p-1 w-full text-center text-white bg-black':'hidden'} cursor-pointer`">Coming soon</div>
                                 </div>
                                    <label for="" class="text-white text-lg cursor-pointer">{{ fg.name }}</label>
                                    <label for="" class=" text-gray-300 text-sm cursor-pointer">{{ fg.text }}</label>
                        </div>

                </div>

        </div>

   </div>





    <div class="md:hidden w-screen flex flex-col bg-dark2 mb-[3rem]">

         <div class="flex justify-between px-[1rem] py-[1.5rem] w-[100%] mb-[2rem]">
                    <label for="" class="text-white text-[1.5rem] mr-2">
                        <ion-icon name="gift"></ion-icon>
                    </label>
                    <label for="" class="text-[1.3rem] text-white font-semibold flex-grow">Free games</label>
                     <button @click="router_push_more()" class="text-white text-[1rem] border py-[.2rem] px-[.3rem] rounded-md">view more</button>                   
         </div>

          <div @Click="router_push_game(fg.name )" v-for="fg in free_games" class="flex flex-col px-[1rem] mb-[2rem]">
               <div class="mb-[1rem] relative">
                  <img class="rounded-t-md" :src="fg.img" alt="">
                  <div for="" :class="` ${!fg.cs? 'rounded-b-md  p-1 w-[100%] text-center text-white bg-blue1':'hidden'}`">Free now</div>
                  <div for="" :class="`${fg.cs? 'rounded-b-md  p-1 w-full text-center text-white bg-black':'hidden'}`">Coming soon</div>
               </div>
               <label for="" class="text-white text-xl">{{ fg.name }}</label>
               <label for="" class=" text-gray-300 text-sm">{{ fg.text }}</label>          
            </div>

    </div>


</template>