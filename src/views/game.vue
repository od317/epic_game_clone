<script setup>


import { defineProps, reactive, toRef,ref } from "vue";

import games from '../games'
import ach from '../assets/components/game.vue/ach.vue' 
import flic from '../assets/components/game.vue/flic_game.vue'
import { useRouter } from "vue-router";
import adds_grid from '../assets/components/game.vue/adds_grid.vue'
let router = useRouter()

const props = defineProps({
      id : String
});

let id = props.id



let game = ref(games.get(id))

let v_ach = ref(game.value.achievements.slice(0,4))

let s = []




let slide_on = ref(false)
let slide_val = ref('0')
let slide_val_bot = ref(0)
let slide_top_val = ref(0)
let top_bot_pos = ref(0)
let bot_top_pos = ref(1)

let backward = ()=>{
   slide_on.value=true
   let tot = 0
    for(let imgs of game.value.imgs){
        for(let im of imgs){
            tot+=1
        }
    }
   if(slide_val_bot.value>=0){
     slide_val_bot.value = (-Math.floor(Math.floor(slide_imgs.length-1/4)/4))
   }
   else{
    slide_val_bot.value += 1
   }
   slide_val.value=slide_val_bot.value+'00%'

}

let forward = ()=>{
    let tot = 0
    for(let imgs of game.value.imgs){
        for(let im of imgs){
            tot+=1
        }
    }
    if(slide_val_bot.value<= -1 *(Math.ceil((tot)/4)-1)){
     slide_val_bot.value = 0
   }  
   else{
    slide_val_bot.value -= 1
   }
    slide_val.value=slide_val_bot.value+'00%'

 
}



let slide_imgs = []

let cur_slide_imgs = ref()

for(let i =0 ; i<game.value.imgs.length;i++){
    slide_imgs = slide_imgs.concat(game.value.imgs[i])
}
    let slide_top_img_per = ref(slide_top_val.value+'00%');
  
    let pos_top = ref([0,1,2])


let forward_1 = ()=>{
    if(slide_top_val.value<= -(slide_imgs.length-1)){
    slide_top_val.value = 0
    top_bot_pos.value = 0
    slide_val.value=0+'00%'
    bot_top_pos.value = 1
    }
    else{
    slide_top_val.value -= 1;
    top_bot_pos.value +=1
    bot_top_pos.value +=1
    slide_val.value=(-Math.floor(top_bot_pos.value/4))+'00%'
    }
    slide_top_img_per.value = slide_top_val.value+'00%'
}



let backward_1 = ()=>{
    if(slide_top_val.value>=(0)){
    slide_top_val.value = -(slide_imgs.length-1)
    top_bot_pos.value = Math.floor(slide_imgs.length-1/4)
    slide_val.value=(-Math.floor(top_bot_pos.value/4))+'00%'
    bot_top_pos.value = slide_imgs.length    
}
    else{
    slide_top_val.value += 1;
    top_bot_pos.value -=1
    bot_top_pos.value -=1
    slide_val.value=(-Math.floor(top_bot_pos.value/4))+'00%'
    }
    slide_top_img_per.value = slide_top_val.value+'00%'
 

}


let slide_bottom_up = (new_pos)=>{
    bot_top_pos.value = new_pos
    top_bot_pos.value = new_pos-1
    slide_top_val.value = -new_pos+1
    slide_top_img_per.value = slide_top_val.value+'00%'

}


let sm = ref(true)


let nav = ref('over')

let change_nav = (v)=>{

        nav.value = v
        window.scrollTo({
        top:0   ,
      })
      window.scrollTo({
        top:0   ,
        behavior: 'smooth'
      })

}



let addcart = (game)=>{

let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : []

for(let g of cart){
 if(g.name === game.name)
 return
}

cart.push(game)
localStorage.setItem('cart',JSON.stringify(cart))
incart.value = true
}



let add_wish = (game2)=>{

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []



for(let g of wlist){
 if(g.name === game2.name)
 return
}
let game = games.get(game2.name)
if(game2.type=='basegame'){
   if(game)
   wlist.push(game)
  }
else
wlist.push(game2)

game2.ro=true
let s = setTimeout(()=>{
    game2.ro=false
    game2.inw=true
    if(game2.type=='basegame')
    games.get(game2.name).inw=true
    else{
        for(let t of games.get(game2.mainname).adds){
            if(t.name == game2.name){
                t.inw=true
            }
        }
    }
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
 if(game.type=='basegame')
    games.get(game.name).inw=false
    else{
        for(let t of games.get(game.mainname)){
            if(t.name == game.name){
                t.inw=false
            }
        }
    }},1000)
localStorage.setItem('wish_list',JSON.stringify(wlist))

}



let wlist2 = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : [] 
        for(let g2 of wlist2){
              if(game.value.name == g2.name){
                  game.value.inw = true
                  break
              }
          }

let incart = ref(false)
let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [] 
        for(let g2 of cart){
              if(game.value.name == g2.name){
                  incart.value = true
                  break
              }
          }          



let cart_router_push = ()=>{
    router.push({ path: `/cart` })
}


let router_push_game_type = (g)=>{
    router.push('/games/'+g)
}


let router_push_game_browse = (f)=>{
    router.push('/browse?filter='+f)
}


let in_ed_add = (t1,t2)=>{

    if(t2=='c'){
        let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [] 
        for(let c of cart){
            if(t1.name === c.name)
               return true
        }
    }
    else{
        let wlist2 = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : [] 
        for(let c of wlist2){
            if(t1.name === c.name)
               return true
        }
    }
    return false
}


let ed_add_push = (t)=>{
    if(t=='c')
    router.push('/cart')
    else
    router.push('/wishlist')
}


window.scrollTo({
        top:0   ,
      })

     
       

</script>


<template>
      <!--large screen-->
      <div class="hidden md:flex justify-center">

               <div class="lg:w-[78%] lg:px-0 md:px-[2rem]  text-white ">

                         <div class='px-[1.2rem]'>
                        <div class="flex flex-col">
                            <label v-if=" nav=='over' || nav=='ach' " class="text-xl" for="">{{ game.name }}</label>
                            <label class="text-xl" v-if=" nav=='adds' " for="">{{ game.name }}</label>
                            <label class="text-[1.6rem]" v-if=" nav=='adds' " for="">DLC and Add-ons</label>
                        </div>    
                            <div v-if=" nav=='over' " class="flex items-center ">
                                  
                                  <div class="mt-[1rem] flex items-center text-lg">
                                    <ion-icon v-if="game.rate>=1" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>0 && game.rate<1" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<1" name="star-outline"></ion-icon>  

                                                                <ion-icon v-if="game.rate>=2" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>1 && game.rate <2" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<2" name="star-outline"></ion-icon>    

                                                                <ion-icon v-if="game.rate>=3" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>2 && game.rate <3" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<3" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate>=4" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>3 && game.rate<4" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<4" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate==5" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>4 && game.rate<5" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<5" name="star-outline"></ion-icon>   

                                            <label for="" class=" ml-[.5rem] text-[.8rem] rounded-md text-gray-400 bg-dark2 px-2 py-1">{{game.rate}}</label>
                                            
                                            <label for="" class=" ml-[.5rem] flex flex-row items-center pl-1 py-1">
                                                <img class="w-[11%] mr-[.3rem]" :src="game.game_disc[0].img" alt="">
                                                {{game.game_disc[0].text}}
                                            </label>
                                            <label for="" class="  flex flex-row items-center pl-1 py-1">
                                                <img class="w-[11%] mr-[.3rem]" :src="game.game_disc[1].img" alt="">
                                                {{game.game_disc[1].text}}
                                            </label>

                                        
                                        </div>

 





                                </div>
                         </div>



                        <div :class="`flex  text-[1.4rem] text-white sticky top-[4rem] bg-dark1 z-50 p-[1.2rem] pb-[1rem]`">

                            <button @click="change_nav('over')" :class="`mx-[2rem] border-b-4 border-opacity-0 ${nav=='over'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">overview</button>
                               <button @click="change_nav('ach')" :class="`mx-[2rem] border-b-4 border-opacity-0 ${nav=='ach'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">achivments</button>
                               <button @click="change_nav('adds')" :class="`mx-[2rem] border-b-4 border-opacity-0 ${nav=='adds'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">Add ons</button>

                                
                        </div>










                         <div v-if="nav=='over'" class="grid grid-cols-3">
               
                           <div class=" col-span-2 p-[1.2rem] flex flex-col">


                          <div class="relative ">
                            
                            <div class="flex absolute w-full h-full  items-center justify-between group z-10 overflow-x-hidden">
                                
                                <div class="px-[2rem]  h-full translate-x-[-100%] 
                                    bg-gradient-to-r from-black/30 
                                    group-hover:from-black/30  group-hover:translate-x-[0%] 
                                    transition-all duration-500 
                                    text-xl 
                                    flex items-center 
                                    ">
                                       <button @click="backward_1()" class="opacity-0 group-hover:opacity-100  bg-opacity-0 transition-all duration-300 "><ion-icon name="arrow-dropleft"></ion-icon></button>   
                                </div>
                            
                            
                                <div class="px-[2rem]  h-full translate-x-[100%] 
                                    bg-gradient-to-l from-black/30 
                                    group-hover:bg-opacity-30 group-hover:translate-x-[0%] 
                                    transition-all duration-500 
                                    text-xl 
                                    flex items-center 
                                    ">
                                       <button @click="forward_1()"
                                        class="opacity-0 group-hover:opacity-100   bg-opacity-0 transition-all duration-300 "><ion-icon name="arrow-dropright"></ion-icon></button>   
                                </div>
                            

                            </div>

                            <div class="flex flex-row overflow-x-hidden relative">
                               <img  v-for="img in slide_imgs" :class="`  transition-all duration-200 
                                translate-x-[${slide_top_img_per}]    `" :src="img.img" alt="">
                            </div>
                            
                            
                          </div>


                          <div class="flex justify-between items-center">
                            
                           <button @click="backward()" class="z-20"><ion-icon name="arrow-dropleft"></ion-icon></button>

                                        
                           <div class="w-[78%] overflow-x-hidden">
                        
                                      <div  class="flex w-[300%]  z-50 flex-row">           
                                     
                                           <div  v-for="imgs in game.imgs " :class="`flex flex-row  w-[300%]   translate-x-[${slide_val}] transition-all duration-450 p-[2rem]`">
                                                <img @click="slide_bottom_up(img.num)" v-for="img in imgs" :class="`${bot_top_pos== img.num ? 'border':''} w-[20%] first:mx-0 first:mr-[1rem] mx-[1rem] opacity-40 hover:opacity-100 cursor-pointer transition-all duration-200`" :src="img.img" alt="">
                                           </div>

                                     
                                        
                                    </div>
                                        

                  
                  </div>


                           <button @click="forward()" class="z-20"><ion-icon name="arrow-dropright"></ion-icon></button>


                          </div>




                           <label for="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet error voluptas modi earum.
                             Voluptate ex omnis iure officiis molestiae neque ea, libero praesentium quo quos ut optio sint temporibus.
                           </label>


                           <div class="flex my-[2rem]">

                            <div class=" flex flex-wrap items-start w-[49%] px-[1rem] border-l-[.1rem] broder-gray-500 text-white">
                        <label class="w-[100%] text-gray-500   " for="">Genres</label>
                        <button @click="router_push_game_type(g)" v-for="g in game.gener" class=" border-b-[.1rem] ml-[.5rem]">{{g}} </button>
                        
                       </div>


                        <div class=" flex flex-wrap w-[49%] border-l-[.1rem] px-[1rem] broder-gray-500 text-white">
                        <label class="w-[100%] text-gray-500 " for="">Features</label>

                        <button @click="router_push_game_browse(f)" v-for="f in game.features" class=" border-b-[.1rem] ml-[.5rem]">{{f}} </button>


                       </div>

                           </div>



                           <div class="my-[2rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis ad laudantium possimus id atque earum modi ipsa
                             molestias accusantium maiores quod perspiciatis consectetur, eum quos. Laboriosam cum laudantium aspernatur?
                           </div>




                           <div>
                            <img :src="game.bottom_img" alt="">
                           </div>


                           <div class=" relative mt-[1rem] overflow-y-hidden">
                            Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.
                                    You are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.
                                    Participate in the life of a city engulfed in a new dark era. Discover different paths and hidden passages, as you explore its multipl
                                    <div :class="` ${sm ?'absolute z-0 opacity-20':''}`">
                                    Take advantage of your parkour skills to tip the scales of even the most brutal encounter. Clever thinking, traps and creative weapons will be your best friends.
                                    DAY AND NIGHT CYCLE
                                    Wait for night to venture into dark hideouts of the Infected. Sunlight keeps them at bay, but once it’s gone, monsters begin the hunt, leaving their lairs free to explore.
                                    CHOICES & CONSEQUENCES
                                    Shape the future of The City with your actions and watch how it changes. Determine the balance of power by making choices in a growing conflict and forge your own experience.
                                    2-4 PLAYER CO-OP GAMEPLAY
                                    Play in up to four-player co-op. Host your own games or join others and see how their choices have played out differently than yours.</div>
                                   <button v-if="sm" @click="sm = !sm" class="rounded-md w-full bg-dark3 mt-[1.5rem] py-[.5rem] relative z-0">show more<ion-icon class="translate-y-[15%]" name="arrow-dropdown"></ion-icon></button>
                                   <button v-else @click="sm = !sm" class="rounded-md w-full bg-dark3 mt-[1.5rem] py-[.5rem] relative z-50">show less<ion-icon class="translate-y-[15%]" name="arrow-dropup"></ion-icon></button>

                           </div>




                           </div>






                           <div class="">
                                <div class="sticky top-[7rem] h-[50%]  pl-[3rem] py-[1rem] text-sm">
                                    <div class="flex items-center justify-center mb-[1rem]"><img class="w-[60%]" :src="game.img" alt=""></div>
                                    
                                    <div class="felx flex-col">
                                        <label for="" class="bg-dark2 rounded-sm px-[.5rem]  text-[.7rem] py-[.3rem]">Base game</label>
                                        
                                        <div class="felx mt-[.8rem] mb-[.5rem]">
                                             <label v-if="game.dis" for="" :class="`bg-[${game.theme_color}] rounded-md px-[.4rem]  py-[.3rem] text-sm`">{{game.dis}}</label>
                                             <label v-if="game.oldprice" for="" class="text-gray-400 mx-3"> {{game.oldprice}} $ </label>
                                             <label v-if="game.price!=='free'" for="" class="text-white mx-2">{{game.price}}$</label>
                                             <label v-else for="" class="text-white mx-2">{{game.price}}</label>
                                            </div>

                                        <label v-if="game.dis" class=" " for="">sales end in {{ '2023/'+(Math.floor(Math.random() * (12 - 5 + 1)) + 5)+'/'+(Math.floor(Math.random() * (29 - 1 + 1)) + 1) }}</label>

                                        <button v-if="game.price!=='free'" :class="`bg-[${game.theme_color}] w-full mt-[1rem] px-[1rem] py-[.6rem] rounded-md`">Buy now</button>
                                        <button v-else :class="`bg-[${game.theme_color}] w-full mt-[1rem] px-[1rem] py-[.6rem] rounded-md`">Get now</button>
                                        <button v-if="!incart" @click=" addcart(game)" class=" border border-white rounded-md px-[1rem] py-[.6rem] w-full mt-[1rem] hover:bg-gray-400 hover:bg-opacity-30 transition-all duration-100 ">Add to cart</button>
                                        <button v-else @click=" cart_router_push()" class=" border border-white rounded-md px-[1rem] py-[.6rem] w-full mt-[1rem] hover:bg-gray-400 hover:bg-opacity-30 transition-all duration-100">view in cart</button>
                                        <button v-if="!game.inw" @click=" add_wish(game) " :class="` border border-white rounded-md px-[1rem] py-[.2rem] w-full mt-[1rem] mb-[1rem] hover:bg-gray-400 hover:bg-opacity-30 transition-all duration-100 `">
                                           <ion-icon  :class="` ${game.ro ? ' rotate-[360deg] transition-all duration-1000':''} bg-white translate-y-[15%] mr-[.5rem] text-black rounded-full z-30 `" name="add-circle">
                                           </ion-icon>
                                           <label class=" cursor-pointer" for="">add to wishlist</label> 

                                        </button>
                                        
                                        <button v-else @click=" remove_wish(game) " :class="` border border-white rounded-md px-[1rem] py-[.2rem] w-full mt-[1rem] mb-[1rem] hover:bg-gray-400 hover:bg-opacity-30 transition-all duration-100 
                                        `">
                                         
                                           <ion-icon  :class="`${game.ro ? ' rotate-[-360deg] transition-all duration-1000':''} bg-white translate-y-[15%] mr-[.5rem] text-black  rounded-full z-30` " name="checkmark-circle">
                                           </ion-icon>
                                           <label class=" cursor-pointer" for="">remove form wishlist</label>

                                        </button>

                                        <div class="flex justify-between px-[.1rem] py-[.8rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">Refund Type</label>
                                            <label for="">Self-Refundable</label>
                                        </div>                                        


                                        <div class="flex justify-between px-[.1rem] py-[.8rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">Developer</label>
                                            <label for="">{{game.dev}}</label>
                                        </div>  


                                        <div class="flex justify-between px-[.1rem] py-[.8rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">Publisher</label>
                                            <label for="">{{game.pub}}</label>
                                        </div>  


                                        <div class="flex justify-between px-[.1rem] py-[.8rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">Release Date</label>
                                            <label for="">{{game.rdate}}</label>
                                        </div>  


                                        <div class="flex justify-between px-[.1rem] py-[.8rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">Initial Release</label>
                                            <label for="">{{game.indate}}</label>
                                        </div>  

                                   
                                        <div class="flex justify-between px-[.1rem] py-[.8rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">Platform</label>
                                            <label class="text-[1.3rem]" for=""><ion-icon name="logo-windows"></ion-icon></label>
                                        </div>  


                                        <div class="flex mt-[1rem] justify-between">

                                            <button class="w-[48%] border px-[.1rem] py-[.2rem] rounded-md hover:bg-gray-400 hover:bg-opacity-30">share</button>
                                            <button class="w-[48%] border px-[.1rem] py-[.2rem] rounded-md hover:bg-gray-400 hover:bg-opacity-30">report</button>


                                        </div>

                                    </div>
                                    
                                </div>
                           </div>
                           
                         </div>

























                         <div v-if="nav=='over'" class=" lg:grid lg:grid-cols-3">


                            <div class=" col-span-2 p-[1.2rem]">        
                                             
                                <div class="flex flex-col">
                                    <label for="">Available Achievements</label>

                                    <div class="flex flex-row  justify-between my-[1rem]">
                                        
                                            <div v-for="ach in v_ach" class="flex flex-col w-[12%] my-[1rem]">

                                                        <img :src="ach.img" alt="" class="mb-[.5rem]">
                                                        <label for="" class="">{{ach.name.length >= 10 ? ach.name.substring(0,10)+'...':ach.name}}</label>
                                                        <label for="" class="flex items-start"><span class=" text-amber-800 mr-[.1rem] translate-y-[5%]"><ion-icon name="trophy"></ion-icon></span>{{ach.xp}}</label> 

                                            </div>


                                    </div>
                                    <button @click="change_nav('ach')" class="w-[100%] bg-dark2 p-[1rem] hover:bg-dark3 transition-all duration-200">view all ach</button>

                                </div>


                                











                                <div class="flex flex-col mt-[4rem] mb-[3rem]">
                                    
                                    <label v-if="game.adds" for="">Add ons</label>

                                    <div v-if="game.editions" v-for="ed in game.adds" class="flex rounded-md text-[.9rem] mt-[1rem] flex-col bg-dark2">
                                                        <div class="flex flex-row border-b-2">
                                                            <img :src="ed.img" class="w-[50%] rounded-tl-md" alt="">
                                                            <div class="flex flex-col ">

                                                                    <div class="flex flex-row p-[1rem]">
                                                                        <label for="" class="bg-dark1 rounded-md p-[.2rem] text-[.7rem] mr-[1rem]">{{ ed.type }}</label>
                                                                        <label for="">{{ ed.name }}</label>
                                                                    </div>

                                                                    <label for="" class="pl-[1rem]">{{ ed.text }}</label>

                                                            </div>


                                                        
                                                        </div>

                                                        <div class="flex justify-end items-center py-[1rem]">
                                                                    
                                                                    <div class="flex flex-col">

                                                                            <div class="flex flex-row items-center justify-end">

                                                                                    <label for="" class="mx-[.5rem]">${{ ed.price }}</label>


                                                                            </div>

                                                                    </div>
                                                            
                                                                    <button v-if="!in_ed_add(ed,'c')" @click="addcart(ed) " class="py-[.7rem] px-[.6rem] border w-[30%] mx-[.5rem]  rounded-sm hover:bg-gray-400 hover:bg-opacity-30 ">add to cart</button>
                                                                    <button v-else @click="ed_add_push('c') " class="py-[.7rem] px-[.6rem] border w-[30%] mx-[.5rem]  rounded-sm hover:bg-gray-400 hover:bg-opacity-30 ">view in cart</button>
                                                                    <button v-if=" !in_ed_add(ed,'w')" @click=" add_wish(ed) " class="py-[.7rem] px-[.6rem] border w-[30%] mx-[.5rem] rounded-sm hover:bg-gray-400 hover:bg-opacity-30 ">add to wishlist</button>
                                                                    <button v-else @click="ed_add_push('w') " class="py-[.7rem] px-[.6rem] border w-[30%] mx-[.5rem]  rounded-sm hover:bg-gray-400 hover:bg-opacity-30 ">view in wishlist</button>


                                                        </div>
                                                        
                                                </div>


                        </div>






                                    <div class="flex flex-col">

                                            <label for="" class="text-[1.5rem]">Follow us</label>
                                            <div class="flex rounded-md bg-dark2 items-center justify-center py-[2rem] mt-[2rem]">

                                                        <button class="text-[2.3rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[-2%] transition-all duration-200"><ion-icon name="logo-youtube"></ion-icon></button>
                                                        <button class="text-[2.3rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[-2%] transition-all duration-200"><ion-icon name="logo-twitter"></ion-icon></button>
                                                        <button class="text-[2.3rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[-2%] transition-all duration-200"><ion-icon name="logo-facebook"></ion-icon></button>
                                                        <button class="text-[2.3rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[-2%] transition-all duration-200"><ion-icon name="logo-instagram"></ion-icon></button>

                                                        
                                            </div>
                                    </div>








                                <div class="flex flex-col mt-[4rem]">

                                            <label for="" class="text-lg">Epic Player Ratings</label>
                                            <label for="" class="text-md text-gray-400 mt-4">Captured from players in the Epic Games ecosystem.</label>
                                                
                                            <div class="text-[2.8rem] mt-[2rem] flex flex-row items-center justify-center">
                                                        <label for="" class="">{{ game.rate }}</label>
                                                        
                                                        <label for="">
                                                            
                                                            <div class="flex items-center">
                                                                <ion-icon v-if="game.rate>=1" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>0 && game.rate<1" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<1" name="star-outline"></ion-icon>  

                                                                <ion-icon v-if="game.rate>=2" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>1 && game.rate <2" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<2" name="star-outline"></ion-icon>    

                                                                <ion-icon v-if="game.rate>=3" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>2 && game.rate <3" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<3" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate>=4" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>3 && game.rate<4" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<4" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate==5" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>4 && game.rate<5" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<5" name="star-outline"></ion-icon>   

                                                            </div>

                                                        </label>
                                                    
                                            </div>


                                            <div class="flex flex-wrap justify-between mt-[2rem] ">
                                                    <div v-for="disc in game.game_disc" class="rounded-md py-[1rem] mb-[2rem] bg-dark2 w-[45%] flex flex-col items-center justify-center">
                                                        <img :src="disc.img" alt="">
                                                        <label for="" class="text-center text-gray-400 mt-[1rem]">{{ disc.title }}</label>
                                                        <label for="" class="text-white text-xl font-bold">{{disc.text}}</label>
                                                    </div>
                                            </div>
                                        

                                </div>







                         </div>

                       </div>













                       <ach v-if="nav=='ach'" :game="game"/>

                       <adds_grid v-if="nav=='adds'" :game="game"/>

                  </div>

      </div>






    <!--small screen -->

    <div class="md:hidden">

             <div class="flex flex-col text-white text-[1.8rem] px-[1rem]">
                
                <label v-if=" nav=='over' || nav=='ach' " for="">{{ game.name }}</label>
                <label class="text-sm" v-if=" nav=='adds' " for="">{{ game.name }}</label>
                <label class="text-[1.6rem]" v-if=" nav=='adds' " for="">DLC and Add-ons</label>

                <div v-if=" nav=='over' " class="flex">
                    <label class="text-[1rem] flex flex-row items-center justify-center px-[.2rem] mt-[.5rem] py-[.1rem] rounded-md" for="">
                        <label for="">
                                                            <div class="flex items-center">
                                                                <ion-icon v-if="game.rate>=1" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>0 && game.rate<1" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<1" name="star-outline"></ion-icon>  

                                                                <ion-icon v-if="game.rate>=2" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>1 && game.rate <2" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<2" name="star-outline"></ion-icon>    

                                                                <ion-icon v-if="game.rate>=3" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>2 && game.rate <3" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<3" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate>=4" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>3 && game.rate<4" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<4" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate==5" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>4 && game.rate<5" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<5" name="star-outline"></ion-icon>   

                                                            </div>
                                                        </label>
                                                        <label class="bg-dark2 ml-[.5rem] rounded-lg px-[.5rem] py-[.1rem]" for="">{{ game.rate }}</label>
                                                    </label>
                    
                </div>

             </div>

             <div class=" sticky top-[10%] md:pt-[.5rem] pt-[1.5rem] pb-[.7rem] flex px-[1rem] text-lg text-white text-[1.5rem] bg-dark1 z-50">
                               <button @click="change_nav('over')" :class="` border-b-2 border-opacity-0 ${nav=='over'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">overview</button>
                               <button @click="change_nav('ach')" :class="`ml-[2rem] border-b-2 border-opacity-0 ${nav=='ach'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">achievements</button>
                               <button @click="change_nav('adds')" :class="`ml-[2rem] border-b-2 border-opacity-0 ${nav=='adds'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">Add ons</button>


             </div>
                                                                        
 
      
             <div class="px-[1rem] mt-[2rem]" v-if="nav=='over'">


                    <div class="flex flex-col items-center text-white">
                        <img class="rounded-md mb-[1rem]" :src="game.ach_img" alt="">
                        <label class="text-white bg-dark2 rounded-md text-[.9rem] px-[.8rem] py-[.4rem] mb-[.6rem]" for="">base game</label>
                    <div class="flex flex-row items-center justitfy-center  gap-3"> 
                        <label v-if="game.dis" :class="`bg-[${game.theme_color}] rounded-md px-[.2rem] text-white mb-[.6rem]`" for="">{{game.dis}}</label>
                        <label v-if="game.dis" class=" mb-[.6rem] line-through text-gray-400" for="">{{game.oldprice}}$</label>
                        <label v-if="game.price!=='free'" class="text-white mb-[.6rem]" for="">{{game.price}}$</label>
                        <label v-else class="text-white mb-[.6rem]" for="">{{game.price}}</label>

                    </div>

                        <button v-if="game.price!=='free'" :class="`bg-[${game.theme_color}] w-full py-[.8rem] text-[1.1rem] rounded-md mb-[.8rem]`">Buy now</button>
                        <button v-else :class="`bg-[${game.theme_color}] w-full py-[.8rem] text-[1.1rem] rounded-md mb-[.8rem]`">Get now</button>
                        <button v-if="!incart" @click=" addcart(game)" :class="` w-full py-[.8rem] text-[1.1rem] rounded-md border-2 mb-[.8rem] border-gray-500`">Add To Cart</button>
                        <button v-else @click=" cart_router_push()" :class="` w-full py-[.8rem] text-[1.1rem] rounded-md border-2 mb-[.8rem] border-gray-500`">view in cart</button>
                        <button v-if="!game.inw" @click=" add_wish(game) " :class="` w-full py-[.3rem] text-[1.1rem] rounded-md border-2 border-gray-500 mb-[1rem]`">add to wishlist</button>
                        <button v-if="game.inw" @click=" remove_wish(game) " :class="` w-full py-[.3rem] text-[1.1rem] rounded-md border-2 border-gray-500 mb-[1rem]`">remove from wishlist</button>


                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] mt-[.5rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Refund type</label>
                            <label for="">sefl refundable</label>
                        </div>
                        
                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Developer</label>
                            <label for="">{{game.dev}}</label>
                        </div>

                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Publisher</label>
                            <label for="">{{game.pub}}</label>
                        </div>

                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Release Date</label>
                            <label for="">{{game.rdate}}</label>
                        </div>

                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Initial Release</label>
                            <label for="">{{game.indate}}</label>
                        </div>


                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Platform</label>
                            <label class="text-[1.3rem]" for=""><ion-icon name="logo-windows"></ion-icon></label>
                        </div>

                        <div class="flex justify-between w-full my-[1rem]">
                            <button class="w-[48%] border-[.1rem] border-gray-200 py-[.4rem] rounded-md hover:bg-gray-400 hover:bg-opacity-30">Share</button>
                            <button class="w-[48%] border-[.1rem] border-gray-200 py-[.4rem] rounded-md hover:bg-gray-400 hover:bg-opacity-30">Report</button>
                        </div>


                    </div>

             <flic :game="game"/>

             <div class="my-[3rem] text-white text-[1.1rem]">
                The virus won and civilization has fallen back to the Dark Ages. The City, 
                one of the last human settlements,
                 is on the brink of collapse. Use your agility and combat skills 
                 to survive, and reshape the world. Your choices matter.
             </div>


             <div class="flex flex-row ">

                       <div class=" flex flex-wrap items-start w-[49%] px-[1rem] border-l-[.1rem] broder-gray-500 text-white">
                        <label class="w-[100%] text-gray-500   " for="">Genres</label>
                        <button @click="router_push_game_type(g)" v-for="g in game.gener" class=" border-b-[.1rem] ml-[.5rem]">{{g}} </button>
                       </div>


                        <div class=" flex flex-wrap w-[49%] border-l-[.1rem] px-[1rem] broder-gray-500 text-white">
                        <label class="w-[100%] text-gray-500 " for="">Features</label>

                        <button @click="router_push_game_browse(f)" v-for="f in game.features" class=" border-b-[.1rem] ml-[.5rem]">{{f}} </button>


                       </div>

             </div>
          



             <div class="mt-[2rem] flex flex-col items-center bg-dark2 text-white rounded-md p-[1rem] text-[1.1rem]">
                New update is live! We made some of the most requested 
                features a reality and introduced various improvements. 
   
             </div>

             <img data-placeholder class="my-[1rem]" :src="game.bottom_img" alt="">

             <div class=" relative mt-[1rem] overflow-y-hidden text-white">
                                    Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.
                                    You are a wanderer with the power
                                    <div :class="` ${sm ?'absolute z-0 opacity-20':''}`">
                                   to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.
                                    VAST OPEN WORLD
                                    Participate in the life of a city engulfed in a new dark era. Discover different paths and hidden passages, as you explore its multiple levels and locations.
                                    CREATIVE & BRUTAL COMBAT
                                    Take advantage of your parkour skills to tip the scales of even the most brutal encounter. Clever thinking, traps and creative weapons will be your best friends.
                                    DAY AND NIGHT CYCLE
                                    Wait for night to venture into dark hideouts of the Infected. Sunlight keeps them at bay, but once it’s gone, monsters begin the hunt, leaving their lairs free to explore.
                                    CHOICES & CONSEQUENCES
                                    Shape the future of The City with your actions and watch how it changes. Determine the balance of power by making choices in a growing conflict and forge your own experience.
                                    2-4 PLAYER CO-OP GAMEPLAY
                                    Play in up to four-player co-op. Host your own games or join others and see how their choices have played out differently than yours.</div>
                                    <button v-if="sm" @click="sm = !sm" class="rounded-md w-full bg-dark3 mt-[1.5rem] py-[.5rem] relative z-0">show more<ion-icon class="translate-y-[15%]" name="arrow-dropdown"></ion-icon></button>
                                   <button v-else @click="sm = !sm" class="rounded-md w-full bg-dark3 mt-[1.5rem] py-[.5rem] relative z-50">show less<ion-icon class="translate-y-[15%]" name="arrow-dropup"></ion-icon></button>

                           </div>


                        <div class="mt-[2rem] text-white text-[1.1rem]">
                            
                            <label class="mb-[1rem]" for="">Availabel acheviments</label>
                            
                            <div class="flex justify-between flex-wrap">
                                 <div class=" flex flex-col w-[35%] p-[.4rem]" v-for="ach in v_ach">
                                       <img class="w-[100%]" :src="ach.img" alt="">
                                       <label class="w-[100%] text-[.8rem]" for="">{{ ach.name }}</label>
                                       <label class="text-[.8rem]" for=""><span class=" text-amber-800 mr-[.1rem] translate-y-[5%]"><ion-icon name="trophy"></ion-icon></span>{{ach.xp}}</label>
                                 </div>
                                 <button @click="change_nav('ach')" class="w-[100%] bg-dark2 py-[.5rem] rounded-md mt-[2rem] mb-[2rem] hover:bg-dark3 transition-all duration-200">view all ach</button>

                            </div>
                            
                        </div>   







                        <div class="text-white mt-[2rem]">
                            <label class="text-[1.1rem] mb-[.5rem]" for="">Add ons</label>
                            
                            <div class="flex flex-col mb-[1rem]" v-for="ed in game.adds">
                            
                                <img class="rounded-md" :src="ed.img" alt="">
                            
                                <div class="flex flex-col items-center justify-center bg-dark2 ">
                                   
                                    <div class="flex flex-col items-center border-b-[.1rem] border-b-gray-400">
                                        <div class="mt-[1rem] flex items-center w-[100%] justify-center">
                                                <label class="mr-[.2rem] bg-dark3 py-[.2rem] px-[.4rem]" for="">Add on</label>
                                                <label for="">{{ed.name}}</label>
                                        </div>

                                        <label class=" flex items-center w-[75%] mt-[.5rem] mb-[2rem] justify-center" for="">{{ed.text}}</label>
                                   
                                    </div>
                                

                                                                     
                                        <div class="flex flex-col w-full items-center mt-[1.5rem]">
                                            <label class="text-[1.1rem] mb-[.5rem]" for="">{{ ed.price }}$</label> 
                                            <button v-if="!in_ed_add(ed,'c')" @click="addcart(ed) " class="w-[90%] py-[.6rem] text-[1.1rem] rounded-md border-2 mb-[.8rem] border-gray-500">add to cart</button>
                                            <button v-else @click="ed_add_push('c') " class="w-[90%] py-[.6rem] text-[1.1rem] rounded-md border-2 mb-[.8rem] border-gray-500">view in cart</button>
                                            <button v-if="!in_ed_add(ed,'w') && !ed.inw" @click=" add_wish(ed) " class="w-[90%] py-[.2rem] text-[1.1rem] rounded-md border-2 border-gray-500 mb-[1rem]">add to wishlist</button>
                                            <button v-else @click="ed_add_push('w') " class="w-[90%] py-[.2rem] text-[1.1rem] rounded-md border-2 border-gray-500 mb-[1rem]">view in wishlist</button>

                                        </div>

                                </div>




                            </div>

                        </div>

                        
                                    <div class="flex flex-col text-white mb-[2rem]">

                                            <label for="" class="text-[1.1rem]">Follow us</label>
                                            <div class="flex rounded-md bg-dark2 items-center justify-center py-[1rem] mt-[1rem]">

                                                        <button class="text-[1.5rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[0%] transition-all duration-200"><ion-icon name="logo-youtube"></ion-icon></button>
                                                        <button class="text-[1.5rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[0%] transition-all duration-200"><ion-icon name="logo-twitter"></ion-icon></button>
                                                        <button class="text-[1.5rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[0%] transition-all duration-200"><ion-icon name="logo-facebook"></ion-icon></button>
                                                        <button class="text-[1.5rem] mx-[1rem] text-gray-400 hover:text-white hover:translate-y-[0%] transition-all duration-200"><ion-icon name="logo-instagram"></ion-icon></button>

                                                        
                                            </div>
                                    </div>


                                            <div class="flex flex-col text-white mt-[1rem]">

                                            <label for="" class="text-lg">Epic Player Ratings</label>
                                            <label for="" class="text-md text-gray-400 mt-1">Captured from players in the Epic Games ecosystem.</label>
                                                
                                            <div class="text-[2.5rem] mt-[1rem] flex flex-row items-center justify-center">
                                                        <label for="" class="">{{ game.rate }}</label>
                                                        
                                                        <label for="">
                                                            <div class="flex items-center">
                                                                <ion-icon v-if="game.rate>=1" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>0 && game.rate<1" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<1" name="star-outline"></ion-icon>  

                                                                <ion-icon v-if="game.rate>=2" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>1 && game.rate <2" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<2" name="star-outline"></ion-icon>    

                                                                <ion-icon v-if="game.rate>=3" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>2 && game.rate <3" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<3" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate>=4" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>3 && game.rate<4" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<4" name="star-outline"></ion-icon>   

                                                                <ion-icon v-if="game.rate==5" name="star"></ion-icon>
                                                                <ion-icon v-else-if ="game.rate>4 && game.rate<5" name="star-half"></ion-icon>   
                                                                <ion-icon v-else-if="game.rate<5" name="star-outline"></ion-icon>   

                                                            </div>
                                                        </label>
                                                    
                                            </div>


                                            <div class="flex flex-wrap justify-between mt-[1rem] ">
                                                    <div v-for="disc in game.game_disc" class="rounded-md py-[1rem] px-[1rem] mb-[1rem] bg-dark2 w-[100%] flex flex-row items-center justify-start">
                                                        <img class="w-[12%] mr-[1rem]" :src="disc.img" alt="">
                                                        <div class="flex flex-col items-start justify-center">
                                                                <label for="" class="text-center text-gray-400 ">{{ disc.title }}</label>
                                                                <label for="" class="text-white text-lg font-bold">{{disc.text}}</label>
                                                        </div>        
                                                    </div>
                                            </div>
                                        

                                </div>

             </div>


              

             <ach v-else-if="nav=='ach'" :game="game"/>

             <adds_grid v-else :game="game" />


    </div>




</template>
