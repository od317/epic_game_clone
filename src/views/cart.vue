<script setup> 

import {ref} from 'vue'
import {useRouter} from 'vue-router'

let router = useRouter()

 let cart = ref( localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : [])

 let gamesgrid2 = ref(cart)
 
 let total_price = ref(0)
 let total_dis = ref(0)
let cal_p_d = ()=>{
    total_price.value = 0
    total_dis.value = 0
 for(let g of cart.value){
    if(g.oldprice){
    total_dis.value+=parseInt(g.oldprice) - parseInt(g.price)
    total_price.value+= parseInt(g.oldprice)
    }
    else
    total_price.value+= parseInt(g.price)
 }
}

cal_p_d()


 let remove = (game)=>{

       cart.value = cart.value.filter(i=>{
        return i.name !== game.name
       })
       gamesgrid2.value = gamesgrid2.value.filter(i=>{
        return i.name !== game.name
       })
       
       localStorage.setItem('cart',JSON.stringify(cart.value))
       cal_p_d()
 }


 let add_wish= (game)=>{
if(game.inw){
  router.push('/wishlist')
}
else{
let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []

remove(game)

for(let g of wlist){
 if(g.name === game.name)
 return
}

wlist.push(game)
localStorage.setItem('wish_list',JSON.stringify(wlist))

}
}


let cart_push_router = (game)=>{
if(game.type=='basegame')
router.push('game/'+game.name)
else
router.push('game/'+game.mainname)

}

let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []

for(let w of wlist){
  for(let c of gamesgrid2.value){
          if(w.name == c.name )
          c.inw=true
  }
}


 window.scrollTo({top:0})

</script>



<template>

    


<div  class="hidden mb-[4rem] md:flex flex-col  px-[1.5rem] 
md:flex-col  md:items-center">
    
 <div class="flex flex-col lg:w-[78%] md:w-[90%]">
    
    <div class="flex flex-row justify-between items-center">

        <label class="text-white text-[2rem]">my cart</label>


     </div>

   <div class="flex flex-row">

    <div class="flex items-start mt-[1rem] mr-[2rem]  justify-start flex-col">



        <div v-for="game in gamesgrid2" :key="game" class="bg-dark2 p-[1rem] mt-[1.2rem]
                    flex flex-col hover:bg-gray-400 hover:bg-opacity-30 cursor-pointer"
                    @Click="cart_push_router(game)">
                          
                    <div class="flex flex-row  justify-between text-white">   
                        
                        <div class="flex flex-row max-w-[32rem]">
                               <img  class="w-[20%] mr-[1rem] rounded-md cursor-pointer" :src="game.logoimg"/>
                                <div class="flex flex-col h-full">
                                    <label v-if="game.type == 'basegame'" class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem] cursor-pointer"> Base game </label>
                                    <label v-else class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem] cursor-pointer"> Add-on </label>
                                    <label class="text-start text-[1.2rem] cursor-pointer">{{ game.name }}</label>
                                </div>
                           </div>

                           <div class="flex  text-[1rem] flex-col">
                        <div class="flex flex-row">
                        <label for="" class="text-white text-[.7rem] h-fit bg-blue1 rounded-md p-1 px-2 mr-3 cursor-pointer">-50%</label>
                          <label for="" class="text-gray-500 mr-2 line-through cursor-pointer">${{ game.price }}</label>
                          <label for="" class="text-white cursor-pointer">${{ game.price }}</label>
                        </div>
                          <label class="text-white mt-[.5rem] cursor-pointer">sales end at 43/12/21 31:13</label>

                        </div> 

                        </div>
                        

                 
                         <div class="flex flex-row  justify-end items-center">
                            <button v-on:click.stop @click="add_wish(game)" class=" group cursor-pointer  flex items-center text-start w-fit h-fit mr-[1rem]">
                              <label class="flex items-center" for=""><ion-icon v-if="!game.inw" class="transition-all cursor-pointer  duration-150 group-hover:text-white   translate-y-[10%] mr-[.4rem]  text-gray-400  rounded-full z-50 " name="add-circle-outline"></ion-icon> </label> 
                              <label v-if="!game.inw" class="transition-all cursor-pointer  duration-150 group-hover:text-white group-hover:border-white  border-b-[.1rem] text-gray-400" for="">move to wishlist</label>  
                              <label v-else class="transition-all cursor-pointer  duration-150 group-hover:text-white group-hover:border-white  border-b-[.1rem] text-gray-400" for="">view in wishlist</label>  
                            
                            </button>
                            <button v-on:click.stop @click="remove(game)" class="border-b-[.1rem] text-gray-400 text-start hover:text-white  w-fit h-fit">Remove</button>
                         </div>  

                    
                    </div>
</div>



 <div :class="`${cart.length > 0 ? 'flex': 'hidden'} w-[35%] flex-col mt-[2rem] text-white pb-[1.5rem] `">

      <label class="text-[1.4rem] mb-[2rem]" for="">Games and apps summary</label>

      <div class="flex flex-col">
        <div class="flex mb-[.7rem] flex-row justify-between">
            <label for="">price</label>
            <label class="text-white" for="">{{ total_price }}$</label>
        </div>

        <div class="flex flex-col">
        <div class="flex mb-[.7rem] flex-row justify-between">
            <label for="">sale discount</label>
            <label class="text-white" for="">-{{ total_dis }}$</label>
        </div>
        
        <div class="flex flex-col">
        <div class="flex mb-[.5rem] flex-col justify-between border-b-[.1rem] border-b-gray-400 pb-[2rem]">
            <label for="">taxes</label>
            <label class="text-gray-400" for="">calculated at check out</label>
        </div>
        
      </div>

    </div>

 </div>


 <div :class="`${cart.length > 0 ? 'flex': 'hidden'} flex-row justify-between text-white mt-[.8rem]`" for="">
    <label for="">subtotal</label>
    <label for="">{{ total_price - total_dis }}$</label>

</div>

<button :class="`bg-blue1 py-[.8rem] text-[1rem] text-white mt-[1.5rem] rounded-md ${cart.length > 0 ? '': 'hidden'}`">
    check out 
</button>




</div>






</div>

</div>
<div :class="`${ cart.length > 0 ? 'hidden': ''} text-white flex flex-col items-center text-[1.4rem] mt-[1.5rem]`">
       <label for="">your cart is empty </label>

</div>
</div>











<div  :class="`md:hidden mb-[4rem]   flex-col  px-[1.5rem] 
md:flex-row md:w-[78%] md:items-center `">
    
    
    <div class="flex flex-row justify-between items-center">

         <label class="text-white text-[2rem]">my cart</label>

      
    </div>


    <div class="flex items-start mt-[1rem] justify-start flex-col">



        <div @click="cart_push_router(game)" v-for="game in gamesgrid2" :key="game" class="bg-dark2 rounded-md p-[1rem] mt-[1.2rem]
        flex flex-col w-full">
              
        <div class="flex flex-row  text-white">   
                   <img  class="w-[20%] mr-[1rem] rounded-md" :src="game.logoimg"/>
                    <div class="flex flex-col h-full">
                        <label class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem]"> Base game </label>
                        <label class="text-start text-[1.2rem]">{{ game.name }}</label>
                    </div>
               </div>

        <div class="flex mt-[1.5rem] flex-row">
            
            <label for="" :class="`text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3 ${game.oldprice? '':'hidden'}`">{{ game.dis }}%</label>
              <label for="" :class="`text-gray-500 mr-2 line-through ${game.oldprice? '':'hidden'}`">${{ game.oldprice }}</label>
              <label for="" class="text-white">${{ game.price }}</label>

            </div> 
               
        <label class="text-white mt-[.5rem]">sales end at 43/12/21 31:13</label>
   
       <div class="flex flex-row items-center mt-[1.5rem]">
        <button @click.stop @click="add_wish(game)" class=" group cursor-pointer  flex items-center text-start w-fit h-fit mr-[1rem]">
                              <label class="flex items-center" for=""><ion-icon v-if="!game.inw" class="transition-all cursor-pointer  duration-150 group-hover:text-white   translate-y-[10%] mr-[.4rem]  text-gray-400  rounded-full z-50 " name="add-circle-outline"></ion-icon> </label> 
                              <label v-if="!game.inw" class="transition-all cursor-pointer  duration-150 group-hover:text-white group-hover:border-white  border-b-[.1rem] text-gray-400" for="">move to wishlist</label>  
                              <label v-else class="transition-all cursor-pointer  duration-150 group-hover:text-white group-hover:border-white  border-b-[.1rem] text-gray-400" for="">view in wishlist</label>  

                            </button>
                            <button @click.stop @click="remove(game)" class="border-b-[.1rem] text-gray-400 text-start  w-fit h-fit">Remove</button>  </div>
        </div>

</div>



 <div :class="`${cart.length > 0 ? 'flex': 'hidden'}  mt-[2rem] text-white pb-[1.5rem] border-b-[.1rem] border-b-gray-400  flex-col`">

      <label class="text-[1.4rem] mb-[1rem]" for="">Games and apps summary</label>

      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
            <label for="">price</label>
            <label class="text-white" for="">{{ total_price }}$</label>
        </div>

        <div class="flex flex-col">
        <div class="flex flex-row justify-between">
            <label for="">sale discount</label>
            <label class="text-white" for="">{{ total_dis }}$</label>
        </div>
        
        <div class="flex flex-col">
        <div class="flex flex-row justify-between">
            <label for="">taxes</label>
            <label class="text-gray-400" for="">calculated at check out</label>
        </div>
        
      </div>

    </div>

 </div>

</div>


<div :class="`${cart.length > 0 ? 'flex': 'hidden'} flex-row justify-between text-white mt-[1rem]`" for="">
    <label for="">subtotal</label>
    <label for="">{{ total_price - total_dis }}$</label>

</div>

<button :class="`${cart.length > 0 ? '': 'hidden'} bg-blue1 py-[.8rem] w-full text-[1.2rem] text-white mt-[1.5rem] rounded-md`">
    check out 
</button>


<div :class="`${ cart.length > 0 ? 'hidden': ''} text-white flex flex-col items-center text-[1.4rem] mt-[1.5rem]`">
       <label for="">your cart is empty </label>

</div>




</div>




</template>


