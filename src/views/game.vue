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
            img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-ic5-400x166-55b2799d56f3.png?h=270&resize=1&w=480'
        })


let game = games.get(id)
    console.log(game)
</script>


<template>

      

</template>