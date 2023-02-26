<script setup>


import { defineProps, reactive, toRef,ref } from "vue";

import games from '../games'
import ach from '../assets/components/game.vue/ach.vue' 
import flic from '../assets/components/game.vue/flic_game.vue'



const props = defineProps({
      id : String
});

let id = props.id



let game = games.get(id)

let v_ach = ref(game.achievements.slice(0,4))

let s = []



console.log(game)

let slide_on = ref(false)
let slide_val = ref('0')
let slide_val_bot = ref(0)
let slide_top_val = ref(0)
let top_bot_pos = ref(0)
let bot_top_pos = ref(1)

let backward = ()=>{
   slide_on.value=true
   if(slide_val_bot.value>=0){
     slide_val_bot.value = -2
   }
   else{
    slide_val_bot.value += 1
   }
   slide_val.value=slide_val_bot.value+'00%'

}

let forward = ()=>{
    if(slide_val_bot.value<= - (game.imgs.length-1)){
     slide_val_bot.value = 0
   }  
   else{
    slide_val_bot.value -= 1
   }
    slide_val.value=slide_val_bot.value+'00%'

 
}



let slide_imgs = []

let cur_slide_imgs = ref()

for(let i =0 ; i<game.imgs.length;i++){
    slide_imgs = slide_imgs.concat(game.imgs[i])
}
    let slide_top_img_per = ref(slide_top_val.value+'00%');
    console.log(slide_top_img_per)
  
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
    console.log(slide_top_img_per.value)
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

}


window.scrollTo({
        top:0   ,
      })

     
       

</script>


<template>
      <!--large screen-->
      <div class="hidden md:flex justify-center">

               <div class="w-[78%]   text-white ">

                         <div class='px-[1.2rem]'>
                            <label class=" text-[2rem] ">{{ game.name }}</label>
                            <div v-if=" nav=='over' " class="flex items-center ">
                                  
                                  <div class="mt-[1rem] flex items-center text-lg">
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <label for="" class=" ml-[.5rem] text-[.8rem] rounded-md text-gray-400 bg-dark2 px-2 py-1">5.0</label>
                                            <label for="" class=" ml-[.5rem]   px-2 py-1">Great Boss Battles</label>
                                            <label for="" class=" ml-[.5rem]   px-2 py-1">Great Boss Battles</label>

                                        
                                        </div>

 





                                </div>
                         </div>



                        <div :class="`flex mt-[2.4rem] text-[1.4rem] text-white sticky top-[6.5rem] bg-dark1 z-50 p-[1.2rem] pb-[1rem]`">

                            <button @click="change_nav('over')" :class="`mx-[2rem] border-b-4 border-opacity-0 ${nav=='over'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">over</button>
                               <button @click="change_nav('ach')" :class="`mx-[2rem] border-b-4 border-opacity-0 ${nav=='ach'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">ach</button>
                                
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
                                       <button @click="backward_1()" class="opacity-0 group-hover:opacity-100  bg-opacity-0 transition-all duration-300 ">></button>   
                                </div>
                            
                            
                                <div class="px-[2rem]  h-full translate-x-[100%] 
                                    bg-gradient-to-l from-black/30 
                                    group-hover:bg-opacity-30 group-hover:translate-x-[0%] 
                                    transition-all duration-500 
                                    text-xl 
                                    flex items-center 
                                    ">
                                       <button @click="forward_1()"
                                        class="opacity-0 group-hover:opacity-100   bg-opacity-0 transition-all duration-300 ">></button>   
                                </div>
                            

                            </div>

                            <div class="flex flex-row overflow-x-hidden">
                               <img  v-for="img in slide_imgs" :class="`  transition-all duration-200 
                                translate-x-[${slide_top_img_per === '-100%' ? '-100%' : (slide_top_img_per === '-200%' ? '-200%' : ((slide_top_img_per === '-300%' ? '-300%' : ((slide_top_img_per === '-400%' ? '-400%' : ((slide_top_img_per === '-500%' ? '-500%' : ((slide_top_img_per === '-600%' ? '-600%' : ((slide_top_img_per === '-700%' ? '-700%' : ((slide_top_img_per === '-800%' ? '-800%' :(slide_top_img_per === '-900%' ? '-900%' :(slide_top_img_per === '-1000%' ? '-1000%' :(slide_top_img_per === '-1100%' ? '-1100%' :'0%')))))))))))))))) }]`" :src="img.img" alt="">
                               <!-- 
                                <img  :src="`${slide_imgs[pos_top[0]]}`" alt="" 
                                :class="` ${slide_top_on ? ' translate-x-['+slide_top_val+'%] transition-all duration-300':''} translate-x-[-100%]  rounded-md`">
                                <img :src="`${slide_imgs[pos_top[1]]}`" alt="" 
                                :class="` ${slide_top_on ? ' translate-x-['+slide_top_val+'%] transition-all duration-300':''} translate-x-[-100%]  rounded-md`">
                                <img :src="`${slide_imgs[pos_top[2]]}`" alt="" 
                                :class="` ${slide_top_on ? '  translate-x-['+slide_top_val+'%] transition-all duration-300':''} translate-x-[-100%] rounded-md`">
                              -->
                            </div>
                            
                            
                          </div>


                          <div class="flex justify-between items-center">
                            
                           <button @click="backward()" class="z-40">></button>

                                        
                           <div class="w-[78%] overflow-x-hidden">
                        
                                      <div  class="flex w-[300%]  z-50 flex-row">           
                                     
                                           <div  v-for="imgs in game.imgs " :class="`flex flex-row  w-[300%]   translate-x-[${slide_val}] transition-all duration-450 p-[2rem]`">
                                                <img @click="slide_bottom_up(img.num)" v-for="img in imgs" :class="`${bot_top_pos== img.num ? 'border':''} w-[20%] first:mx-0 first:mr-[1rem] mx-[1rem] opacity-40 hover:opacity-100 cursor-pointer transition-all duration-200`" :src="img.img" alt="">
                                           </div>

                                     
                                        
                                    </div>
                                        

                  
                  </div>


                           <button @click="forward()" class="z-40">></button>


                          </div>




                           <label for="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet error voluptas modi earum.
                             Voluptate ex omnis iure officiis molestiae neque ea, libero praesentium quo quos ut optio sint temporibus.
                           </label>


                           <div class="flex my-[2rem]">

                                <label for="" class="w-[50%] border-l-2 pl-[1rem]">Lorem ipsum dolor sit amet, consectetur 
                                    acere ipsum recusandae mollitia aut eveniet maiores inventore expedita debitis 
                                    nostrum. Iste, dignissimos?
                                </label>

                                <label for="" class="w-[50%] border-l-2 pl-[1rem]">Lorem ipsum dolor sit amet, consectetur 
                                    acere ipsum recusandae mollitia aut eveniet maiores inventore expedita debitis 
                                    nostrum. Iste, dignissimos?
                                </label>

                           </div>



                           <div class="my-[2rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis ad laudantium possimus id atque earum modi ipsa
                             molestias accusantium maiores quod perspiciatis consectetur, eum quos. Laboriosam cum laudantium aspernatur?
                           </div>




                           <div>
                            <img :src="game.bottom_img" alt="">
                           </div>


                           <div class=" relative mt-[1rem] overflow-y-hidden">
                                    <div :class="` ${sm ?'absolute z-0 opacity-10':''}`">
                                    Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.
                                    You are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.
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
                                   <button v-if="sm" @click="sm = !sm" class="w-full bg-dark3 mt-[1.5rem] p-[1rem] relative z-0">show more^</button>
                                   <button v-else @click="sm = !sm" class="w-full bg-dark3 mt-[1.5rem] p-[1rem] relative z-50">show less^</button>

                           </div>




                           </div>






                           <div class="">
                                <div class="sticky top-[9.5rem] h-[50%]  px-[3rem] py-[1rem]">
                                    <div class="mb-[2rem]"><img src="https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-ic5-400x166-55b2799d56f3.png?h=270&resize=1&w=480" alt=""></div>
                                    
                                    <div class="felx flex-col">
                                        <label for="" class="bg-dark2 rounded-md px-[1rem] py-[.3rem]">basegame</label>
                                        
                                        <div class="felx mt-[2rem] mb-[1rem]">
                                             <label for="" :class="`bg-[${game.theme_color}] rounded-md px-[1rem] py-[.3rem] text-sm`">50%</label>
                                             <label for="" class="text-gray-400 mx-3">59.99$</label>
                                             <label for="" class="text-white mx-2">59.99$</label>
                                        </div>

                                        <label class=" " for="">sales end in d2314</label>

                                        <button :class="`bg-[${game.theme_color}] w-full mt-[1rem] px-[1rem] py-[.6rem] rounded-md`">ok</button>
                                        <button @click=" addcart(game)" class=" border border-white rounded-md px-[1rem] py-[.6rem] w-full mt-[1rem]">Add to cart</button>
                                        <button class=" border border-white rounded-md px-[1rem] py-[.2rem] w-full mt-[1rem] mb-[1rem]">ok</button>
                                        
                                        <div class="flex justify-between px-[.1rem] py-[.2rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">osa</label>
                                            <label for="">ma</label>
                                        </div>                                        


                                        <div class="flex justify-between px-[.1rem] py-[.2rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">osa</label>
                                            <label for="">ma</label>
                                        </div>  


                                        <div class="flex justify-between px-[.1rem] py-[.2rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">osa</label>
                                            <label for="">ma</label>
                                        </div>  


                                        <div class="flex justify-between px-[.1rem] py-[.2rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">osa</label>
                                            <label for="">ma</label>
                                        </div>  


                                        <div class="flex justify-between px-[.1rem] py-[.2rem] pb-[.5rem] border-b-2 border-gray-400">
                                            <label for="">osa</label>
                                            <label for="">ma</label>
                                        </div>  



                                        <div class="flex mt-[1rem] justify-between">

                                            <button class="w-[48%] border px-[.1rem] py-[.2rem] rounded-md">share</button>
                                            <button class="w-[48%] border px-[.1rem] py-[.2rem] rounded-md">share</button>


                                        </div>

                                    </div>
                                    
                                </div>
                           </div>
                           
                         </div>

























                         <div v-if="nav=='over'" class=" grid grid-cols-3">


                            <div class=" col-span-2 p-[1.2rem]">        
                                             
                                <div class="flex flex-col">
                                    <label for="">Available Achievements</label>

                                    <div class="flex flex-row  justify-between my-[1rem]">
                                        
                                            <div v-for="ach in v_ach" class="flex flex-col w-[15%] my-[1rem]">

                                                        <img :src="ach.img" alt="" class="mb-[.5rem]">
                                                        <label for="" class="">{{ach.name.length >= 10 ? ach.name.substring(0,10)+'...':ach.name}}</label>
                                                        <label for="" class="flex items-start"><span class=" text-amber-800 mr-[.1rem] translate-y-[5%]"><ion-icon name="trophy"></ion-icon></span>{{ach.xp}}</label> 

                                            </div>


                                    </div>
                                    <button @click="change_nav('ach')" class="w-[100%] bg-dark2 p-[1rem] hover:bg-dark3 transition-all duration-200">view all ach</button>

                                </div>


                                


                                <div class="flex flex-col mt-[4rem] mb-[3rem]">
                                    
                                                <label v-if="game.editions" for="">Editions</label>

                                                <div v-if="game.editions" v-for="ed in game.editions" class="flex rounded-md mt-[1rem] flex-col bg-dark2">
                                                        <div class="flex flex-row border-b-2">
                                                            <img :src="ed.img" class="w-[50%] rounded-tl-md" alt="">
                                                            <div class="flex flex-col ">

                                                                    <div class="flex flex-row p-[1rem]">
                                                                        <label for="" class="bg-dark1 rounded-md p-[.2rem] text-sm mr-[1rem]">{{ ed.type }}</label>
                                                                        <label for="">{{ ed.name }}</label>
                                                                    </div>

                                                                    <label for="" class="p-[1rem]">{{ ed.text }}</label>

                                                            </div>


                                                        
                                                        </div>

                                                        <div class="flex justify-end items-center py-[1rem]">
                                                                    
                                                                    <div class="flex flex-col">

                                                                            <div class="flex flex-row items-center justify-end">

                                                                                    <label for="" class="bg-red-800 rounded-md text-small
                                                                                    p-1 mx-[.5rem]">{{ ed.dis }}</label>
                                                                                    <label for="" class="mx-[.5rem]">{{ ed.oldprice }}</label>
                                                                                    <label for="" class="mx-[.5rem]">{{ ed.price }}</label>


                                                                            </div>

                                                                            <label for="" class="text-sm">{{ ed.date }}</label>
                                                                    </div>
                                                            
                                                                    <button class="py-[1.1rem] px-[1rem] border w-[30%] mx-[1rem]">add to cart</button>
                                                                    <button class="py-[1.1rem] border w-[30%] mx-[1rem]">add to wishlist</button>

                                                        </div>
                                                        
                                                </div>


                                </div>









                                <div class="flex flex-col mt-[4rem] mb-[3rem]">
                                    
                                    <label v-if="game.adds" for="">Add ons</label>

                                    <div v-if="game.adds" v-for="ed in game.adds" class="flex rounded-md mt-[1rem] flex-col bg-dark2">
                                            <div class="flex flex-row border-b-2">
                                                <img :src="ed.img" class="w-[50%] rounded-tl-md" alt="">
                                                <div class="flex flex-col ">

                                                        <div class="flex flex-row p-[1rem]">
                                                            <label for="" class="bg-dark1 rounded-md p-[.2rem] text-sm mr-[1rem]">{{ ed.type }}</label>
                                                            <label for="">{{ ed.name }}</label>
                                                        </div>

                                                        <label for="" class="p-[1rem]">{{ ed.text }}</label>

                                                </div>


                                            
                                            </div>

                                            <div class="flex justify-end items-center py-[1rem]">
                                                        
                                                        <div class="flex flex-col">

                                                                <div class="flex flex-row items-center justify-end">

                                                                        <label v-if="ed.dis" for="" class="bg-red-800 rounded-md text-small
                                                                        p-1 mx-[.5rem]">{{ ed.dis }}</label>
                                                                        <label v-if="ed.oldprice" for="" class="mx-[.5rem]">{{ ed.oldprice }}</label>
                                                                        <label for="" class="mx-[.5rem]">{{ ed.price }}</label>


                                                                </div>

                                                                <label for="" class="text-sm">{{ ed.date }}</label>
                                                        </div>
                                                
                                                        <button class="py-[1.1rem] px-[1rem] border w-[30%] mx-[1rem]">add to cart</button>
                                                        <button class="py-[1.1rem] border w-[30%] mx-[1rem]">add to wishlist</button>

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
                                                
                                            <div class="text-[3rem] mt-[2rem] flex flex-row items-center justify-center">
                                                        <label for="" class="">{{ game.rate }}</label>
                                                        
                                                        <label for="">
                                                            stars
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


                  </div>

      </div>






    <!--small screen -->

    <div class="md:hidden">

             <div class="flex flex-col text-white text-[1.8rem] px-[1rem]">
                
                <label for="">{{ game.name }}</label>

                <div class="flex">
                    <label class="bg-dark2 text-[1rem] px-[.2rem] py-[.1rem] rounded-md" for="">{{ game.rate }}</label>
                </div>

             </div>

             <div class=" sticky top-[10%] pt-[.5rem] pb-[.7rem] flex px-[1rem] mt-[1.5rem] text-white text-[1.5rem] bg-dark1 z-30">
                               <button @click="change_nav('over')" :class="` border-b-2 border-opacity-0 ${nav=='over'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">overview</button>
                               <button @click="change_nav('ach')" :class="`ml-[2rem] border-b-2 border-opacity-0 ${nav=='ach'?' border-b-4 border-opacity-100 border-white ':'hover:border-opacity-100 border-gray-400 transition-all duration-200'}`">achievements</button>


             </div>
                                                                        
 
      
             <div class="px-[1rem] mt-[2rem]" v-if="nav=='over'">


                    <div class="flex flex-col items-center text-white">
                        <img class="rounded-md mb-[1rem]" :src="game.ach_img" alt="">
                        <label class="text-white bg-dark2 rounded-md text-[.9rem] px-[.8rem] py-[.4rem] mb-[.6rem]" for="">base game</label>
                        <label class="text-white mb-[.6rem]" for="">{{game.price}}$</label>

                        <button :class="`bg-[#ed0000] w-full py-[.8rem] text-[1.1rem] rounded-md mb-[.8rem]`">Buy now</button>
                        <button @click=" addcart(game)" :class="` w-full py-[.8rem] text-[1.1rem] rounded-md border-2 mb-[.8rem] border-gray-500`">Add To Cart</button>
                        <button :class="` w-full py-[.3rem] text-[1.1rem] rounded-md border-2 border-gray-500 mb-[1rem]`">add to wishlist</button>


                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Refund type</label>
                            <label for="">sefl refundable</label>
                        </div>
                        
                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Refund type</label>
                            <label for="">sefl refundable</label>
                        </div>

                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Refund type</label>
                            <label for="">sefl refundable</label>
                        </div>

                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Refund type</label>
                            <label for="">sefl refundable</label>
                        </div>

                        <div class="flex justify-between border-b-[.1rem] border-gray-500 w-full text-[1rem] pb-[.4rem] mb-[.5rem]">
                            <label class="text-gray-300" for="">Refund type</label>
                            <label for="">sefl refundable</label>
                        </div>


                        <div class="flex justify-between w-full my-[1rem]">
                            <button class="w-[48%] border-[.1rem] border-gray-200 py-[.4rem] rounded-md">Share</button>
                            <button class="w-[48%] border-[.1rem] border-gray-200 py-[.4rem] rounded-md">Report</button>
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

                       <div class=" flex flex-wrap items-start w-[49%]  border-l-[.1rem] broder-gray-500 text-white">
                        <label class="w-[100%] text-gray-500 ml-[1rem]" for="">Generes</label>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>


                       </div>


                        <div class=" flex flex-wrap w-[49%] border-l-[.1rem]  broder-gray-500 text-white">
                        <label class="w-[100%] text-gray-500 ml-[1rem]" for="">Generes</label>

                        <button class="ml-[1.2rem]">cloud saves</button>
                        <button class="ml-[1.2rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>
                        <button class="ml-[1rem]">action</button>


                       </div>

             </div>
          



             <div class="mt-[2rem] flex flex-col items-center bg-dark2 text-white rounded-md p-[1rem] text-[1.1rem]">
                New update is live! We made some of the most requested 
                features a reality and introduced various improvements. 
                Click here for more information
                <button class="w-[100%] rounded-md mt-[1rem] py-[.5rem] border-[.1rem] border-gray-500">view patch notes</button>
             </div>

             <img class="my-[1rem]" :src="game.bottom_img" alt="">

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
                                   <button v-if="sm" @click="sm = !sm" class="rounded-md w-full bg-dark3 mt-[1.5rem] py-[.5rem] relative z-0">show more^</button>
                                   <button v-else @click="sm = !sm" class="rounded-md w-full bg-dark3 mt-[1.5rem] py-[.5rem] relative z-50">show less^</button>

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


                        <div class="text-white">
                            <label class="text-[1.1rem] mb-[.5rem]" for="">Editions</label>
                            
                            <div class="flex flex-col mb-[1rem]" v-for="ed in game.editions">
                            
                                <img class="rounded-md" :src="ed.img" alt="">
                            
                                <div class="flex flex-col items-center justify-center bg-dark2 ">
                                   
                                    <div class="flex flex-col items-center border-b-[.1rem] border-b-gray-400">
                                        <div class="mt-[1rem] flex items-center w-[100%] justify-center">
                                                <label class="mr-[.2rem] bg-dark3 py-[.2rem] px-[.4rem]" for="">base game</label>
                                                <label for="">Dying Light 2 Stay Human</label>
                                        </div>

                                        <label class=" flex items-center w-[75%] mt-[.5rem] mb-[2rem] justify-center" for="">The virus won and civilization has fallen back to the Dark Ages.</label>
                                   
                                    </div>
                                

                                                                     
                                        <div class="flex flex-col w-full items-center mt-[1.5rem]">
                                            <label class="text-[1.1rem] mb-[.5rem]" for="">{{ ed.price }}$</label> 
                                            <button :class="` w-[90%] py-[.6rem] text-[1.1rem] rounded-md border-2 mb-[.8rem] border-gray-500`">Add To Cart</button>
                                            <button :class="` w-[90%] py-[.2rem] text-[1.1rem] rounded-md border-2 border-gray-500 mb-[1rem]`">add to wishlist</button>
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
                                                            stars
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


              

             <ach v-else :game="game"/>



    </div>




</template>
