<script setup>


import {ref} from 'vue'
 
import home from './Home.vue'
import browse from './browse.vue'
import news from './news.vue'


let page = ref('discover')


</script>


<template class="">



<div class=" h-fit bg-dark1 overflow-x-hidden  ">
 
  

    <home v-if="page==='discover'"/>
    <browse v-if="page==='browse'"/>
    <news v-if="page==='news'"/>
    

</div>

</template>