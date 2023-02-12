<script setup>


import { defineProps, reactive, toRef,ref } from "vue";

const props = defineProps({
      id : String
});

let id = props.id
console.log(id)


let games = new Map()

    games.set('daying light2',{
            name:'daying light2',
            img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-ic5-400x166-55b2799d56f3.png?h=270&resize=1&w=480',
            imgs:[
                [
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg"
                ],
                [
                    "https://cdn2.unrealengine.com/dl2-screenshot-egs-1-1920x1080-832ed0ed2d6d.jpg?h=270&resize=1&w=480",
                    "https://cdn2.unrealengine.com/dl2-screenshot-egs-1-1920x1080-832ed0ed2d6d.jpg?h=270&resize=1&w=480",
                    "https://cdn2.unrealengine.com/dl2-screenshot-egs-1-1920x1080-832ed0ed2d6d.jpg?h=270&resize=1&w=480",
                    "https://cdn2.unrealengine.com/dl2-screenshot-egs-1-1920x1080-832ed0ed2d6d.jpg?h=270&resize=1&w=480",

                ],
                [
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
                    "https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg"
                    
                ],
            ]
        })


let game = games.get(id)

let slide_on = ref(false)
let slide_val = ref('')

let backward = ()=>{
   slide_on.value=true
   slide_val.value='0'
   setTimeout(()=>{
    slide_on.value=false
        let temp = game.imgs[2]
        game.imgs[2] = game.imgs[1]
        game.imgs[1] = game.imgs[0]
        game.imgs[0] = temp

   },450)

}

let forward = ()=>{
    slide_val.value='-200'
    slide_on.value=true
    setTimeout(()=>{
        slide_on.value=false
        let temp = game.imgs[0]
        game.imgs[0] = game.imgs[1]
        game.imgs[1] = game.imgs[2]
        game.imgs[2] = temp
    },450)
 
}

</script>


<template>

      <div class="flex justify-center">

               <div class="w-[78%]   text-white pt-[2rem]">

                         <div>
                            <label class=" text-[2rem] ">{{ game.name }}</label>
                            <div class="flex items-center ">
                                  
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



                        <div class="flex mt-[2.4rem] text-[1.4rem] text-white sticky top-[6.5rem] bg-dark1 z-50 pb-[1rem] ">

                               <button class="mr-[2rem]">over</button>
                               <button class="mx-[2rem]">add</button>
                               <button class="mx-[2rem]">ach</button>
                                
                        </div>


                         <div class="grid grid-cols-3">
               
                           <div class="bg-red-700 col-span-2 p-[1.2rem] flex flex-col">


                          <div>
                            <img src="https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg" alt="" class=" rounded-md">
                          </div>


                          <div class="flex justify-between items-center">
                            
                           <button @click="backward()">></button>

                                        
                           <div class="w-[78%]  overflow-x-hidden ">
                        
                                      <div  class="flex w-[300%]  z-50 flex-row">           
                                     
                                           <div v-for="imgs in game.imgs " :class="`flex flex-row  w-[300%] translate-x-[-100%]  ${slide_on ? 'translate-x-['+slide_val+'%] transition-all duration-450':''}`">

                                            <img v-for="img in imgs" class="w-[25%]" :src="img" alt="">

                                           </div>

                                     
                                        
                                    </div>
                                        

                  
                  </div>


                           <button @click="forward()">></button>


                          </div>


                           </div>






                           <div class="bg-green-700">
                                <div class="sticky top-[9.5rem] h-[50%] bg-blue-500">osama</div>
                           </div>
                           
                         </div>



                        <br>
<br>
<br>
<br>
<br>
<br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

osama
<br>
<br>
<br>
<br>
<br>
<br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

osama
<br>
<br>
<br>
<br>
<br>
<br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

osama



               </div>

      </div>









</template>
