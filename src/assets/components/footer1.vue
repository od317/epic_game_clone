<script setup>

import { defineProps, reactive, toRef,ref } from "vue";

const props = defineProps({
      footer_cont : Array
});

      let footer_cont = props.footer_cont[0]

</script>


<template>

        <div class="md:flex w-full justify-center mb-[4rem]">
               <div class="md:flex p-[1rem] md:w-[78%]  ">  
                      <div class=" group relative cursor-pointer  ">
                        <router-link @click="page = 'browse'" class="absolute w-full h-full bg-gray-400  opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-200" to="/browse">
                        </router-link> 
                        <img class="w-[100%] rounded-2xl" src="https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=1080&resize=1&w=1920" alt="">
                    </div>
                      <div class=" w-[100%] p-2 flex flex-col justify-center md:ml-5 ">
                        <label for="" class="text-xl text-white mb-[1rem]">
                            Explore our catalog
                        </label>
                        <label for="" class="text-gray-400">
                            Browse by genre, features, price, and more to find your next favorite game.
                        </label>


                        <router-link @click="page= 'browse'" class="hidden md:inline-block text-black bg-white  mt-[3rem] p-[1rem] rounded-lg" to="/browse">
                          <button  class="w-[100%]">Browse All</button>
                        </router-link>
                        
                      </div>
               </div>
        </div>


</template>