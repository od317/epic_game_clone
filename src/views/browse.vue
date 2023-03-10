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
            imgs:['https://cdn1.epicgames.com/offer/87c84bc5f43d4fe69ad8f3ccde0594b0/EGS_DishonoredDeathoftheOutsider_ArkaneStudios_S2_1200x1600-acb1abddb047a40709f270fa623f1f02?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/dc61166eea95474e912953b163791d42/EGS_TheOuterWorldsSpacersChoiceEdition_ObsidianEntertainment_S2_1200x1600-24b156886564b75bf9aa823a0a0eb18e?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/f3b63c1a16ed4e78973359dbfaebbd1f/EGS_RogueSpirit_KidsWithSticks_S2_1200x1600-68bb27061cb541b53afcd24bf257ebdb?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"adventuer",
            set:'adv',
            imgs:['https://cdn1.epicgames.com/spt-assets/0e168f0bdd2d4ee79113ec5dead2ce72/elderand-17g68.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/787a68b95c174f5a949838f15731fcf6/ghost-blood-1ir15.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/4c878815b9bb4f91b522aa91145e0b43/kill-fish-1jn4l.png?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"ac/adv",
            set:'ac-adv',
            imgs:['https://cdn1.epicgames.com/spt-assets/54e8bfd7ef1d469c801bf8860e6e3df3/kholat-11ygu.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/180c0330a0df427aba7a538771dd40bd/download-the-pale-beyond-offer-nbwha.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/03303a66254f4bbb9e1d72d068a4fd32/culpa-innata-dn3tv.png?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"fps",
            set:'fps',
            imgs:['https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/9cbb00a07cdc4ebb8ab347fbadeafdc6/download-bloodrayne-terminal-cut-offer-6hx0l.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=480&quality=medium&resize=1&w=360']
        },
    ],
    [
        {
            type:"rpg",
            set:"rpg",
            imgs:['https://cdn1.epicgames.com/offer/dc61166eea95474e912953b163791d42/EGS_TheOuterWorldsSpacersChoiceEdition_ObsidianEntertainment_S2_1200x1600-24b156886564b75bf9aa823a0a0eb18e?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/6f1d94fe635b4feba505f4effdd982a6/wolcen--lords-of-mayhem-1hxez.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/c61e4315b9fd4e5aa42886933d41a841/voltaire-rnins.png?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"open world",
            set:"open world",
            imgs:['https://cdn1.epicgames.com/offer/3262906d93334603b399e106492b1217/EGS_GrandTheftAutoSanAndreasTheDefinitiveEdition_RockstarGames_S2_1200x1600-31b942afca6472306be8ae9dfa73290e?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/fd6a13a256014a22a83ff2aaacc30e00/EGS_GrandTheftAutoViceCityTheDefinitiveEdition_RockstarGames_S2_1200x1600-18ac3dd32143492b2650144da0cf0ca9?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/ec64a50e79884e28be9ac3d3cd4f5c12/EGS_GrandTheftAutoIIITheDefinitiveEdition_RockstarGames_S2_1200x1600-951dfab28dd4c6d61bfe7bb360a349fc?h=480&quality=medium&resize=1&w=360']
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