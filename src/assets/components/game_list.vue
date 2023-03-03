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
       console.log(game)
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

<div  class="hidden md:flex flex-col  w-full h-fit items-center mt-[6rem] mb-[4.5rem]">
  
     <div class="flex justify-between w-[78%] px-2 mb-4 
       lg:w-[78%]
       md:w-[100%]
     ">

     <router-link class=" cursor-pointer" :to="`games/`+type"> 
     <label for="" class="text-xl text-white cursor-pointer">games on sale</label>
     </router-link>
        <div>
          <button @click="backward" :disabled="parseInt(slide_perecent)<=0" :class="`disabled:bg-[#0f0f0f] text-white bg-[#212121] mx-2 rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropleft" ></ion-icon></button>
          <button @click="forward" :disabled="parseInt(slide_perecent)>=300" :class="` disabled:bg-[#0f0f0f] text-white bg-[#212121] rounded-full h-[1.5rem] w-[1.5rem] text-lg hover:bg-dark2 transition-all duration-100`"><ion-icon name="arrow-dropright"></ion-icon></button>   
        </div>
        
     </div>
    <div class="w-[78%]
       overflow-x-hidden
       lg:w-[78%]
       md:w-[100%]">
        
        <div class="flex   flex-row w-[400%]">
                


                
                  <div v-for="gl in gamelist" :class="`flex  justify-between w-full  h-fit translate-x-[-${slide_perecent== 100 ? '100':(slide_perecent== 200 ? '200':(slide_perecent== 300 ? '300':'0'))}%] transition-all duration-500`">
            
                      
                      <div class="group   ml-2 mr-2 relative
                      md:w-1/5
                      "  v-for="game in gl">
                            

                        


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
                              after_wish">
                                  <button class="  group " @click="remove_wish(game)">
                                    <ion-icon :class="`${game.ro ? ' rotate-[-360deg] transition-all duration-1000':''} bg-white  text-black  rounded-full z-30` " name="checkmark-circle">
                                    </ion-icon>
                            
                                  </button>
                                  
                                  </div>


                              </div>
                              

                              <router-link :to="`game/`+game.name"> 
                           
                                <div class=" cursor-pointer rounded-md absolute flex items-start justify-end h-[17rem] p-3  w-full bg-gray-200 opacity-0 hover:opacity-10 transition-all duration-200">
                              </div>
                      
                              <img :src="game.logoimg" alt=""  :class="`${ game.last ? 'w-0 h-0':'w-full lg:h-[17rem] md:h-[17rem]'} rounded-md`">
                              </router-link>
                   
                      <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-2'}`">
                       <label for="" class="w-full text-sm text-gray-600">Base game </label>
                        <label for="" class="w-full text-xl text-white">{{ game.name }} </label>
                        <div class="flex w-full mt-2 items-center">
                          <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">50%</label>
                          <label for="" class="text-gray-500 mr-2 line-through">$59.99</label>
                          <label for="" class="text-white">$29.99</label>

                        </div>
                      </div>
                      <div :class="`${game.last? 'w-full h-full':'hidden '} relative flex justify-center items-center`">
                        <img :src="game.game_list_img"  alt="">
                       <button :class="`${game.last? 'bg-blue1 text-white p-2 text-xl rounded-lg absolute z-10':''}`">see more</button>
                       <div class="absolute h-full w-full bg-black opacity-50"></div>
                      </div>
                      </div>

                  </div>



             

    </div>

    </div>
</div>




</template>