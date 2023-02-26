<script setup> 

import {ref} from 'vue'

 let cart = ref( localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : [])

 console.log(cart.value)
 let gamesgrid2 = ref(cart)





 let remove = (game)=>{

       cart.value = cart.value.filter(i=>{
        return i !== game
       })
       gamesgrid2.value = gamesgrid2.value.filter(i=>{
        return i !== game
       })
       
       localStorage.setItem('cart',JSON.stringify(cart.value))

 }


 let add_wish= (game)=>{

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []

for(let g of wlist){
 if(g.name === game.name)
 return
}

wlist.push(game)
localStorage.setItem('wish_list',JSON.stringify(wlist))

}

 window.scrollTo({top:0})

</script>



<template>

    




<div  class="md:hidden mb-[4rem] flex flex-col px-[1.5rem] ">
    
    
    <div class="flex flex-row justify-between items-center">

         <label class="text-white text-[2rem]">cart</label>

      
    </div>


    <div class="flex items-start mt-[4rem] justify-start flex-col">



        <div v-for="game in gamesgrid2" :key="game" class="bg-dark2 p-[1rem] mt-[1.2rem]
        flex flex-col">
              
        <div class="flex flex-row text-white">   
                   <img  class="w-[20%] mr-[1rem] rounded-md" :src="game.logoimg"/>
                    <div class="flex flex-col h-full">
                        <label class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem]"> Base game </label>
                        <label class="text-start text-[1.2rem]">{{ game.name }}</label>
                    </div>
               </div>

        <div class="flex mt-[1.5rem] flex-row">
            
            <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">-50%</label>
              <label for="" class="text-gray-500 mr-2 line-through">${{ game.price }}</label>
              <label for="" class="text-white">${{ game.price }}</label>

            </div> 
               
        <label class="text-white mt-[.5rem]">sales end at 43/12/21 31:13</label>
   
       <div class="flex flex-row items-baseline mt-[1.5rem]">
                <ion-icon class=" translate-y-[40%] mr-[.4rem]  text-gray-400  rounded-full z-50 " name="add-circle-outline"></ion-icon> 
                <button @click="add_wish(game)" class="border-b-[.1rem] text-gray-400 text-start w-fit h-fit mr-[1rem]">move to wishlist</button>
                <button @click="remove(game)" class="border-b-[.1rem] text-gray-400 text-start w-fit h-fit">Remove</button>
       </div>
        </div>

</div>




</div>




</template>


