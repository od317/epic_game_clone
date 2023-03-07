<script setup>

 import {ref, stop} from 'vue'
 import list_game from '../assets/components/game_list.vue'
 import game_an from '../assets/components/game_an.vue'
 import free_games from '../assets/components/free_games.vue'
 import tops_gird from '../assets/components/tops_gird.vue' 
 import footer_cont from '../assets/components/footer1.vue'
 import flickity from '../assets/components/flic.vue'
 import { useRouter } from 'vue-router';
 import gamess from '../games'
 import games_lists from '../gamelist'
 import tops_grids from '../tops_grid'

 let router = useRouter(); 

 /* for slider and sidebar  */
let game_tops_names = ['dishonored2','farcry6','heart','ac valhal','Elden Ring','distiny 2']
let games = ref([])

for(let i =1;i<=6;i++){

    let g = gamess.get(game_tops_names[i-1])
    g.num=i
    g.ro=false
    games.value.push(g)

}


      for(let g of  games.value){
       let wlist2 = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : [] 
        for(let g2 of wlist2){
              if(g.name == g2.name){
                  g.inw = true
                  break
              }
          }
        }

let games_list1= games_lists[0]

for(let g1 of games_list1){
}

let game_an1 = [
    {
      name:'WILD HEARTS™',
      type:'game',
      img:'https://cdn2.unrealengine.com/egs-wild-hearts-breaker-1920x1080-6891298c91d2.jpg?h=270&quality=medium&resize=1&w=480',
      label:'Master ancient tech to hunt down giant beasts. Tame a world gone wild.',
      down_text:'€69.99',
      dst:"heart"
    },
    {
      name:'Destiny 2: Season of Defiance',
      type:'game',
      img:'https://cdn2.unrealengine.com/en-egs-destiny-2-season-20-breaker-2560x1440-7abe8178294c.jpg?h=270&quality=medium&resize=1&w=480',
      label:'Destiny 2’s latest Season is here with all new story missions, activities, and rewards.',
      down_text:'€14.99',
      dst:"distiny 2"
    },
]


let game_an2 = [
   {
      name:'2k games',
      type:'browse',
      img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
      label:'a new collection from 2k games is here dont miss this out.',
      down_text:'view more',
      dst:"2kpub"
    },
    {
      name:'thq sales',
      type:'browse',
      img:'https://voonze.com/wp-content/uploads/2021/09/THQ-Nordic-Aniversario-Juegos-Gratis-Epic-Games-Store-y-Steam-1000x600.jpg',
      label:'a new sale from thq on a lot of intersting game dont miss this out (-_-)',
      down_text:'view more',
      dst:"thq"
    },
]


let free_games1 = [
  {
     name:'control',
     img:'https://external-preview.redd.it/8W9i4-_MVkh1zg7FxihpmVPStS0WQtxFpw1H42E7wzE.jpg?auto=webp&s=982f4ebcc102186e853d5536e772f789016dba42',
     text:'Free now - Feb 09 at 5:00 pm'
  },
  {
    name:'omsa',
     img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
     text:'Free now - Feb 09 at 5:00 pm',
     cs:true
  }
]



let games_grid1 = ref([
  {
    title:'Top Sellers',
    games:tops_grids.get('Top Sellers'.toLocaleLowerCase())
  },
  {
    title:'Most Played',
    games:tops_grids.get('Top Sellers'.toLocaleLowerCase())

  },
  {
    title:'Top Upcoming Wishlisted',
    games:tops_grids.get('Top Sellers'.toLocaleLowerCase()),
     last:true
  },
])



let footer_cont1 = [{
  text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur incidunt rerum consequatur voluptas eius quidem, quod quaerat nulla mollitia itaque, sequi delectus esse eligendi enim blanditiis et cupiditate id voluptatum.',
  img:'https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=1080&resize=1&w=1920'
}
]


   let header_list_num = ref(0)
   let slider  = ref(games.value[0].src)
   let slider_img = ref([games.value[0].src,games.value[1].src])
   let slide_on = ref(false)
   let trans_slide = ref(false)
   let start = ref(true)
   let start_a = ref(true)


   let s;

    s = setInterval(()=>{
       header_list_num.value === 5 ? header_list_num.value=0 : header_list_num.value+=1
       slide_on.value = true
       trans_slide.value=false
       start.value=false
       const myTimeout = setTimeout(()=>{
        slider_img.value[0] = slider_img.value[1]
        slider_img.value[1] = header_list_num.value+1<=5 ? games.value[header_list_num.value+1].src:games.value[0].src
        slide_on.value=false 
        trans_slide.value=true         
       
      },499);
  },9000)
  const myTimeout = setTimeout(()=>{
      start_a.value=false   
  },10);
 

  let click_change_pos = (place)=>{
    clearInterval(s)
    header_list_num.value = place
    slider_img.value[0] =  games.value[header_list_num.value].src
    slider_img.value[1] =  place+1 <=5 ? games.value[header_list_num.value+1].src : games.value[0].src
    s = setInterval(()=>{
       header_list_num.value === 5 ? header_list_num.value=0 : header_list_num.value+=1
       slide_on.value = true
       trans_slide.value=false
       start.value=false
       const myTimeout = setTimeout(()=>{
        slider_img.value[0] = slider_img.value[1]
        slider_img.value[1] = header_list_num.value+1<=5 ? games.value[header_list_num.value+1].src:games.value[0].src
        slide_on.value=false 
        trans_slide.value=true         
       
      },499);
  },9000)
  }



  


  let router_push_header = (name)=>{

    router.push('/game/'+name)
  }



  let view_more_top_push = (name)=>{
    router.push('/game/'+name)
  }



let add_wish = (game2)=>{

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []



for(let g of wlist){
 if(g.name === game2.name)
 return
}
let game = gamess.get(game2.name)
if(game)
wlist.push(game)

game2.ro=true
let s = setTimeout(()=>{
    game2.ro=false
    game2.inw=true
    gamess.get(game2.name).inw=true
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
   gamess.get(game.name).inw=false
  },1000)
  localStorage.setItem('wish_list',JSON.stringify(wlist))

}


  window.scrollTo({
        top:0,
      })

     



</script>

<template>




<div class=" overflow-x-hidden">






  
<!-- slider and side --> 

<!-- lg screen-->
<div class="md:flex w-full   justify-center mt-2 hidden
            lg:h-[26rem]
            md:h-[30%]">

<div class="grid grid-cols-1 grid-rows-6 grid-flow-col gap-4 lg:w-[78%] lg:p-[0] px-[1rem]
">


  
  <div class="text-white row-span-5 grid  grid-cols-5">
               
                 <div class=" group col-span-4   relative rounded-xl w-[99%] overflow-hidden 
                    lg:h-[26rem]
                    md:h-fit">
                                      
                                      <div class="flex   w-[200%]
                                      ">

                                               <div :class="`${ slide_on === true ? 'translate-x-[-100%] transition-all duration-500':''} 
                                                relative  
                                                h-full rounded-xl w-[99%] overflow-hidden`">
                                                    
                                                      <img :src="`${ slider_img[0] }`" class="w-full  rounded-xl
                                                       lg:h-[26rem]
                                                       md:" alt="">
                                                      <div class="absolute opacity-40 bg-black h-full rounded-xl   text-white bottom-0 
                                                      left-0 right-0">
                                                      </div>

                                                      <div class="absolute   text-white bottom-0 left-0 right-0 w-[60%] p-5 text-[90%]">
                                                              <h2 :class="`  ${ trans_slide ? 'translate-x-0 opacity-[100%] duration-300':'translate-x-[10%]  duration-0 opacity-[0%]'}  
                                                              transition-all `">
                                                                <img :src="`${games[header_list_num].slide_img}`" alt="" class="w-[70%] md:w-[50%]">
                                                          </h2>
                                                          <img :src="`${games[header_list_num].slide_img}`" alt="" :class="`  ${!start? 'w-0':'w-[70%] h-[30%] translate-x-[10%] translate-y-[-20%]'}  `">
                                                            <p>Lorem ipsum dolor sit <br> amet consectetur adipisicing elit. Deleniti, quisquam! Recusandae ea acc
                                                            etur commodi. Id nobis ducimus vel aliqua
                                                            m neque! Cum autem dicta vitae.</p>
                                                            <div>
                                                              <p class="mt-5 mb-3">m neque! Cum autem dicta vitae.</p>
                                                              <button @click="view_more_top_push(games[header_list_num].name)" class="bg-white text-lg text-black p-3 md:p-2 w-[40%] mr-5 rounded-lg hover:bg-gray-400 transition-all duration-200">view</button>
                                                              <button @click="add_wish(games[header_list_num])" v-if="!games[header_list_num].inw" class="text-lg white p-3 md:p-[.4rem] w-[40%] text-center hover:bg-black hover:bg-opacity-50  transition-all duration-200 rounded-lg"><div class="text-[.8rem]  flex items-center opacity-100"><ion-icon :class="`${games[header_list_num].ro ? ' rotate-[360deg] transition-all duration-1000':''} mr-[.5rem]`" name="add-circle-outline" class="translate-y-[20%] "></ion-icon>add to wishlist</div></button>
                                                              <button @click="remove_wish(games[header_list_num])" v-else class="text-lg white p-3 md:p-[.4rem] w-[40%] text-center hover:bg-black hover:bg-opacity-50  transition-all duration-200 rounded-lg"><div class="text-[.8rem]  flex items-center opacity-100"><ion-icon :class="`${games[header_list_num].ro ? ' rotate-[360deg] transition-all duration-1000':''} mr-[.5rem]`" name="checkmark-circle" class="translate-y-[20%] "></ion-icon>remove from wishlist</div></button>
                                                            </div>
                                                    </div>

                                            </div>


                                            


                                            <div  :class="`${ slide_on === true ? 'translate-x-[-100%] transition-all duration-500':''} relative  h-full rounded-xl w-[99%] overflow-hidden`">
                                                      
                                              <img :src="`${ slider_img[1] }`" class="w-full  rounded-xl
                                               lg:h-[26rem]
                                               md:" alt="">
                                                        <div class="absolute opacity-40 bg-black h-full rounded-xl   text-white bottom-0 left-0 right-0">
                                                        </div>
                                                        <div class="absolute   text-white bottom-0 left-0 right-0 w-[60%] p-5 text-[90%]">

                                                          <p>Lorem ipsum dolor sit <br> amet consectetur adipisicing elit. Deleniti, quisquam! Recusandae ea acc
                                                        etur commodi. Id nobis ducimus vel aliqua
                                                        m neque! Cum autem dicta vitae.</p>
                                                        <div>
                                                          <p class="mt-5 mb-3">m neque! Cum autem dicta vitae.</p>
                                                              <button @click="view_more_top_push(games[header_list_num].name)" class="bg-white text-lg text-black p-3 md:p-2 w-[40%] mr-5 rounded-lg hover:bg-gray-400 transition-all duration-200">view</button>
                                                              <button @click="add_wish(games[header_list_num])" v-if="!games[header_list_num].inw" class="text-lg white p-3 md:p-[.4rem] w-[40%] text-center hover:bg-black hover:bg-opacity-50  transition-all duration-200 rounded-lg"><div class="text-[.8rem]  flex items-center opacity-100"><ion-icon :class="`${games[header_list_num].ro ? ' rotate-[360deg] transition-all duration-1000':''} mr-[.5rem]`" name="add-circle-outline" class="translate-y-[20%] "></ion-icon>add to wishlist</div></button>
                                                              <button @click="remove_wish(games[header_list_num])" v-else class="text-lg white p-3 md:p-[.4rem] w-[40%] text-center hover:bg-black hover:bg-opacity-50  transition-all duration-200 rounded-lg"><div class="text-[.8rem]  flex items-center opacity-100"><ion-icon :class="`${games[header_list_num].ro ? ' rotate-[360deg] transition-all duration-1000':''} mr-[.5rem]`" name="checkmark-circle" class="translate-y-[20%] "></ion-icon>remove from wishlist</div></button>
                                                        </div>
                                                      </div>

                                            </div>


                                  </div>


                  </div>



                    <div class=" pl-4 flex flex-col justify-between
                    lg:h-[26rem]
                    md:h-full
                    ">


                      <div @click=" header_list_num !== game.num-1 ? click_change_pos(game.num-1) : router_push_header(game.name)" :class="` group relative flex items-center h-1/5  w-full ${game.last !== true ? 'mb-2':''} hover:cursor-pointer 
                       rounded-lg`" v-for="game in games" :key="game">
                        
                        <div :class="`   relative flex items-center  w-full h-full ${game.last !== true ? '':''} hover:cursor-pointer p-1`">
                         
                          <img :src="game.src" :class="` rounded-md z-10 
                            lg:h-full lg:w-[2.5rem]
                            md:h-[75%] md:w-[30%]`" alt="">  
                          <div class=" ml-5  grid content-center w-full ">
                            <p class="text-white z-10">{{ game.name }}</p>
                            </div>
                            
                        </div>
                        <div class="absolute  bg-black h-full  rounded-md  bottom-0 left-0 right-0 opacity-0 
                           w-full group-hover:opacity-40 z-0 
                          transition-width duration-300 ">
                        </div>
                        <div :class="`absolute  opacity-40 bg-gray-600 h-full rounded-md  bottom-0 left-0 right-0
                          ${header_list_num+1 ===game.num  ? 'w-full duration-1000':'w-0 duration-0'}   transition-width  `"></div>
                          <div :class="`absolute  opacity-40 bg-gray-100 h-full rounded-md  bottom-0 left-0 right-0 
                          ${header_list_num+1 ===game.num && !start_a  ? 'w-full duration-[9000ms]':'w-0 duration-0'}  ease-linear transition-width   `"></div>
                          
                        </div>


                    </div>
  </div>


</div>






</div>


<!--small screen-->

<flickity :games="games"/>


<!-- gamelist_1 -->

<list_game :gamelist="games_list1" type="ac"/>

<!-- game_an 1-->

<game_an :game_an="game_an1"/>

<!-- free game1-->
<free_games :free_games="free_games1"/>


<!-- games_gird1-->
<tops_gird :games_grid="games_grid1"/>



<!--gamelist2-->

<list_game :gamelist="games_list1" type="adv"/>



<!-- games_gird2-->
<tops_gird :games_grid="games_grid1"/>




<!-- game_an 2-->

<game_an :game_an="game_an2"/>




<!--gamelist3-->

<list_game :gamelist="games_list1" type="fps"/>





<!--gamelist4-->

<list_game :gamelist="games_list1"/>





<!-- game_an 3-->

<game_an :game_an="game_an1"/>





<!--gamelist5-->

<list_game :gamelist="games_list1"/>





<!--footer-->

<footer_cont :footer_cont="footer_cont1"/>




</div>



</template>