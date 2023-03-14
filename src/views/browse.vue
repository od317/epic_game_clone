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
            set:"ow",
            imgs:['https://cdn1.epicgames.com/offer/3262906d93334603b399e106492b1217/EGS_GrandTheftAutoSanAndreasTheDefinitiveEdition_RockstarGames_S2_1200x1600-31b942afca6472306be8ae9dfa73290e?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/fd6a13a256014a22a83ff2aaacc30e00/EGS_GrandTheftAutoViceCityTheDefinitiveEdition_RockstarGames_S2_1200x1600-18ac3dd32143492b2650144da0cf0ca9?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/ec64a50e79884e28be9ac3d3cd4f5c12/EGS_GrandTheftAutoIIITheDefinitiveEdition_RockstarGames_S2_1200x1600-951dfab28dd4c6d61bfe7bb360a349fc?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"Fantasy ",
            set:'fg',
            imgs:['https://cdn1.epicgames.com/offer/a472b0f2f2a5493d960a941f01cf3393/EGS_Forspoken_LuminousProductions_S2_1200x1600-dd7b5d1f22cb04906377b7ed895779b8_1200x1600-dd7b5d1f22cb04906377b7ed895779b8?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/de3677b7bac547128656ac18c5b2f298/EGS_LostEidolons_OceanDriveStudioInc_S2_1200x1600-4091ca2e6e3e7828fe2e58c2ed0e81b4?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"Exploration",
            set:'eg',
            imgs:['https://cdn1.epicgames.com/offer/3428aac705b44d88beb8334780fa33bd/EGS_SEASONAlettertothefuture_ScavengersStudio_S2_1200x1600-fd02caab75848d7b7ab3633bc0503ec7?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/5afb45717a7b492da9727b3e7a3cd64a/shoulders-of-giants-ohz8f.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/d12ae11a83c746c290e006a73438840f/EGS_RhythmSproutSickBeatsBadSweets_SURT_S2_1200x1600-49e2c3e5ca8d5596850f663afadc5972?h=480&resize=1&w=360']
        },
        {
            type:"Horror",
            set:'hg',
            imgs:['https://cdn1.epicgames.com/spt-assets/787a68b95c174f5a949838f15731fcf6/ghost-blood-1ir15.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/dcb2eff79fb34ebe9d5ad4e7fb33713b/splatter--zombiecalypse-now-xjuc3.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/54e8bfd7ef1d469c801bf8860e6e3df3/kholat-11ygu.png?h=480&quality=medium&resize=1&w=360']
        },
     
    ],
    [
    {
            type:"Tower Defense",
            set:'td',
            imgs:['https://cdn1.epicgames.com/spt-assets/1787db0157c34fe0bc1e21081f2c0935/download-cursed-treasure-2-ultimate-edition-offer-odfcy.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/0a3bd1bc13104c979634631e75d2f87f/download-locks-quest-offer-10zoi.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DefendtheRook_OneUpPlus_S2_1200x1600-aa4c6d0c1d42191e8a6bd9a27fd9c5e2?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"Survival Games",
            set:'sv',
            imgs:['https://cdn1.epicgames.com/spt-assets/0de2d0d8870f457eaf7c6bf8c64f7f9e/hell-is-others-1ra3i.jpg?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/4ec958d5e4b6429aadbc116cee0b6ea0/EGS_DeadSpace_MotiveStudio_S2_1200x1600-551c16d068cab45b02149e15a43c2413?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/da2d8e4b946b4b50b1ad818727469873/rain-world-28tjl.png?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"Strategy",
            set:'stg',
            imgs:['https://cdn1.epicgames.com/spt-assets/e7585b80abf94d7590e4442d8d9cd3fc/lumencraft-n8oxj.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/spt-assets/8b3f6ef674264ec8bc2bf7522315fd5a/goblins-of-elderstone-x0v72.png?h=480&quality=medium&resize=1&w=360']
        },
        {
            type:"Stealth",
            set:'sth',
            imgs:['https://cdn1.epicgames.com/spt-assets/e807c97d367542cb9953a80bb6485e32/starless-1e5zv.png?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/18ad196e381b4331bf856e71a85ee0df/EGS_SniperElite5_Rebellion_S2_1200x1600-a0198a289c1472b26bc8d7a409c358c1?h=480&quality=medium&resize=1&w=360',
                  'https://cdn1.epicgames.com/offer/87c84bc5f43d4fe69ad8f3ccde0594b0/EGS_DishonoredDeathoftheOutsider_ArkaneStudios_S2_1200x1600-acb1abddb047a40709f270fa623f1f02?h=480&quality=medium&resize=1&w=360']
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