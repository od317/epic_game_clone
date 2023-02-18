<script setup>

  import {ref} from 'vue'
  let page = ref('discover')

  let george = ref(false)
  let george2 = ref(false)
  
  let search_click = ()=>{
    george.value = false
    george2.value = true
  }

</script>


<template >


<!-- nav-bar --> 

<div class="flex h-[3.7rem] overflow-x-hidden max-w-screen ">
<div class=" bg-dark2   w-full flex justify-between">
  <div class="  pl-8 pt-3  flex-grow flex">     
        <div class="min-w-[30px] w-[2rem] mr-8 "><img src="../img/logo.png" class="" alt=""></div>
         <div class="grid  px-5 pt-2 text-zinc-400  text-sm border-b-[6px] border-blue1 font-medium  cursor-pointer">STORE</div>
         <div class="grid  px-5 pt-2 text-zinc-400   text-sm border-b-[0px] border-blue1 font-medium hover:border-b-[6px] transition-all duration-100 cursor-pointer">Support</div>
         <div class="grid   pt-2 border-l-2 border-l-white h-[70%]"></div>
         <div class="grid  px-5 pt-2 text-zinc-400   text-sm border-b-[0px] border-blue1 font-medium hover:border-b-[6px] transition-all duration-100 cursor-pointer ">unrealengine</div>



    </div>
    <div class="ml-3 w-1/4   flex  ">
     <div class="mr-1 w-[30%] flex items-center text-white text-xl pl-5"><ion-icon name="globe"></ion-icon></div>
     <div class="mr-5 w-[30%] flex items-center text-white"><ion-icon name="person" class="mr-2"></ion-icon><p>SIGN IN</p></div>
     <div class="w-[50%]"><button class="bg-blue1 w-full h-full text-white p-3 text-sm">Download</button></div>

    </div>
</div>

</div>


<!-- search-bar --> 

<div class="flex justify-center max-w-screen  sticky top-0  z-50 lg:bg-dark1 ">
   <!-- large screen --> 
  <div class="text-white lg:flex items-center  py-[2rem] w-[78%] sticky top-0 z-50 bg-dark1 hidden ">
      
      <div class=" h-[2.7rem] p-3 rounded-3xl outline-none bg-[#1c1c1c] flex  items-center   ">
          <ion-icon name="search" class="text-gray-400 mr-1 "></ion-icon> 
          <input type="text" placeholder="search store" class=" rounded-3xl text-lg flex items-center outline-none bg-[#1c1c1c] ">
        </div>
        <router-link to="/"> <button @click="page='discover'" :class="`ml-6 p-2 rounded-md ${page!=='discover'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200 `">Discover</button></router-link>
        <router-link to="/browse">  <button @click="page='browse'" :class="`ml-6 p-2 rounded-md ${page!=='browse'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200`">Browse</button></router-link>
        <router-link class="grow" to="/news"><button @click="page='news'" :class="`ml-6 flex p-2 ${page!=='news'?'text-gray-400 hover:text-white':'text-lg border-[1px] rounded-md'}   transition-all duration-200`">News</button></router-link> 
     
      <div class="flex items-center justify-center px-[2.5rem]">
      <button class="ml-6 text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200 ">wishlist</button>
      <button class="ml-6 text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200">cart</button>
      </div>
      
  </div>




  <!--small screen -->
  <div class="text-white lg:hidden    static  items-center  w-[100%]  z-50 bg-dark1   ">
        

            <div class="text-white px-[6%] py-[2rem]  flex  justify-between items-center  w-[100%] bg-dark1  ">
              <div class=" w-[20%] text-start ">
                 <button @click="search_click()">
                    <ion-icon name="search" class="text-gray-400 text-[1.5rem]  "></ion-icon> 
                 </button>
               </div>

              <button class="flex items-center text-[1.2rem]" @click="george=!george">
              
                {{ page }}
                <label :class="` cursor-pointer flex items-center text-center ml-[.1rem] translate-y-[10%] ${george ? ' rotate-180':''} transition-all duration-300`" for="">
                <ion-icon :class="``" name="arrow-dropdown">
                </ion-icon>
              </label>
              </button>
                
              <div class="flex items-center justify-end w-[20%]">
              <button class="flex items-center text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200 "><ion-icon name="checkmark-circle"></ion-icon></button>
              <button class="flex items-center text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200"><ion-icon name="cart"></ion-icon></button>
              </div>
            </div>
    
              <div :class="` absolute bg-black bg-opacity-50 h-screen w-[100%]  ${george ? 'block':'hidden'}  `">

                  <div :class="`w-full flex flex-col items-start px-[6%] py-[2rem] bg-dark1   `">
                          
                                 <router-link  class="w-full text-start " to="/"><button @click="page='discover'" :class="` ${page=='discover' ? 'text-white font-bold':'text-gray-400 hover:text-white'} w-full text-start py-[.7rem]`">Discover</button></router-link> 
                                 <router-link class="w-full text-start" to="/browse"><button @click="page='browse'" :class="` ${page=='browse' ? 'text-white font-bold':'text-gray-400 hover:text-white'} w-full text-start py-[.7rem] border-t-2 border-b-2 border-gray-400`">Browse</button></router-link> 
                                 <router-link class="w-full text-start " to="/news"><button @click="page='news'" :class="` ${page=='news' ? 'text-white font-bold':'text-gray-400 hover:text-white'} w-full text-start py-[.7rem]`" >News</button></router-link> 

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