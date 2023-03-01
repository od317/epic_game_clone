<script setup>

import { defineProps, reactive, toRef,ref } from "vue";

const props = defineProps({
      game : Object
});
    let game = props.game
    let view_sort = ref(false)
    let sort_op = ref('Alphabetical')
    console.log(game.ach_img)
    
    
    let ach = ref(game.achievements)
    ach.value.sort((a,b)=>{
        if (a.name < b.name) {
            return -1;
         }
        if (a.name > b.name) {
           return 1;
        }
         return 0;
      })

    let totlaxp = ref(0)
    for(let x of ach.value){
        console.log(x.name)
        totlaxp.value+= parseInt(x.xp.split(" ")[0])
    }

    let sort = (type,type2)=>{

        switch(type){
            case 'alpha':
            ach.value.sort((a,b)=>{
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                    return 1;
                    }
                    return 0;
            })
               break
            
            case 'rarity':
                ach.value.sort((a,b)=>{
                    if((a.unrate.split('%')[0]) >(b.unrate.split('%')[0]))
                       return 1
                    return -1   
                })
             break
            case 'lh':
            ach.value.sort((a,b)=>{
                   return  parseInt(a.xp.split(' ')[0]) - parseInt(b.xp.split(' ')[0])
                })
             break
            case 'hl':
            ach.value.sort((b,a)=>{
                   return  parseInt(a.xp.split(' ')[0]) - parseInt(b.xp.split(' ')[0])
                })
             break   
            default:
                break 
        }

        sort_op.value=type2
    }

</script>


<template>


    <div  class="hidden md:block p-[3.2rem] pt-[0rem]">
        <div class="flex   bg-dark3">

               <img :src="game.ach_img" class="w-[50%] rounded-md" alt="">
               <div class="flex flex-col justify-center p-[2rem] ">
               <label for="" class="text-gray-400 text-sm mb-[.5rem]">AVAILABLE ACHIEVEMENTS</label> 
               <label for="" class="text-white text-xl ">{{ ach.length }} Achievements</label>
            </div>
               
            <div class="flex flex-col justify-center p-[4rem] ">
                <label for="" class="text-gray-400 text-sm mb-[.5rem]">AVAILABLE XP</label> 
                <label for="" class="text-white text-xl ">{{ totlaxp }} xp</label>
            </div>

        </div>

     <div class='flex flex-col mt-[3.5rem]'>

        <label class="text-lg mb-[.5rem]" for="">Achievements <label for="" class="lg text-gray-400">({{ ach.length }})</label></label>


        <div class="flex  w-fit text-gray-400 relative z-30 focus-within:overflow-visible overflow-hidden">Sort 
            <button @click="view_sort = !view_sort"  for="" class="ml-[1rem] text-white flex  items-center cursor-pointer">{{sort_op}}<ion-icon name="arrow-dropdown" class="text-lg ml-[.4rem]"></ion-icon></button>
            <div :class="`  absolute w-[13rem] bg-dark2 translate-y-[15%] py-[1rem] z-30 ${view_sort?'flex flex-col':'flex flex-col'} `">
             
                <button @click="sort('alpha','Alphabetical')" :class="`text-start  text-white text-lg  ${sort_op=='Alphabetical'? ' bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200 `">Alphabetical</button>
                <button @click="sort('rarity','Rarity')" :class=" `text-start text-white text-lg  ${sort_op=='Rarity'? 'bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200`">Rarity</button>
                <button @click="sort('hl','xp: high to low')" :class=" `text-start text-white text-lg  ${sort_op=='xp: high to low'? 'bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200`">xp: high to low</button>
                <button @click="sort('lh','xp: low to high')" :class=" `text-start text-white text-lg  ${sort_op=='xp: low to high'? 'bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200`">xp: low to high</button>

            </div>
        </div> 


        <div v-for="a of ach" class=" flex flex-row my-[.5rem] py-[1rem] border-b-2 border-dark2">
             <img class="w-[10%]" :src="a.img" alt="">
              
             <div class="flex flex-col pt-[2rem] pl-[2rem]">
                
                <label for="" class="text-white text-lg  ">{{ a.name }}<label for="" class="ml-[1rem] text-gray-400">{{ a.text }}</label></label>
                
                <label for="" class="flex items-center mt-[.2rem] text-sm">
                  
                    <label class="flex border-r-2 border-dark2 pr-[.4rem]" for="">
                        <label for="">{{ a.xp }} </label>
                        <span class=" text-amber-800 ml-[.5rem] flex items-center text-center "><ion-icon name="trophy"></ion-icon></span>
                    </label>

                    <label for="" class="mx-[1rem] text-gray-400">{{ a.unrate}}</label>
                    
            </label>
            
            </div>

        </div>

    </div>

    </div>






    <div  class="md:hidden  px-[1rem]">
        <div class="flex flex-col  bg-dark3 rounded-md">

               <img :src="game.ach_img" class=" rounded-t-md" alt="">
  
               <div class="flex flex-row">

                <div class="flex flex-col justify-center p-[1rem] ">
               <label for="" class="text-gray-400 text-sm ">AVAILABLE ACHIEVEMENTS</label> 
               <label for="" class="text-white text-xl ">{{ ach.length }} Achievements</label>
            </div>
               
            <div class="flex flex-col justify-center ">
                <label for="" class="text-gray-400 text-sm ">AVAILABLE XP</label> 
                <label for="" class="text-white text-xl ">{{ totlaxp }} xp</label>
            </div>
       
        </div>

        </div>

     <div class='flex flex-col text-white mt-[3.5rem]'>

        <label class="text-lg mb-[.5rem]" for="">Achievements <label for="" class="lg text-gray-400">({{ ach.length }})</label></label>


        <div class="flex  w-fit text-gray-400 relative z-40 focus-within:overflow-visible overflow-hidden">Sort 
            <button @click="view_sort = !view_sort"  for="" class="ml-[1rem] text-white flex  items-center cursor-pointer">{{sort_op}}<ion-icon name="arrow-dropdown" class="text-lg ml-[.4rem]"></ion-icon></button>
            <div :class="`  absolute w-[13rem] bg-dark2 translate-y-[15%] py-[1rem] z-30 ${view_sort?'flex flex-col':'flex flex-col'} `">
             
                <button @click="sort('alpha','Alphabetical')" :class="`text-start  text-white text-lg  ${sort_op=='Alphabetical'? ' bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200 `">Alphabetical</button>
                <button @click="sort('rarity','Rarity')" :class=" `text-start text-white text-lg  ${sort_op=='Rarity'? 'bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200`">Rarity</button>
                <button @click="sort('hl','xp: high to low')" :class=" `text-start text-white text-lg  ${sort_op=='xp: high to low'? 'bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200`">xp: high to low</button>
                <button @click="sort('lh','xp: low to high')" :class=" `text-start text-white text-lg  ${sort_op=='xp: low to high'? 'bg-zinc-700':''} px-[1rem] py-[.5rem] hover:bg-zinc-700 transition-all duration-200`">xp: low to high</button>

            </div>
        </div> 


        <div v-for="a of ach" class=" flex flex-col my-[.5rem] py-[1rem] border-b-2 border-dark2">
              <div class="flex flex-row items-center"> 
                    <img class="w-[15%] h-[20%] mr-[1.5rem]" :src="a.img" alt="">
                    <div class="flex flex-col">
                        <label for="" class="text-white text-lg  ">{{ a.name }}</label>
                        <label for="" class=" text-gray-400">{{ a.text }}</label>
                   </div>
                </div>
              
             <div class="flex flex-col mt-[1rem] ">
                
                
                <label for="" class="flex flex-col items-start mt-[.2rem] text-sm">
                  
                    <label class="flex " for="">
                        <label for="">{{ a.xp }} </label>
                        <span class=" text-amber-800 ml-[.5rem] flex items-center text-center "><ion-icon name="trophy"></ion-icon></span>
                    </label>

                    <label for="" class=" text-gray-400">{{ a.unrate}}</label>
                    
            </label>
            
            </div>

        </div>

    </div>

    </div>



</template>