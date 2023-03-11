<script setup>

import games from '../games'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
let router = useRouter()


const props = defineProps({
      id : String
});

let id =  props.id
    id = id.toLocaleLowerCase()


let collection = ref([])

for(let i=0;i<100;i++)
for(let g of games){
    for(let c of games.get(g[0]).col){
        if(c.toLocaleLowerCase()== id){
          collection.value.push(games.get(g[0]))
          }
    }
}


for(let g of collection.value){
        let wlist2 = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : [] 
        for(let g2 of wlist2){
              if(g.name == g2.name){
                  g.inw = true
                  break
              }
          }
        }


let add_wish = (game2)=>{

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []


for(let g of wlist){
if(g.name === game2.name)
return
}
let game = games.get(game2.name)
if(game)
wlist.push(game)

game2.ro=true
let s = setTimeout(()=>{
 game2.ro=false
 game2.inw=true
 games.get(game2.name).inw=true
},1000)

localStorage.setItem('wish_list',JSON.stringify(wlist))

}



let remove_wish = (game)=>{

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []
wlist = wlist.filter(i=>{
return i.name !== game.name
})
game.ro=true
let s = setTimeout(()=>{
game.inw=false
game.ro=false
games.get(game.name).inw=false
},1000)
localStorage.setItem('wish_list',JSON.stringify(wlist))

}

let router_push_game = (name)=>{

    router.push('/game/'+name)

}

window.scrollTo({
        top:0,
      })

</script>



<template>

<div class="w-full  flex-col items-center hidden md:flex">
<div class="w-[78%]">

        <label class="text-white mt-[1rem]  text-[2.5rem]" for="">{{ id.toUpperCase() }}</label>

  
        <div class="grid md:grid-cols-4 grid-cols-2 gap-[1rem] w-full mt-[3rem]">


            <div @Click="router_push_game(game.name)" v-for="game in collection" class="  w-full py-[1rem] h-[100%] ">
                                      
                                      <div class="w-[100%]  group rounded-md relative">
                                         
                                       <div class="bg-gray-400 absolute rounded-md w-[100%] h-[100%] opacity-0 group-hover:opacity-20 transition-all duration-200 cursor-pointer"></div>
                                    
                                       
                                       <div class="absolute flex w-full justify-end items-start p-3"> 
                               
                               <div v-if="!game.inw"  class=" 
                                relative rounded-full z-30 text-2xl 
                                opacity-0 group-hover:opacity-100  transition-all duration-100 
                                after_wish">
                                    <button class="group relative " @click="add_wish(game)">
                                      <ion-icon  :class="` ${game.ro ? ' rotate-[360deg] transition-all duration-1000':''} bg-white   text-black rounded-full z-30 `" name="add-circle">
                                      </ion-icon>
                              
   
                                    </button>
                                    
                                    </div>
   
   
   
                                    <div v-if="game.inw"  class=" 
                                relative rounded-full z-30 text-2xl 
                                opacity-0 group-hover:opacity-100  transition-all duration-100 
                                after_wish2">
                                    <button class="  group " @click="remove_wish(game)">
                                      <ion-icon :class="`${game.ro ? ' rotate-[-360deg] transition-all duration-1000':''} bg-white  text-black  rounded-full z-30` " name="checkmark-circle">
                                      </ion-icon>
                              
                                    </button>
                                    
                                    </div>
   
   
                                </div>
   
   
                                       <img :src="game.logoimg" class="w-[100%]  rounded-md" alt="">
                                        
   
                                        
   
                                      </div>
                                        <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-2'}`">
                                           <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                               <label for="" class="w-full text-lg text-white">{{ game.name }} </label>
                                               <div class="flex w-full mt-2 items-center">
                                                   <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">50%</label>
                                                   <label for="" class="text-gray-500 text-[.8rem] mr-2 line-through">{{ game.price }}</label>
                                                   <label for="" class="text-white text-[.8rem]">${{ game.price }}</label>
                                               </div>
   
   
   
   
   
                                       </div>
   
   
                           </div>



        </div>


</div>
</div>





<div class="w-full  flex-col  flex md:hidden px-[1rem]">

        <label class="text-white mt-[2rem]  text-[1.6rem]" for="">{{ id.toUpperCase() }}</label>

  
        <div class="grid md:grid-cols-4 grid-cols-2 gap-[.5rem] w-full mt-[2rem]">


            <div @Click="router_push_game(game.name)" v-for="game in collection" class="  w-full py-[1rem] h-[100%] ">
                                      
                                      <div class="w-[100%]  group rounded-md relative">
                                         
                                    

   
                                       <img :src="game.logoimg" class="w-[100%]  rounded-md" alt="">
                                        
   
                                        
   
                                      </div>
                                        <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-2'}`">
                                           <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                               <label for="" class="w-full text-lg text-white">{{ game.name }} </label>
                                               <div class="flex w-full mt-2 items-center">
                                                   <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">50%</label>
                                                   <label for="" class="text-gray-500 text-[.8rem] mr-2 line-through">{{ game.price }}</label>
                                                   <label for="" class="text-white text-[.8rem]">${{ game.price }}</label>
                                               </div>
   
   
   
   
   
                                       </div>
   
   
                           </div>



        </div>


</div>

</template>