<script setup>

  import {ref,watch} from 'vue'
  import {useRouter} from 'vue-router'

  import games from '../../games'


  let router = useRouter()

  

  let currentUrl = window.location.pathname;
  let cp = currentUrl.split('/')[1]
  let cart = ref( localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : [])
  let i = ref(cart.value ? cart.value.length : '0')

  let offcanv = ref(false)

  addEventListener('storage', (event) => {
     cart = ref( localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : [])
     i.value = cart.value ? cart.value.length : '0'  
   });


   
 let c = setInterval(() => {
      i.value = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : '0'
},1000);


  if(cp !== 'browse' && cp!== 'news' && cp!=='wishlist' && cp!=='cart'){
    cp=null
  }

  let page = ref(cp||'discover')

  let george = ref(false)
  let george2 = ref(false)
  
  let w= ()=>{
   window.location.reload()

   }

  let search_click = ()=>{
    george.value = false
    george2.value = true
  }


  let change_canv = ()=>{
    offcanv.value = !offcanv.value
    if(offcanv.value)
    document.documentElement.style.overflow = 'hidden'
    else
    document.documentElement.style.overflow = 'visible'

  }

  window.addEventListener("resize",()=>{
    if(window.innerWidth>=768){
      document.documentElement.style.overflow = 'visible'
      offcanv.value = false
    }
  });


  let logopush = ()=>{
    router.push('/')
    page.value='discover'
  }



  let search_input = ref("")

  let search_res = ref([])

  watch(search_input,()=>{
    search_res.value=[]
    if(search_input.value == "")
       return
    for(let game of games){
      if(game[0].substring(0,search_input.value.length) === search_input.value)
         search_res.value.push(games.get(game[0]))
      if(search_res.value.length == 4)
      break   
    }
    
  })

  let res_game_push = (name)=>{
        search_res.value=[]
        let currentUrl = window.location.pathname;
        let cp = currentUrl.split('/')[1]
        if(cp=='game'){
          router.push({ path: `/game/${name}` })
          setTimeout(()=>{
            location.reload();
          },1)
      }
        else
        router.push('game/'+name)
  } 


  let view_more = ()=>{
    page.value = "browse"

    if(window.location.pathname.split('/').indexOf('browse')!==-1){
      router.push("/browse?q="+search_input.value)
      setTimeout(()=>{
            location.reload();
          },1)
        }

    else
    router.push("/browse?q="+search_input.value)
    search_res.value=[]
    search_input.value = ""
  }

  let check = setInterval(()=>{
    if(window.location.href.split('/')[3]==''){
        page.value='discover'
    }
    else if(window.location.href.split('/')[3].substring(0,'6')=='browse'||window.location.href.split('/')[3].substring(0,'6')=='games')
    {
      page.value = 'browse'
    }
    else if(window.location.href.split('/')[3].substring(0,'4')=='cart'||window.location.href.split('/')[3].substring(0,'6')=='games')
    {
      page.value = 'cart'
    }

  },1)


</script>


<template >


<!-- nav-bar --> 

<div class="flex h-[3.3rem] overflow-x-hidden max-w-screen ">
<div class=" bg-dark2   w-full flex justify-between">


  <div class=" hidden pl-8 pt-[.6rem]  flex-grow md:flex">     
        <div @Click="logopush()" class="min-w-[30px] w-[1rem] mr-8 cursor-pointer "><img src="../img/logo.png" class="" alt=""></div>
         <div class="grid  px-5 pt-2 text-zinc-400  text-sm border-b-[6px] border-blue1 font-medium  cursor-pointer">STORE</div>
         <div class="grid  px-5 pt-2 text-zinc-400   text-sm border-b-[0px] border-blue1 font-medium hover:border-b-[6px] transition-all duration-100 cursor-pointer">Support</div>
         <div class="grid   pt-2 border-l-2 border-l-white h-[70%]"></div>
         <div class="grid  px-5 pt-2 text-zinc-400   text-sm border-b-[0px] border-blue1 font-medium hover:border-b-[6px] transition-all duration-100 cursor-pointer ">unrealengine</div>



    </div>
    <div class="ml-3 w-1/4  hidden md:flex  ">
     <div class="mr-1 w-[30%] flex items-center text-white text-xl pl-5"><ion-icon name="globe"></ion-icon></div>
     <div class="mr-5 w-[30%] flex items-center text-white"><ion-icon name="person" class="mr-2"></ion-icon><p>SIGN IN</p></div>
     <div class="w-[50%]"><button class="bg-blue1 w-full h-full text-white p-2 text-sm">Download</button></div>

    </div>

    <div class="md:hidden  h-full w-full flex justify-between">

      <div @click="logopush()" class="md:hidden ml-6 mt-3 min-w-[30px] w-[2rem] "><img src="../img/logo.png" class="" alt=""></div>
    
       <button @click="change_canv" :class="`${offcanv ? 'bg-dark1':'bg-blue1'} transiton-all duration-200 text-white text-[2rem] h-full px-[.7rem] flex items-center text-center`">

        <ion-icon v-if="!offcanv" name="menu"></ion-icon>
        <ion-icon v-if="offcanv" name="close"></ion-icon>

       </button>



    </div>
</div>




</div>


<div @click="change_canv" :class="`text-white md:hidden  h-full z-50 pb-[3.7rem]  w-[100%] absolute   flex flex-row 
                     bg-dark1 opacity-0  ${!offcanv? 'hidden':'opacity-60'}`">


</div>

<div :class="`text-white md:hidden  h-full z-50 pb-[3.7rem]  w-[100%] absolute   flex flex-row 
                     transiton-all duration-200  ${!offcanv? 'translate-x-[-101%]':''} z-[100]`">

                    <div class="bg-dark2 flex flex-col justify-between
                     transiton-all duration-200 pb-[3rem]  text-white w-[70%]  h-screen z-[100] "> 
                     <div class=" flex grow flex-col ">
                          <button class="text-start pl-[1rem] mb-[1rem] py-[.5rem] border-b-[.1rem] border-gray-400">Store</button>
                          <button class="text-start pl-[1rem] mb-[1rem] py-[.5rem] border-b-[.1rem] border-gray-400">Support</button> 
                          <button class="text-start pl-[1rem] mb-[1rem] py-[.5rem] border-b-[.1rem] border-gray-400">unrealengine</button> 
                     </div>

                     <div class=" flex flex-col ">
                           <div class="flex pl-[.5rem] flex-row shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" for="">

                                <label class="grow  py-[.5rem] text-center border-r-[.1rem] border-gray-400" for="">sign-in</label>
                                <label class=" py-[.5rem] text-[1.5rem] text-center w-[20%]" for=""><ion-icon name="globe"></ion-icon></label>
                           </div>
                          <button class="text-center py-[1rem]  bg-blue1">download</button> 
                     </div>
                     
                </div>

                <div @click="change_canv" class="w-[30%] h-full"></div>

              </div>




<!-- search-bar --> 

<div  :class="`flex justify-center max-w-screen  sticky top-0  ${ !offcanv ? 'z-50':'z-50'} lg:bg-dark1 
 `">
   <!-- large screen --> 
  <div class="text-white lg:flex   items-center  py-[1.5rem] w-[78%] sticky top-0 z-50 bg-dark1 hidden ">
      
      <div class=" h-[2.7rem] p-3 rounded-3xl outline-none bg-[#1c1c1c] flex    ">
          <ion-icon name="search" class="text-gray-400 translate-y-[10%] mr-1 "></ion-icon> 
          <input type="text" placeholder="search store" class=" rounded-3xl text-md flex items-center outline-none bg-[#1c1c1c] " v-model="search_input">
          
          <div v-if=" search_res.length >0 " class="flex flex-col absolute translate-y-[2.1rem] w-[50%] rounded-sm p-[1rem] bg-dark2">
            <div @click="res_game_push(game_res.name)" class="flex items-center group flex-row mb-[1rem] cursor-pointer" v-for=" game_res of search_res">
               <img class="w-[2rem] h-[3rem] mr-[1rem]" :src="game_res.logoimg" alt="">
               <label class="text-center group-hover:border-b-[.1rem]" for="">{{game_res.name}}</label>
            </div>

          <router-link class="group" @click="view_more()" :to="'browse?q='+search_input">
          <label class="border-b-[.1rem] group-hover:border-b-0 cursor-pointer" for="">view more</label>  
          </router-link>

          </div>


        </div>
        <router-link to="/"> <button @click="page='discover'" :class="`ml-6 p-2 rounded-md ${page!=='discover'?'text-gray-400 hover:text-white':''} transition-all duration-200 `">Discover</button></router-link>
        <router-link to="/browse">  <button @click="page='browse'" :class="`ml-6 p-2 rounded-md ${page!=='browse'?'text-gray-400 hover:text-white':''} transition-all duration-200`">Browse</button></router-link>
        <router-link class="grow" to="/news"><button @click="page='news'" :class="`ml-6 flex p-2 ${page!=='news'?'text-gray-400 hover:text-white':' rounded-md'}   transition-all duration-200`">News</button></router-link> 
     
      <div class="flex items-center justify-center px-[2.5rem]">
      <router-link  to="/wishlist"><button @click="page='wishlist'" :class="`ml-6 p-2 rounded-md ${page!=='wishlist'?'text-gray-400 hover:text-white':''} transition-all duration-200 `">wishList</button></router-link>
      <router-link  to="/cart">  <button @click="page='cart'" :class="`ml-6 flex flex-row p-2 rounded-md ${page!=='cart'?'text-gray-400 hover:text-white':''} transition-all duration-200 `">cart <label :class="` ${ i>0 ? 'bg-white text-black  py-[.1rem] px-[.5rem] rounded-full':'hidden'} `" for="">{{ i }}</label></button></router-link>
      </div>
      
  </div>




  <!--small screen -->
  <div :class="`text-white lg:hidden md:pb-[1.5rem]   static  items-center  w-[100%]  ${ !offcanv ? 'z-50':'z-40'} bg-dark1   `">
        

            <div class="text-white px-[6%] py-[2rem]  flex  justify-between items-center  w-[100%] bg-dark1  ">
              <div class=" w-[20%] text-start ">
                 <button @click="search_click()">
                    <ion-icon name="search" class="text-gray-400 text-[1.5rem]  "></ion-icon> 
                 </button>
               </div>

              <button class="flex items-center text-[1.2rem]" @click="george=!george">
              
                {{ (page == 'cart' || page == 'wishlist') ? 'discover':page }}
                <label :class="` cursor-pointer flex items-center text-center ml-[.1rem] translate-y-[10%] ${george ? ' rotate-180':''} transition-all duration-300`" for="">
                <ion-icon :class="``" name="arrow-dropdown">
                </ion-icon>
              </label>
              </button>
                
              <div class="flex items-center justify-end w-[20%]">
              <button class="flex items-center text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200 "> <router-link  to="/wishlist"><ion-icon name="checkmark-circle"></ion-icon></router-link></button>
              <button class="flex items-center text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200"><router-link  to="/cart"><ion-icon name="cart"></ion-icon><label :class="` ${ i>0 ? ' absolute  bg-white text-black text-[.9rem] translate-y-[-50%] translate-x-[-30%] h-[25%] py-[0%] px-[.7rem] rounded-lg':'hidden'} `" for="">{{ i }}</label></router-link></button>
              </div>
            </div>
    
              <div :class="` absolute bg-black bg-opacity-50 h-screen w-[100%]  ${george ? 'block':'hidden'}  `">

                  <div :class="`w-full flex flex-col items-start px-[6%] py-[2rem] bg-dark1   `">
                          
                                 <router-link @click="george=false" class="w-full text-start " to="/"><button @click="page='discover'" :class="` ${(page=='discover'||page=='cart'||page=='wishlist') ? 'text-white font-bold':'text-gray-400 hover:text-white'} w-full text-start py-[.7rem]`">Discover</button></router-link> 
                                 <router-link @click="george=false" class="w-full text-start" to="/browse"><button @click="page='browse'" :class="` ${page=='browse' ? 'text-white font-bold':'text-gray-400 hover:text-white'} w-full text-start py-[.7rem] border-t-2 border-b-2 border-gray-400`">Browse</button></router-link> 
                                 <router-link @click="george=false" class="w-full text-start " to="/news"><button @click="page='news'" :class="` ${page=='news' ? 'text-white font-bold':'text-gray-400 hover:text-white'} w-full text-start py-[.7rem]`" >News</button></router-link> 

                  </div>
                  
                  <div @click="george=false" class=" w-full h-screen"></div>

             </div>
             

             <div v-if="george2" class=" absolute flex flex-col items-center   w-full h-screen  ">

              <div class=" flex flex-col items-center px-[6%] py-[2.1rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-dark4 w-full translate-y-[-100%]"> 

                <div class="flex flex-row w-full">
                  <div class="flex items-center mr-[1rem] "> 
                        <button class="flex items-center">
                            <ion-icon name="search" class="text-gray-400 text-[1.5rem]  "></ion-icon> 
                        </button>
                  </div>

                  <div class=" flex  items-center grow">
                   
                    <input class=" bg-transparent w-[100%] outline-none " placeholder="search store" type="text" v-model="search_input">
                  
                  </div>
                  
                  

                  <div class=" text-center w-[10%]">
                    <button class="text-lg" @click="george2=false">
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </div>

                </div>
              

                

              </div>

               <div @click="george2=false" class="w-full h-screen flex flex-col bg-black bg-opacity-50 translate-y-[-6rem]">
                <div class="bg-dark4 z-50 ">
                <div @click="res_game_push(g.name)"  class=" pl-[6%] mt-[1rem] flex flex-row" v-for=" g in search_res ">
                   <img class="w-[10%]" :src="g.logoimg" alt="">
                   <label class="text-white text-center flex items-center ml-[1rem]" for="">{{g.name}}</label>
                  </div>
                  <div class="px-[6%] my-[1rem]" v-if="search_res.length>0" @click="view_more()" :to="'browse?q='+search_input">view more</div>
              </div>
              </div>



            </div>
  
  </div>

  

</div>





</template>