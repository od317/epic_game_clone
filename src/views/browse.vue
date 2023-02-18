<script setup>

import games_gen from '../assets/components/browse_com/games_gen.vue';
import games_grid from '../assets/components/browse_com/games_grid.vue'



let genlist = [
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


let gamegrid = [
{name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'  
},
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },
  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },  {name:'daying light 2',
   img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg'
  },
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'
  },  
  {name:'god',
   img:'https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_SY741_.jpg'
  },  
  {name:'goat 3',
   img:'https://www.igroshop.com/images/detailed/11/goatsimulator3_box_art.jpg'
  },  
  {name:'spiderman',
   img:'https://m.media-amazon.com/images/M/MV5BMjM3MzUzYzYtODA1Zi00YzI5LWFhNTAtOWFkNzEzYmMwOTVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  },
]

window.scrollTo({
        top:0,
      })

</script>



<template>






    




    <games_gen :genlist="genlist"/>
     
    <games_grid :gamegrid="gamegrid"/>
     

</template>