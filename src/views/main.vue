<script setup>


import {ref} from 'vue'
 
import home from './Home.vue'
import browse from './browse.vue'



let page = ref('browse')


</script>


<template class="">



<div class=" h-fit bg-dark1 overflow-x-hidden  ">
 
  

    <home v-if="page==='discover'"/>
    <browse v-if="page==='browse'"/>
    

</div>

</template>