<script setup>


import { defineProps, reactive, toRef,ref } from "vue";
import flict from './tops_flict.vue'
const props = defineProps({
      games_grid : Array
});

    let games_grid = props.games_grid 
    console.log(games_grid)

</script>


<template>


     <div class="hidden w-full md:flex items-center justify-center">
        
            <div class="grid grid-cols-3 grid-rows-1  text-white w-[78%]  ">
 
                     <div v-for="game_list in games_grid" :class="`px-[1rem] ${game_list.last? '':'border-r border-1px border-dark2'}`">
                            
                             <div :class="`flex items-center mb-1`">
                               <div class="flex-grow text-[1.2rem] px-[.5rem]">{{ game_list.title }}</div>
                               <button class="border px-[1.5rem] py-2 rounded-md">view more</button>
                             </div>
                            
                            <div class="grid grid-cols-1 grid-rows-5">

                                  <div v-for="game in game_list.games" class=" group flex items-top rounded-2xl  px-[1rem] py-[.5rem] hover:bg-dark2 cursor-pointer transition-all duration-200">
                                            <div  class="w-[19%] h-[5.2rem] p-1 relative ">
                                                <div class="absolute flex justify-end   py-1  w-[80%]">
                                                    <button @click="console.log('ok')" class="rounded-full text-xl hidden opacity-0 group-hover:opacity-[100%] group-hover:inline-block transition-all duration-100"><ion-icon class="bg-black rounded-full" name="add-circle-outline"></ion-icon></button>
                                                </div>
                                                <img class=" w-full h-full rounded-[5px]" :src="game.img" alt="">
                                            </div>
                                            <div :class='`flex flex-col  h-[5.2rem] ml-[1rem]`'> 
                                                    <div>
                                                            <div for="" class="text-white text-lg">{{ game.name }}</div>
                                                            <div for="" :class="`${game.date? '':'hidden'} text-gray-400`">{{ game.date }}</div>
                                                    </div> 
                                                    <div for="" :class="`text-white text-[13px]  ${game.date? 'mt-[.5rem]':'flex items-center flex-grow'}  pb-1`">
                                                          <label for="" :class="`${game.dis?'':'hidden'} bg-blue1 text-sm py-1 px-3 text-[12px] rounded-md self-end `">{{ game.dis }}</label>
                                                          <label for="" :class="`${game.preprice?'':'hidden'} py-1 ml-1 line-through text-gray-500 self-end`">{{ game.preprice }}</label> 
                                                          <label for="" :class="`self-end py-1 ml-1`">{{ game.price }}</label> 
                                                    </div>
        
                                          </div>
                                  </div>

                            

                            </div>

                    </div>

            </div>

     </div>

     <flict :games="games_grid"/>
   


</template>