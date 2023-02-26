<template>
    <Carousel class="my-[1rem]" id="gallery " :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for=" img in imgs" :key="img">
        <div class="carousel__item">
            <img class="rounded-md" :src="img.img" alt="">
        </div>
      </Slide>
    </Carousel>
  
    <Carousel
      id="thumbnails"
      :items-to-show="3.5"
      :wrap-around="false"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide class=" " v-for="slide in imgs.length " :key="slide">
        <div :class="`w-[90%] rounded-md ${currentSlide+1 == slide? 'border-[.1rem]  border-white':''}`" @click="slideTo(slide - 1)">
            <div :class="` ${currentSlide+1 == slide? 'hidden':''} absolute w-[90%] rounded-md h-full bg-black opacity-50 z-30`"></div>
            <img class="rounded-md" :src="imgs[slide-1].img" alt="">
        </div>
      </Slide>
    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import {ref} from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  const props = defineProps({
      game : Object
    });
  
  let imgs = []
  for(let imgs1 of props.game.imgs){
    for(let img of imgs1){
      imgs.push(img)
    }
  }
  


  let currentSlide = ref(0)

  let slideTo =(val)=>{
        currentSlide.value = val
      }

  
  </script>
  