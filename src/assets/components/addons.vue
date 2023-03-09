<script setup>

   import { defineProps, reactive, toRef,ref,watch} from "vue";
   import games from '../../games'
   import { useRouter } from "vue-router";
   import {useRoute} from "vue-router";

   let router = useRouter()

        const props = defineProps({
        type: String
        });

        let game = props.type

        console.log(game)

</script>

<template>


<div class=" md:hidden">

    

</div>


</template>