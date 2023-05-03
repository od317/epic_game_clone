<script setup>

import { defineProps, reactive, toRef,ref } from "vue";
import flic from './flic_game_list.vue'

import games from '../../games'



const props = defineProps({
  gamelist: Array,
  type: String
});

 let gamelist = ref(props.gamelist)
 let type = props.type
 let view_type = ref('')

 switch(type){
  case 'ac':
    view_type.value = 'Top Action Games'
    break
  case 'adv':
    view_type.value = 'Top adventuer Games'
    break
    case 'fps':
    view_type.value = 'Top Fps Games'
    break
    case 'ac-adv':
    view_type.value = 'Top Action Adventure Games'
    break
    case 'mp':
    view_type.value = 'Top Mulyiplayer Games'
    break
    case 'free':
    view_type.value = 'Top free Games'
    break
    
  default:
    break  
 }

 for(let gl of gamelist.value)
      for(let g of  gl){
       let wlist2 = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : [] 
        for(let g2 of wlist2){
              if(g.name == g2.name){
                  g.inw = true
                  break
              }
          }
        }


 let slide = ref(false)
 let slide_perecent = ref("0")
 
 
 let backward  = ()=>{
  let tmp = parseInt(slide_perecent.value)
  tmp-=100
  slide_perecent.value= new String(tmp)
 }
 let forward = ()=>{
  let tmp = parseInt(slide_perecent.value)
  tmp+=100
  slide_perecent.value= new String(tmp)
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

 window.scrollTo({
        top:0,
      })

</script>

<template>


<flic :games="gamelist" :type="type"/>

<div  class="hidden md:flex flex-col lg:px-[11%] w-full   items-center mt-[6rem] mb-[4.5rem]">
  
  <div class="flex justify-between w-full px-2 mb-4 
  ">

  <router-link v-if="type!='mp' && type!='free'" class="flex flex-row items-center cursor-pointer group " :to="`games/`+type"> 
  <label for="" class="text-xl text-white cursor-pointer">{{ view_type }}</label>
 <label class="text-[1rem] flex items-center text-center text-white ml-[1rem] group-hover:ml-[2rem] transition-all duration-150" for="">></label>

  </router-link>

  <router-link v-else class="flex flex-row items-center cursor-pointer group " :to="`/browse?filter=`+type"> 
  <label for="" class="text-xl text-white cursor-pointer">{{ view_type }}</label>
 <label class="text-[1rem] flex items-center text-center text-white ml-[1rem] group-hover:ml-[2rem] transition-all duration-150" for="">></label>

  </router-link>

     <div>
       <button @click="backward" :disabled="parseInt(slide_perecent)<=0" :class="`disabled:bg-[#0f0f0f] text-white bg-[#212121] mx-2 rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropleft" ></ion-icon></button>
       <button @click="forward" :disabled="parseInt(slide_perecent)>=200" :class="` disabled:bg-[#0f0f0f] text-white bg-[#212121] rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropright"></ion-icon></button>   
     </div>
     
  </div>
  

   <div  class=" whitespace-nowrap relative  overflow-x-hidden   w-full">
     
              <div v-for="gl in gamelist" :style="`transform: translateX(-${slide_perecent}%)`" class="  w-full h-full transition-all duration-500 inline-block    px-[1%]">
                <div class="flex flex-row w-full justify-between">
                           
                         <div class="w-[19%] flex flex-col  relative" v-for="game in gl" for="">
                                        
                                <div :style="`background-image: url(${game.logoimg});`" class="w-full group cursor-pointer pb-[150%]  bg-cover bg-center  relative">
                                                
                                      <div class="absolute flex h-full w-full justify-end items-start p-3"> 
                                        
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
                                                              after_wish">
                                                                  <button class="  group " @click="remove_wish(game)">
                                                                    <ion-icon :class="`${game.ro ? ' rotate-[-360deg] transition-all duration-1000':''} bg-white  text-black  rounded-full z-30` " name="checkmark-circle">
                                                                    </ion-icon>
                                                            
                                                                  </button>
                                                                  
                                                                  </div>


                                      </div>

                                      <Router-link class=" absolute w-full h-full bg-gray-300 bg-opacity-[0%] group-hover:bg-opacity-[10%] transition-all duration-150"   :to="`game/`+game.name">
                                      </Router-link>

                                </div>


                                <div class="flex flex-col text-white">
                                     <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                     <label for="" class="w-full  text-white line-clamp-2">{{ game.name }} </label>
                                      <div class="flex w-full mt-2 items-center">
                                          <label v-if="game.dis" for="" class="text-white text-[70%]  bg-blue1 rounded-md p-1 px-2 mr-3">{{game.dis}}</label>
                                          <label v-if="game.oldprice" for="" class="text-gray-500 mr-2 line-through">${{ game.oldprice }}</label>
                                          <label v-if="game.price!=='free'"  for="" class="text-white">${{ game.price }}</label>
                                          <label v-else for="" class="text-white">{{ game.price }}</label>
                                      </div>                                
                                </div>



                          </div>
                          
                </div>           
              </div>       

   </div>






</div>



</template>