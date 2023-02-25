<template>
    
    <div class="flex justify-between text-white px-[1.5rem] mb-[1rem] pt-[2rem]">
                <label class="text-[1.2rem]" for="">Populer geners</label>
                <div class="flex ">
                        <button :class="`${currentSlide == 0?'':'disabled'} mr-[.5rem] text-center text-[1.2rem] bg-dark2 rounded-full h-[2rem] w-[2rem]`" @click="next"><ion-icon class="text-white" name="arrow-dropleft"></ion-icon></button>
                        <button :class="`${currentSlide == 0?' disabled:':''} text-center text-[1.2rem] bg-dark2 rounded-full h-[2rem] w-[2rem]`" @click="prev"><ion-icon class="text-white" name="arrow-dropright"></ion-icon></button>
                </div>
    </div>
    <Carousel ref="carousel" :itemsToShow="2" :settings="{snapAlign: 'start',}" :wrapAround="true" v-model="currentSlide">
      <Slide class="" v-for="game in genlist" :key="game">
        <router-link :to="game.type" >
         <div class="group w-[100%]  h-fit ml-4 first:ml-0 px-[1rem] pt-[1rem] pb-[1rem] mr-2 relative bg-dark2 flex flex-col rounded-sm"  >
                 
                 <div class="flex justify-between ">
                        <img :src="game.imgs[1]" alt=""  :class="`  w-[40%] h-[6rem]   rounded-md`">
                        <img :src="game.imgs[0]" alt=""  :class="` translate-x-[60%] h-[6rem] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  absolute w-[40%]    rounded-md`">
                        <img :src="game.imgs[2]" alt=""  :class="`  w-[40%] h-[6rem]   rounded-md`">
                </div>       
            
                <div class="text-center text-white text-xl mt-[1rem]">{{ game.type }}</div>                 

        </div>
</router-link>
      </Slide>
  
      ...
    </Carousel>
  </template>
  
  <script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { defineProps, reactive, toRef,ref } from "vue";
  import { useRouter } from 'vue-router';
  let router = useRouter();

  const props = defineProps({
  gen_list: Array,
  });

   let genlist = []


   let w= ()=>{
   
        router.push('/browse')

   }

   for(let gl of props.gen_list){
        for(let gen of gl){
            genlist.push(gen)
        }
   }

   for(let gen of genlist){
    console.log(gen)
   }
   let currentSlide = ref(0)

   let next = ()=>{currentSlide.value-=1}
   let prev = ()=>{currentSlide.value+=1}

  </script>


