<script setup>

  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

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

</script>


<template >


<!-- nav-bar --> 

<div class="flex h-[3.7rem] overflow-x-hidden max-w-screen ">
<div class=" bg-dark2   w-full flex justify-between">


  <div class=" hidden pl-8 pt-3  flex-grow md:flex">     
        <div @Click="logopush()" class="min-w-[30px] w-[2rem] mr-8 cursor-pointer "><img src="../img/logo.png" class="" alt=""></div>
         <div class="grid  px-5 pt-2 text-zinc-400  text-sm border-b-[6px] border-blue1 font-medium  cursor-pointer">STORE</div>
         <div class="grid  px-5 pt-2 text-zinc-400   text-sm border-b-[0px] border-blue1 font-medium hover:border-b-[6px] transition-all duration-100 cursor-pointer">Support</div>
         <div class="grid   pt-2 border-l-2 border-l-white h-[70%]"></div>
         <div class="grid  px-5 pt-2 text-zinc-400   text-sm border-b-[0px] border-blue1 font-medium hover:border-b-[6px] transition-all duration-100 cursor-pointer ">unrealengine</div>



    </div>
    <div class="ml-3 w-1/4  hidden md:flex  ">
     <div class="mr-1 w-[30%] flex items-center text-white text-xl pl-5"><ion-icon name="globe"></ion-icon></div>
     <div class="mr-5 w-[30%] flex items-center text-white"><ion-icon name="person" class="mr-2"></ion-icon><p>SIGN IN</p></div>
     <div class="w-[50%]"><button class="bg-blue1 w-full h-full text-white p-3 text-sm">Download</button></div>

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
                     transiton-all duration-200  ${!offcanv? 'translate-x-[-101%]':''}`">

                    <div class="bg-dark2 flex flex-col justify-between
                     transiton-all duration-200 pt-[2rem] text-white w-[70%]  h-full z-50 "> 
                     <div class=" flex grow flex-col">
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

<div  :class="`flex justify-center max-w-screen  sticky top-0  ${ !offcanv ? 'z-40':'z-40'} lg:bg-dark1 
 `">
   <!-- large screen --> 
  <div class="text-white lg:flex   items-center  py-[2rem] w-[78%] sticky top-0 z-50 bg-dark1 hidden ">
      
      <div class=" h-[2.7rem] p-3 rounded-3xl outline-none bg-[#1c1c1c] flex  items-center   ">
          <ion-icon name="search" class="text-gray-400 mr-1 "></ion-icon> 
          <input type="text" placeholder="search store" class=" rounded-3xl text-lg flex items-center outline-none bg-[#1c1c1c] ">
        </div>
        <router-link to="/"> <button @click="page='discover'" :class="`ml-6 p-2 rounded-md ${page!=='discover'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200 `">Discover</button></router-link>
        <router-link to="/browse">  <button @click="page='browse'" :class="`ml-6 p-2 rounded-md ${page!=='browse'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200`">Browse</button></router-link>
        <router-link class="grow" to="/news"><button @click="page='news'" :class="`ml-6 flex p-2 ${page!=='news'?'text-gray-400 hover:text-white':'text-lg border-[1px] rounded-md'}   transition-all duration-200`">News</button></router-link> 
     
      <div class="flex items-center justify-center px-[2.5rem]">
      <router-link  to="/wishlist"><button @click="page='wishlist'" :class="`ml-6 p-2 rounded-md ${page!=='wishlist'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200 `">wishList</button></router-link>
      <router-link  to="/cart">  <button @click="page='cart'" :class="`ml-6 flex flex-row p-2 rounded-md ${page!=='cart'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200 `">cart <label :class="` ${ i>0 ? 'bg-white text-black  py-[.1rem] px-[.5rem] rounded-full':'hidden'} `" for="">{{ i }}</label></button></router-link>
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
                
              <div class=" flex flex-row items-center px-[6%] py-[2.1rem] bg-dark4 w-full translate-y-[-100%]"> 

                  <div class="flex items-center mr-[1rem] "> 
                        <button class="flex items-center">
                            <ion-icon name="search" class="text-gray-400 text-[1.5rem]  "></ion-icon> 
                        </button>
                  </div>

                  <div class=" flex items-center grow">
                    <input class=" bg-transparent w-[100%] outline-none " placeholder="search store" type="text">
                  </div>
                  
                  <div class=" text-center w-[10%]">
                    <button class="text-lg" @click="george2=false">
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </div>

                </div>
              
              

               <div @click="george2=false" class="w-full h-screen bg-black bg-opacity-50 translate-y-[-6rem]"></div>



            </div>
  
  </div>

  

</div>





</template>