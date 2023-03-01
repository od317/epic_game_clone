<script setup>

import games_gen from '../assets/components/browse_com/games_gen.vue';
import games_grid from '../assets/components/browse_com/games_grid.vue'
import gamegrid from '../games_grid'


const props = defineProps({
      id : String
});

let id = props.id

let genlist = [
    [   
        {
            type:"action ",
            set:'ac',
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"adventuer",
            set:'adv',
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"casual",
            set:'ac/adv',
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"fps",
            set:'fps',
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
    ],
    [
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
    ],
    [
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
    ],
    [
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"action games1",
            imgs:['https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S2_1200x1600-8c8042da2f394f7d2ce9403e713b17c9?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/da36711940d4460da57d8d6ad67236a4/EGS_SpongeBobSquarePantsTheCosmicShake_PurpleLamp_S2_1200x1600-a0a7c858eae0fb28fd0b956341b3ebd2?h=480&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
    ],
]


window.scrollTo({
        top:0,
      })

</script>



<template>






    




    <games_gen :genlist="genlist"/>
     
    <games_grid :gamegrid="gamegrid" :type="id"/>
     

</template>