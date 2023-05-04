<script setup>

import nav_search from './assets/components/nav.vue'

let w = ()=>{
     window.scrollTo({top:0,behavior:'smooth'})
}

window.scrollTo({
        top:0,
      })
      


</script>

<template >
      
     <nav_search/>
       
     
     <div class=" h-fit  font-ss bg-dark1   ">
   
          <div class="min-h-screen">       
               <router-view></router-view>
          </div>
     

     <div class="md:hidden bg-dark2 flex text-white flex-col px-[1.5rem]">

             <div class="flex flex-row justify-between items-center pt-[1rem] ">

                   <div class="text-[1.8rem]">
                    <ion-icon class="mr-[1rem]" name="logo-facebook"></ion-icon>
                    <ion-icon class="mr-[1rem]" name="logo-twitter"></ion-icon>
                    <ion-icon class="" name="logo-youtube"></ion-icon>
                    </div>

                   <button @click="w" class="text-[1.5rem] border-2 border-white px-[.5rem] py-[.3rem]">
                    <ion-icon name="arrow-up"></ion-icon>
                   </button>

             </div>



             <div class="flex flex-col border-b-[.1rem] border-gray-400 mb-[1rem] w-full mt-[.5rem]">

               <label class="text-gray-400 mt-[.2rem]" for="">Resourese</label>

               <div class="flex flex-row w-full ">


                    <div class=" mr-[5%] flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>

                    <div class="flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>
                    </div>


               </div>

               <label  class="text-gray-400 mt-[2rem]" for="">Made by epic games</label>


                 <div class="flex flex-row w-full  mb-[2rem]">


                    <div class=" mr-[5%] flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>

                    <div class="flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>
                    </div>


               </div>


             </div>

             <label class="text-[.7rem] mb-[2rem]" for="">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur tempore expedita omnis enim? Velit maiores molestiae magnam vero corrupti tenetur maxime eligendi nostrum! Molestiae itaque voluptas dolores totam? Dolore.
             </label>

             <div class="w-full flex items-center   text-center mb-[2rem]" for="">
               <label class=" text-[1rem] flex flex-col items-start justify-center" for="">
                    <button>Terms of service</button>
                    <button>Terms of service</button>
                    <button>Terms of service</button>

               </label>
             </div>

             <div class="flex items-center justify-center">

             </div>

     </div>









         <div class="hidden bg-dark2 md:flex text-white flex-col px-[4rem]">

             <div class="flex flex-row justify-between items-center pt-[1rem] ">

                   <div class="text-[1.8rem]">
                    <ion-icon class="mr-[1rem]" name="logo-facebook"></ion-icon>
                    <ion-icon class="mr-[1rem]" name="logo-twitter"></ion-icon>
                    <ion-icon class="" name="logo-youtube"></ion-icon>
                    </div>

                   <button @click="w" class="text-[1.5rem] border-2 border-white px-[.5rem] py-[.3rem]">
                    <ion-icon name="arrow-up"></ion-icon>
                   </button>

             </div>



             <div class="flex flex-col border-b-[.1rem] border-gray-400 mb-[1rem] w-full mt-[.5rem]">

               <label class="text-gray-400 mt-[.2rem]" for="">Resourese</label>

               <div class="flex flex-row w-full ">


                    <div class=" mr-[5%] items-start flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>

                    <div class=" mr-[5%] items-start flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>

                    <div class=" items-start flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>


               </div>

               <label  class="text-gray-400 mt-[2rem]" for="">Made by epic games</label>


                 <div class="flex flex-row w-full  mb-[2rem]">

                    <div class=" mr-[5%] items-start flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>

                    <div class=" items-start flex flex-col">
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>
                         <button>lorem</button>

                    </div>

               </div>


             </div>

             <label class="text-[.7rem] w-[50%] mb-[2rem]" for="">

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis voluptatem explicabo iusto fugit nulla ab deserunt quod quas doloremque animi ex asperiores hic rem neque error, laboriosam quam magni.
             </label>

             <div class="w-full flex items-center  text-center mb-[2rem]" for="">
               <label class=" text-[1rem] flex  items-center" for="">
                    <button class="mr-[1rem]">Terms of service</button>
                    <button class="mr-[1rem]">Terms of service</button>
                    <button class="mr-[1rem]">Terms of service</button>

               </label>
             </div>

             <div class="flex items-center justify-center">
               
             </div>

     </div>




     </div>
     

</template>