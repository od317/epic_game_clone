<script setup>


import {ref} from 'vue'
 
import home from './Home.vue'
import browse from './browse.vue'

let page = ref('browse')


</script>


<template class="">

<div class="  ">

<!-- nav-bar --> 

<div class="flex h-[3.7rem] overflow-x-hidden max-w-screen ">
<div class=" bg-dark2   w-full flex justify-between">
  <div class="  pl-8 pt-3  flex-grow flex">     
        <div class="min-w-[30px] w-[2rem] mr-8 "><img src="../assets/img/logo.png" class="" alt=""></div>
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


</div>

<!-- search-bar --> 

<div class="flex justify-center max-w-screen  sticky top-0  z-50 bg-dark1 overflow-x-hidden">
    <div class="text-white flex items-center  py-[2rem] w-[78%] sticky top-0 z-50 bg-dark1 ">
      
      <div class="w-[20%] h-[2.7rem] p-3 rounded-3xl outline-none bg-[#1c1c1c] flex  items-center   ">
          <ion-icon name="search" class="text-gray-400 mr-1 "></ion-icon> 
          <input type="text" placeholder="search store" class=" rounded-3xl text-lg flex items-center outline-none bg-[#1c1c1c] ">
        </div>
        <button @click="page='discover'" :class="`ml-6 p-2 rounded-md ${page!=='discover'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200 `">Discover</button>
      <button @click="page='browse'" :class="`ml-6 p-2 rounded-md ${page!=='browse'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} transition-all duration-200`">Browse</button>
      <button @click="page='news'" :class="`ml-6 flex p-2 ${page!=='news'?'text-gray-400 hover:text-white':'text-lg border-[1px]'} grow transition-all duration-200`">News</button>
     
      <div class="flex items-center justify-center px-[2.5rem]">
      <button class="ml-6 text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200 ">wishlist</button>
      <button class="ml-6 text-gray-400 text-xl mx-2 hover:text-white transition-all duration-200">cart</button>
      </div>
      
      </div>
</div>



<div class=" h-fit bg-dark1 overflow-x-hidden  ">
 
  

    <home v-if="page==='discover'"/>
    <browse v-if="page==='browse'"/>
    

</div>

</template>