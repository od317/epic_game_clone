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

 let router = useRouter(); 

 /* for slider and sidebar  */
let games = [
    {
       name:"dishonored2",
       src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
       srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
       slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
       num:1
    },
    {
      name:'farcry6',
      src:'https://images3.alphacoders.com/108/thumb-1920-1087064.jpg',
      srcm:"https://images3.alphacoders.com/108/thumb-1920-1087064.jpg",
      slide_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/FC6_Logo.png/1200px-FC6_Logo.png",
      num:2
    },
    {
      name:'heart',
      src:'https://cdn2.unrealengine.com/egs-wild-hearts-carousel-desktop-1248x702-5426345bf742.jpg?h=720&quality=medium&resize=1&w=1280',
      srcm:"https://cdn2.unrealengine.com/egs-wild-hearts-carousel-desktop-1248x702-5426345bf742.jpg?h=720&quality=medium&resize=1&w=1280",
      slide_img:"data:image/png;base64,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",
      num:3
    },
    {
      name:'ac valhal',
      src:'data:image/jpeg;base64,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',
      srcm:"data:image/jpeg;base64,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",
      slide_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Assassin%27s_Creed_Valhalla_text_logo.svg/1200px-Assassin%27s_Creed_Valhalla_text_logo.svg.png",
      num:4
    },
    {
      name:'Elden Ring',
      src:'https://images8.alphacoders.com/118/1186452.jpg',
      srcm:"https://images8.alphacoders.com/118/1186452.jpg",
      slide_img:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Elden_Ring_-_Title.png",
      num:5
    },
    {
      name:'no man sky',
      src:'https://wallpaperboat.com/wp-content/uploads/2020/11/16/61053/no-mans-sky-03.jpg',
      srcm:"https://wallpaperboat.com/wp-content/uploads/2020/11/16/61053/no-mans-sky-03.jpg",
      slide_img:"https://upload.wikimedia.org/wikipedia/fr/thumb/f/ff/No_Man%27s_Sky_Logo.svg/1200px-No_Man%27s_Sky_Logo.svg.png",
      last:true,
      num:6
    },
   ]


let games_list1= games_lists[0]

for(let g1 of games_list1){
  for(let g of g1)
  g.price= Math.floor(Math.random() * (60 - 0 + 1)) + 0
}

let game_an1 = [
    {
      name:'osama1',
      img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
      label:'quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum.'
    },
    {
      name:'osama1',
      img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
      label:'quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. um. quam? Accusantium, placeat ipsum. quam?um. quam? Accusantium, placeat ipsum. quam?um. quam? Accusantium, placeat ipsum. quam?'
    },
    {
      name:'osama1',
      img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
      label:'quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. um. quam? Accusantium, placeat ipsum. quam?um. quam? Accusantium, placeat ipsum. quam?'
    }
]


let game_an3 = [
    {
      name:'osama1',
      img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
      label:'quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. um. quam? Accusantium, placeat ipsum. quam?um. quam? Accusantium, placeat ipsum. quam?um. quam? Accusantium, placeat ipsum. quam?'
    },
    {
      name:'osama1',
      img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
      label:'quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. quam? Accusantium, placeat ipsum. um. quam? Accusantium, placeat ipsum. quam?um. quam? Accusantium, placeat ipsum. quam?'
    }
]


let free_games1 = [
  {
     name:'omsa',
     img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
     text:'Free now - Feb 09 at 5:00 pm'
  },
  {
    name:'omsa',
     img:'https://pbs.twimg.com/media/FnbVIiJWQAAIuaI.jpg',
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
    games:[
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
    ]
  },
  {
    title:'Top Sellers',
    games:[
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
    ]
  },
  {
    title:'Top Sellers',
    games:[
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      'daying light2',
      'The Last of Us Part I',
      'spiderman Remastered',
      ],
     last:true
  },
])



let footer_cont1 = [{
  text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur incidunt rerum consequatur voluptas eius quidem, quod quaerat nulla mollitia itaque, sequi delectus esse eligendi enim blanditiis et cupiditate id voluptatum.',
  img:'https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=1080&resize=1&w=1920'
}
]


   let header_list_num = ref(0)
   let slider  = ref(games[0].src)
   let slider_img = ref([games[0].src,games[1].src])
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
        slider_img.value[1] = header_list_num.value+1<=5 ? games[header_list_num.value+1].src:games[0].src
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
    slider_img.value[0] =  games[header_list_num.value].src
    slider_img.value[1] =  place+1 <=5 ? games[header_list_num.value+1].src : games[0].src
    s = setInterval(()=>{
       header_list_num.value === 5 ? header_list_num.value=0 : header_list_num.value+=1
       slide_on.value = true
       trans_slide.value=false
       start.value=false
       const myTimeout = setTimeout(()=>{
        slider_img.value[0] = slider_img.value[1]
        slider_img.value[1] = header_list_num.value+1<=5 ? games[header_list_num.value+1].src:games[0].src
        slide_on.value=false 
        trans_slide.value=true         
       
      },499);
  },9000)
  }



  


  let router_push_header = (name)=>{

    router.push('/game/'+name)
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
                                                              <button class="bg-white text-lg text-black p-3 md:p-2 w-[40%] mr-5 rounded-lg hover:bg-gray-400 transition-all duration-200">view</button>
                                                              <button class="text-lg white p-3 md:p-[.4rem] w-[40%] text-center hover:bg-black hover:bg-opacity-50  transition-all duration-200 rounded-lg"><div class="flex items-center opacity-100"><ion-icon name="add-circle-outline" class="translate-y-[20%] mr-1"></ion-icon>add to wishlist</div></button>
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
                                                          <button class="bg-white text-lg text-black p-3  md:p-2 w-[40%] mr-5 rounded-lg hover:bg-gray-400 transition-all duration-200">view</button>
                                                          <button class="text-lg white p-4 w-[40%] md:p-[.4rem] text-center hover:bg-black hover:bg-opacity-50  transition-all duration-200 rounded-lg"><div class="flex items-center opacity-100"><ion-icon name="add-circle-outline" class="translate-y-[20%] mr-1"></ion-icon>add to wishlist</div></button>
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

<game_an :game_an="game_an1"/>




<!--gamelist3-->

<list_game :gamelist="games_list1" type="fps"/>





<!--gamelist4-->

<list_game :gamelist="games_list1"/>





<!-- game_an 3-->

<game_an :game_an="game_an3"/>





<!--gamelist5-->

<list_game :gamelist="games_list1"/>





<!--footer-->

<footer_cont :footer_cont="footer_cont1"/>




</div>



</template>