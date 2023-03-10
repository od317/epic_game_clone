<script setup>


import { defineProps, reactive, toRef,ref } from "vue";
import flict from './tops_flict.vue'
import gamesc from '../../games'
import router from "../../router";

const props = defineProps({
      games_grid : Array
});

    let games_grid1 = ref(props.games_grid) 
    
    let games_grid = ref(props.games_grid)



let add_wish = (game2)=>{

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []



for(let g of wlist){
 if(g.name === game2.name)
 return
}
let game = gamesc.get(game2.name)
if(game)
wlist.push(game)

game2.ro=true
let s = setTimeout(()=>{
    game2.ro=false
    gamesc.get(game2.name).inw=true
  },1000)

localStorage.setItem('wish_list',JSON.stringify(wlist))

}








let remove_wish = (game)=>{

  let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []
  wlist = wlist.filter(i=>{
   return i.name !== game.name
  })
  console.log(game)
  game.ro=true
  let s = setTimeout(()=>{
   gamesc.get(game.name).inw=false
   game.ro=false
  },1000)
  localStorage.setItem('wish_list',JSON.stringify(wlist))

}

  let router_push_more = (game)=>{

    router.push('/collection/'+game)

  }

  let router_push_game = (game)=>{
    router.push('/game/'+game)
    setTimeout(()=>{
    },1)
  }

</script>


<template>


     <div class="hidden w-full md:flex items-center justify-center">
        
            <div class="grid grid-cols-3 grid-rows-1   text-white lg:w-[78%]  ">
 
                     <div  v-for="game_list in games_grid" :class="`px-[1rem] ${game_list.last? '':'border-r border-1px border-dark2'}`">
                            
                             <div :class="`flex items-center mb-1`">
                               <div class="flex-grow text-[1rem] pl-[.5rem]">{{ game_list.title }}</div>
                               <router-Link :to="'/collection/'+game_list.title"  class="border text-[.9rem] px-[1rem] py-[.3rem] rounded-sm hover:bg-gray-500 hover:bg-opacity-50 transition-all duration-150">view more</router-link>
                             </div>
                            
                            <div class="grid grid-cols-1 grid-rows-5">

                                  <div  @click="router_push_game(game.name)" v-for="game in game_list.games" class=" group flex items-top rounded-2xl  px-[1rem] py-[.1rem] hover:bg-dark2 cursor-pointer transition-all duration-200">
                                            <div  class="w-[19%] h-[5rem] p-1 relative ">
                                                <div class="absolute flex justify-end   py-1  w-[80%]">
                                                        <div v-if="!game.inw"  class=" 
                              relative rounded-full z-30 text-xl 
                              opacity-0 group-hover:opacity-100  transition-all duration-100 
                              after_wish">
                                  <button @click.stop.prevent class="group relative " @click="add_wish(game)">
                                    <ion-icon  :class="` ${game.ro ? ' rotate-[360deg] transition-all duration-1000':''} bg-white   text-black rounded-full z-30 `" name="add-circle">
                                    </ion-icon>
                            

                                  </button>
                                  
                                  </div>



                                  <div v-if="game.inw"  class=" 
                              relative rounded-full z-30 text-xl 
                              opacity-0 group-hover:opacity-100  transition-all duration-100 
                              after_wish">
                                  <button @click.stop.prevent class="  group " @click="remove_wish(game)">
                                    <ion-icon :class="`${game.ro ? ' rotate-[-360deg] transition-all duration-1000':''} bg-white  text-black  rounded-full z-30` " name="checkmark-circle">
                                    </ion-icon>
                            
                                  </button>
                                  
                                  </div>          
                                </div>
                                                <img class=" w-full h-full rounded-[5px]" :src="game.logoimg" alt="">
                                            </div>
                                            <div :class='`flex flex-col  justify-evenly  h-[5.2rem] ml-[1rem]`'> 
                                                            <div for="" class="text-white ">{{ game.name }}</div>
                                                            <div for="" :class="`${game.date? '':'hidden'} text-gray-400`">{{ game.date }}</div>
                                                    <div for="" :class="`text-white text-[13px]  ${game.date? 'mt-[.5rem]':'flex items-center  '}  pb-1`">
                                                          <label for="" :class="`${game.dis?'':'hidden'} bg-blue1 text-sm py-1 px-3 text-[12px] rounded-md self-end `">{{ game.dis }}</label>
                                                          <label for="" :class="`${game.oldprice?'':'hidden'} py-1 ml-1 line-through text-gray-500 self-end`">${{ game.oldprice }}</label> 
                                                          <label for="" :class="`self-end py-1 ml-1`">${{ game.price }}</label> 
                                                    </div>
        
                                          </div>
                                  </div>

                            

                            </div>

                    </div>

            </div>

     </div>

     <flict :games="games_grid"/>
   


</template>