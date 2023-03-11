let game_discs = new Map()

game_discs.set('cc',            {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
    title:'This game has Inclusive',
    text:'Character Customization'
})

game_discs.set('gbb',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
    title:'This game has',
    text:'Great Boss Battles'
})

game_discs.set('ef',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
    title:'This game is',
    text:'Extremely Fun'
})

game_discs.set('as',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f4dd.svg',
    title:'This game has ',
    text:'Amazing Storytelling'
})



game_discs.set('r',                                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f6c1.svg',
    title:'This game is',
    text:'Relaxing'
})


game_discs.set('gfb',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
    title:'This game is',
    text:'Great for Beginners'
})


game_discs.set('ac',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3ad.svg',
    title:'This game has',
    text:'Amazing Characters'
})



let games = new Map()
let games_list =[
    
    {
    name:'daying light2',
    logoimg:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg',
    img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-ic5-400x166-55b2799d56f3.png?h=270&resize=1&w=480',
    ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S3_2560x1440-f1dcd15207f091674615ccb4bd9dc3c7',
    bottom_img:'https://cdn2.unrealengine.com/dl2-1st-anniversary-roadmap-1920x1080-eng-1920x1080-bb5b3ec5de61.jpg',
    theme_color:'#ed0000',
    price:'59.99',
    dis:null,
    oldprice:null,
    rate:4.6,
    col:[],
    imgs:[
        [
            {img:"https://cdn2.unrealengine.com/dl2-1920x1080-66d335afff6e.jpg",
            num:1},
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-1-1920x1080-832ed0ed2d6d.jpg",
            num:2},                   
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-2-1920x1080-c8156088020f.jpg",
            num:3},                    
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-3-3840x2160-7794fc192b56.jpg",
            num:4},
        ],
        [
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-4-3840x2160-67048bc9e130.jpg",
            num:5},
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-6-3840x2160-dcee025fa971.jpg",
            num:6},                   
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-7-3840x2160-cac49f07324b.jpg",
            num:7},                    
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-8-3840x2160-5a858ef4c0c3.jpg",
            num:8},
        ],
        [
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-9-3840x2160-079aa005c741.jpg",
            num:9},
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-10-3840x2160-551c6400c1fa.jpg",
            num:10},                   
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-11-1920x1080-77f6b3d15132.jpg",
            num:11},                    
            {img:"https://cdn2.unrealengine.com/dl2-screenshot-egs-12-1920x1080-f54276ec765e.jpg",
            num:12},
            
        ],
    ],
    achievements:[
        {
            name:'Anto the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'19 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'Virst Shot',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
            xp:'102 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.2% of players unlock'
        },
        {
            name:'Cnto the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'5 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.3% of players unlock'
        },
        {
            name:'Bnto the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'3 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.4% of players unlock'
        },
        {
            name:'Ento the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'1 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.15% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'28 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'1.1% of players unlock'
        },
        {
            name:'First Shot',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
            xp:'30 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'2.1% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'4 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.21% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'45 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'52 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'5 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'First Shot',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
            xp:'10 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'5 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'5 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        },
        {
            name:'Into the Unknown',
            img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
            xp:'5 XP',
            text:'Help 50 survivors in Encounters.',
            unrate:'0.1% of players unlock'
        }
    ],
    editions:[
        {
            img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
            name:'Dying Light 2 Stay Human',
            text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
            type:'BASE GAME',
            dis:'50%',
            price:'39.99',
            oldprice:'59.99',
            date:'Sale ends 2/16/2023 at 7:00 PM'
        },
        {
            img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
            name:'Dying Light 2 Stay Human',
            text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
            type:'BASE GAME',
            dis:'50%',
            price:'39.99',
            oldprice:'59.99',
            date:'Sale ends 2/16/2023 at 7:00 PM'
        },                {
            img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
            name:'Dying Light 2 Stay Human',
            text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
            type:'BASE GAME',
            dis:'50%',
            price:'39.99',
            oldprice:'59.99',
            date:'Sale ends 2/16/2023 at 7:00 PM'
        },
    ],
    adds:[
        {
            img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
            name:'Dying Light 2 Stay Human: Rais Bundle',
            text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
            type:'ADD-ON',
            dis:null,
            price:'2.39',
            oldprice:null,
            date:null
        },
        {
            img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
            name:'Dying Light 2 Stay Human: Rais Bundle',
            text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
            type:'ADD-ON',
            dis:null,
            price:'2.39',
            oldprice:null,
            date:null
        },
        {
            img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
            name:'Dying Light 2 Stay Human: Rais Bundle',
            text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
            type:'ADD-ON',
            dis:null,
            price:'2.39',
            oldprice:null,
            date:null
        },
        
    ],
    game_disc:[
        {
            img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f423.svg',
            title:'This game is',
            text:'Great for Beginners'
        },
        {
            img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
            title:'This game has Inclusive',
            text:'Character Customization'
        },
        {
            img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
            title:'This game has',
            text:'Great Boss Battles'
        },
        {
            img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
            title:'This game is',
            text:'Extremely Fun'
        },
    ]  
    },
    {
        name:'The Last of Us Part I',
        logoimg:'https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-ic1-400x108-afff3c9ed58a.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S3_2560x1440-f1dcd15207f091674615ccb4bd9dc3c7',
        bottom_img:'https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g2-00-3840x2160-e2632aa5352f.jpg',
        theme_color:'#0062ff',
        price:'39.99',
        oldprice:'59.99',
        dis:'20%',
        rate:4.9,
        date:'Avalibale 2023',
        col:['top sellers','Most Played'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-00-1920x1080-9e4acd6e5364.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-01-1920x1080-7208251f857d.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-02-1920x1080-6baf4580c38e.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-03-1920x1080-634e56051042.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-04-1920x1080-74860bc7f85b.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-05-1920x1080-99038d41980c.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-06-1920x1080-01f7f67e21c1.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-07-1920x1080-63cf5f8b27a7.jpg",
                num:8},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-08-1920x1080-36c93db0c87d.jpg",
                num:9},
                {img:"https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g1a-09-1920x1080-be5090762123.jpg",
                num:10},                   

            ],
        ],
        achievements:[
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'10 XP'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP'
            }
        ],
        editions:[
            {
                img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
                type:'BASE GAME',
                dis:'50%',
                price:'39.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
            {
                img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
                type:'BASE GAME',
                dis:'50%',
                price:'39.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },                {
                img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
                type:'BASE GAME',
                dis:'50%',
                price:'39.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
        ],
        adds:[
            {
                img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human: Rais Bundle',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human: Rais Bundle',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human: Rais Bundle',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            
        ],
        game_disc:[
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
    
        ]
    },
    {
        name:'spiderman Remastered',
        logoimg:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
        img:'https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-ic1-400x400-783ee335e810.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S3_2560x1440-f1dcd15207f091674615ccb4bd9dc3c7',
        bottom_img:'https://cdn2.unrealengine.com/dl2-1st-anniversary-roadmap-1920x1080-eng-1920x1080-bb5b3ec5de61.jpg',
        theme_color:'blue-500',
        price:'29.99',
        dis:"50%",
        oldprice:'59.99',
        rate:2.5,
        col:[],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:8},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:9},
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:10},                   
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:11},                    
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:12},
                
            ],
        ],
        achievements:[
            {
                name:'Anto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'19 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Virst Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'102 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.2% of players unlock'
            },
            {
                name:'Cnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.3% of players unlock'
            },
            {
                name:'Bnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'3 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.4% of players unlock'
            },
            {
                name:'Ento the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'1 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.15% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'28 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'1.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'30 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'2.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'4 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.21% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'45 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'52 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'10 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            }
        ],
        editions:[
            {
                img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
                type:'BASE GAME',
                dis:'50%',
                price:'39.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
            {
                img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
                type:'BASE GAME',
                dis:'50%',
                price:'39.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },                {
                img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-s3-2560x1440-89aebf7caf01.jpg?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive, and reshape the world. Your choices matter.',
                type:'BASE GAME',
                dis:'50%',
                price:'39.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
        ],
        adds:[
            {
                img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human: Rais Bundle',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human: Rais Bundle',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanRaisBundle_Techland_DLC_S1_2560x1440-9fe212588008f5a1380fe4bd9ad11a2c?h=270&resize=1&w=480',
                name:'Dying Light 2 Stay Human: Rais Bundle',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            
        ],
        game_disc:[
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
    
        ]  
    },
    {
            name:'dishonored2',
            logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
            img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
            ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
            bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
            src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
            srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
            slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
            theme_color:'#fcfcfc',
            price:'59.99',
            dis:null,
            oldprice:null,
            rate:5.0,
            dev:'Arkane Studios',
            pub:'Bethesda Softworks',
            rdate:"11/03/22",
            indate:"11/11/6",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            col:['top sellers','Top Upcoming Wishlisted'],
            imgs:[
                [
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-01-1920x1080-5c74cbef0624.jpg",
                    num:1},
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-02-1920x1080-25fefb4a6552.jpg",
                    num:2},                   
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-03-1920x1080-32582ae0006a.jpg",
                    num:3},                    
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-04-1920x1080-bc819362994e.jpg",
                    num:4},
                ],
                [
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-05-1920x1080-7c451d72c6e9.jpg",
                    num:5},
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-06-1920x1080-01489eb2a334.jpg",
                    num:6},                   
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-07-1920x1080-dbfb194947c7.jpg",
                    num:7},                    
                    {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-08-1920x1080-c03e76963c67.jpg",
                    num:8},
                ],
                [

                ],
            ],
            achievements:[
                {
                    name:'Anto the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'19 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Virst Shot',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                    xp:'102 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.2% of players unlock'
                },
                {
                    name:'Cnto the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.3% of players unlock'
                },
                {
                    name:'Bnto the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'3 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.4% of players unlock'
                },
                {
                    name:'Ento the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'1 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.15% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'28 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'1.1% of players unlock'
                },
                {
                    name:'First Shot',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                    xp:'30 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'2.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'4 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.21% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'45 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'52 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'First Shot',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                    xp:'10 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                }
            ],
            editions:[
                {
                    img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                    name:'Dishonored definitive edition',
                    text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                    type:'BASE GAME',
                    dis:'50%',
                    price:'59.99',
                    oldprice:'59.99',
                    date:'Sale ends 2/16/2023 at 7:00 PM'
                },
                {
                    img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                    name:'Dishonored definitive edition',
                    text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                    type:'BASE GAME',
                    dis:'50%',
                    price:'59.99',
                    oldprice:'59.99',
                    date:'Sale ends 2/16/2023 at 7:00 PM'
                },
            ],
            adds:[
                {   mainname:"dishonored2",
                    gener:['fps','ac','adv'],
                    features:['sp','cp'],
                    img:'https://cdn.akamai.steamstatic.com/steam/apps/614570/capsule_616x353.jpg?t=1603891882',
                    logoimg:'https://m.media-amazon.com/images/M/MV5BMDI2YThmNjktYjczNy00ZWNkLWE5ODEtZjhjMGExZGFiNTUyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
                    name:'Dishonored  death of the outsider',
                    text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                    type:'Add-on',
                    dis:null,
                    price:'2.39',
                    oldprice:null,
                    date:null,
                    inw:false,
                    ro:false,
                },                
            ],
            game_disc:[
                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                    title:'This game has Inclusive',
                    text:'Character Customization'
                },
                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                    title:'This game has',
                    text:'Great Boss Battles'
                },
                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
                    title:'This game is',
                    text:'Extremely Fun'
                },
            ]  
    },
    {
            name:'farcry6',
            logoimg:'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=480&quality=medium&resize=1&w=360',
            img:'https://cdn2.unrealengine.com/fc6-logo-400x150-7808789f6a13.png?h=270&quality=medium&resize=1&w=480',
            ach_img:'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=480&quality=medium&resize=1&w=360',
            bottom_img:'https://cdn2.unrealengine.com/fc6-epic-banner-accolade-1200x200-uk-1200x200-11fcee6eb0a8.jpg',
            src:'https://images3.alphacoders.com/108/thumb-1920-1087064.jpg',
            srcm:"https://images3.alphacoders.com/108/thumb-1920-1087064.jpg",
            slide_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/FC6_Logo.png/1200px-FC6_Logo.png",
            theme_color:'#2047d4',
            price:'59.99',
            dis:null,
            oldprice:null,
            rate:4.4,
            dev:'Ubisoft Toronto',
            pub:'Ubisoft',
            rdate:"11/29/22",
            indate:"10/07/21",
            col:[],
            imgs:[
                [
                    {img:"https://assets2.rockpapershotgun.com/far-cry-6-exploding-car.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/far-cry-6-exploding-car.jpg",
                    num:1},
                    {img:"https://gamingbolt.com/wp-content/uploads/2021/05/far-cry-6-image-6.jpg",
                    num:2},                   
                    {img:"https://cdn.realsport101.com/images/ncavvykf/realsport-production/e61f5749d546e5a473b670dec828a3c92fd46236-1280x720.png?rect=0,0,1279,720&w=700&h=394&dpr=2",
                    num:3},                    
                    {img:"https://gamingbolt.com/wp-content/uploads/2021/05/far-cry-6-image-9.jpg",
                    num:4},
                ],
                [
                    {img:"https://assets2.rockpapershotgun.com/far-cry-6-low.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/far-cry-6-low.jpg",
                    num:5},
                   
                ],
                [

                ],
            ],
            achievements:[
                {
                    name:'Anto the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'19 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Virst Shot',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                    xp:'102 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.2% of players unlock'
                },
                {
                    name:'Cnto the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.3% of players unlock'
                },
                {
                    name:'Bnto the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'3 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.4% of players unlock'
                },
                {
                    name:'Ento the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'1 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.15% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'28 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'1.1% of players unlock'
                },
                {
                    name:'First Shot',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                    xp:'30 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'2.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'4 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.21% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'45 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'52 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'First Shot',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                    xp:'10 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                },
                {
                    name:'Into the Unknown',
                    img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                    xp:'5 XP',
                    text:'Help 50 survivors in Encounters.',
                    unrate:'0.1% of players unlock'
                }
            ],
            editions:[
                {
                    img:'https://cdn2.unrealengine.com/fct-storelandscape-2560x1440-2560x1440-4a8806fd2fe4.jpg?h=270&quality=medium&resize=1&w=480',
                    name:'free trial',
                    type:'BASE GAME',
                    dis:'50%',
                    price:'0.00',
                },
                {
                    img:'https://cdn2.unrealengine.com/fct-storelandscape-2560x1440-2560x1440-4a8806fd2fe4.jpg?h=270&quality=medium&resize=1&w=480',
                    name:'free trial',
                    type:'BASE GAME',
                    dis:'50%',
                    price:'0.00',
                },
            ],
            adds:[
                {
                    img:'https://cdn1.epicgames.com/offer/b4565296c22549e4830c13bc7506642d/FCT_UCS27871_StoreLandscape_2560x1440_2560x1440-8225af33d52350da912fb9800d913655?h=270&quality=medium&resize=1&w=480',
                    mainname:'farcry6',
                    name:'Far Cry® 6: Lost Between Worlds',
                    logoimg:'https://cdn1.epicgames.com/offer/b4565296c22549e4830c13bc7506642d/FCT_UCS27219_StorePortrait_1200x1600_1200x1600-8f74ddf5a44ffdddf9eab4a0dd5d93ba?h=480&quality=medium&resize=1&w=360',
                    text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                    type:'ADD-ON',
                    dis:'50%',
                    price:'9.99',
                    oldprice:'19.99',
                    date:null
                },
                {
                    img:'https://cdn1.epicgames.com/offer/b4565296c22549e4830c13bc7506642d/FCT_UCS27219_StoreLandscape_2560x1440_2560x1440-2f595a4d2d9040fd15b9fca01b40d920?h=270&quality=medium&resize=1&w=480',
                    mainname:'farcry6',
                    name:'Far Cry® 6 Game of the Year Upgrade Pass',
                    logoimg:'https://cdn1.epicgames.com/offer/b4565296c22549e4830c13bc7506642d/FCT_UCS27871_StorePortrait_1200x1600_1200x1600-7970a39393df5b54845a40c5bc7f1789?h=480&quality=medium&resize=1&w=360',
                    text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                    type:'ADD-ON',
                    dis:'60%',
                    price:'23.99',
                    oldprice:'59.99',
                    date:null
                }
                
            ],
            game_disc:[
                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f4dd.svg',
                    title:'This game has ',
                    text:'Amazing Storytelling'
                },
                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                    title:'This game is',
                    text:'Great for Beginners'
                },
                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
                    title:'This game is',
                    text:'Extremely Fun'
                },
                                {
                    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f6c1.svg',
                    title:'This game is',
                    text:'Relaxing'
                },
            ]  
    },
    {
        name:'heart',
        logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
        src:'https://cdn2.unrealengine.com/egs-wild-hearts-carousel-desktop-1248x702-5426345bf742.jpg?h=720&quality=medium&resize=1&w=1280',
        srcm:"https://cdn2.unrealengine.com/egs-wild-hearts-carousel-desktop-1248x702-5426345bf742.jpg?h=720&quality=medium&resize=1&w=1280",
        slide_img:"data:image/png;base64,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",
        theme_color:'#fcfcfc',
        price:'59.99',
        dis:null,
        oldprice:null,
        rate:5.0,
        dev:'Arkane Studios',
        pub:'Bethesda Softworks',
        rdate:"11/03/22",
        indate:"11/11/6",
        col:[],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-01-1920x1080-5c74cbef0624.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-02-1920x1080-25fefb4a6552.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-03-1920x1080-32582ae0006a.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-04-1920x1080-bc819362994e.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-05-1920x1080-7c451d72c6e9.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-06-1920x1080-01489eb2a334.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-07-1920x1080-dbfb194947c7.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-08-1920x1080-c03e76963c67.jpg",
                num:8},
            ],
            [

            ],
        ],
        achievements:[
            {
                name:'Anto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'19 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Virst Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'102 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.2% of players unlock'
            },
            {
                name:'Cnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.3% of players unlock'
            },
            {
                name:'Bnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'3 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.4% of players unlock'
            },
            {
                name:'Ento the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'1 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.15% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'28 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'1.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'30 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'2.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'4 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.21% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'45 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'52 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'10 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            }
        ],
        editions:[
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
        ],
        adds:[
            {
                img:'https://cdn.akamai.steamstatic.com/steam/apps/614570/capsule_616x353.jpg?t=1603891882',
                name:'Dishonored  death of the outsider',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn.akamai.steamstatic.com/steam/apps/614570/capsule_616x353.jpg?t=1603891882',
                name:'Dishonored  death of the outsider',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn.akamai.steamstatic.com/steam/apps/614570/capsule_616x353.jpg?t=1603891882',
                name:'Dishonored  death of the outsider',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'2.39',
                oldprice:null,
                date:null
            },
            
        ],
        game_disc:[
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                title:'This game has',
                text:'Great Boss Battles'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
                title:'This game is',
                text:'Extremely Fun'
            },
        ]  
    },
    {
        name:'fortnite',
        logoimg:'https://cdn1.epicgames.com/offer/fn/24BR_S24_EGS_Launcher_Blade_1200x1600_1200x1600-0f74a2c818a2b043fa684875eca49784?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn2.unrealengine.com/24br-s24-egs-launcher-pdp-2560x1440-2560x1440-15633fe086b0.jpg',
        bottom_img:'https://cdn2.unrealengine.com/24br-s24-egs-launcher-pdp-2560x1440-2560x1440-15633fe086b0.jpg',
        src:'https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280',
        srcm:"https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280",
        slide_img:"https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480",
        theme_color:'#2047d4',
        price:'free',
        dis:null,
        oldprice:null,
        rate:1,
        dev:'Epic Games',
        pub:'Epic Games',
        rdate:"07/21/17",
        indate:"07/21/17",
        col:[],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/en-24br-zerobuild-egs-landscape-2560x1440-2560x1440-ca0c0d6529a4.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/01-still001-3840x2160-3840x2160-cd26b0f5797e.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/02-gameplaystill004-3840x2160-3840x2160-a575c0461586.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/03-gameplaystill001-3840x2160-3840x2160-07c43ab78e89.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/04-gameplaystill007-3840x2160-3840x2160-16470e41bf96.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/05-cinematicstill003-3840x2160-3840x2160-a38cba46be60.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/06-still006-3840x2160-3840x2160-cad95df78da0.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/07-still008-3840x2160-3840x2160-bf5fb06b852e.jpg",
                num:8},
            ],
            [
              {img:'https://cdn2.unrealengine.com/08-gameplaystill014-3840x2160-3840x2160-168144c5e92e.jpg',
               num:9
            },
            {img:'https://cdn2.unrealengine.com/09-gameplaystill017-3840x2160-3840x2160-a2ed24d81fe5.jpg',
               num:10
            },
            {img:'https://cdn2.unrealengine.com/10-cinematicstill005-3840x2160-3840x2160-a0f7fc938c38.jpg',
               num:11
            },
            ],
        ],
        achievements:[
            {
                name:'Anto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'19 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Virst Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'102 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.2% of players unlock'
            },
            {
                name:'Cnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.3% of players unlock'
            },
            {
                name:'Bnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'3 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.4% of players unlock'
            },
            {
                name:'Ento the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'1 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.15% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'28 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'1.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'30 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'2.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'4 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.21% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'45 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'52 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'10 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            }
        ],
        editions:[
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
        ],
        adds:[
            {
                img:'https://cdn1.epicgames.com/offer/fn/EN_22BR_MetalcoreMinaPack_EGS_2560x1440_2560x1440-d36c64eb23926f5afd06d7d307f11975?h=270&quality=medium&resize=1&w=480',
                mainname:'fortnite',
                logoimg:'https://cdn1.epicgames.com/offer/fn/EN_22BR_MetalcoreMinaPack_EGS_1200x1600_1200x1600-f1db6ccbde75e732981c1c43d023411b?h=480&quality=medium&resize=1&w=360',
                name:'Metalcore Mina Pack',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'ADD-ON',
                dis:null,
                price:'3.99',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn1.epicgames.com/fn/offer/EGS_1000VBucks_1920x1080-1920x1080-874f1246563fa2e19689c280b78f9ac3ca04eadf.png?h=270&quality=medium&resize=1&w=480',
                mainname:'fortnite',
                name:'1,000 V-Bucks',
                logoimg:'https://cdn1.epicgames.com/offer/fn/EGS_VBucks_1000_1200x1600-c8a13f66ba88744d5216f884855e2a4d?h=480&quality=medium&resize=1&w=360',
                text:'Buy 1,000 Fortnite V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale and Creative modes. You can purchase new customization items like Outfits, Gliders',
                type:'ADD-ON',
                dis:null,
                price:'7.99',
                oldprice:null,
                date:null
            },
            {
                img:'https://cdn1.epicgames.com/fn/offer/EGS_1000VBucks_1920x1080-1920x1080-874f1246563fa2e19689c280b78f9ac3ca04eadf.png?h=270&quality=medium&resize=1&w=480',
                mainname:'fortnite',
                name:'2,000 V-Bucks',
                logoimg:'https://cdn1.epicgames.com/offer/fn/EGS_VBucks_1000_1200x1600-c8a13f66ba88744d5216f884855e2a4d?h=480&quality=medium&resize=1&w=360',
                text:'Buy 2,000 Fortnite V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale and Creative modes. You can purchase new customization items like Outfits, Gliders',
                type:'ADD-ON',
                dis:null,
                price:'7.99',
                oldprice:null,
                date:null
            }
        ],
        game_disc:[
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                title:'This game has',
                text:'Great Boss Battles'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
                title:'This game is',
                text:'Extremely Fun'
            },
        ]  
    },
    {
        name:'Hogwarts legacy',
        logoimg:'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-ic1-400x400-d22498d075da.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e',
        src:'https://cdn2.unrealengine.com/egs-hogwarts-legacy-carousel-desktop-v3-1248x702-d5639baf4870.jpg?h=720&quality=medium&resize=1&w=1280',
        srcm:"https://images8.alphacoders.com/118/1186452.jpg",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/a/ae/Hogwarts_Legacy_Logo.png",
        theme_color:'#2047d4',
        price:'59.99',
        dis:null,
        oldprice:null,
        rate:4.8,
        dev:'Avalanche Software',
        pub:'Warner Bros. Games',
        rdate:"02/10/23",
        indate:"11/11/6",
        gener:['fps','ac','adv'],
        features:['sp','cp'],
        col:['top sellers','Top Upcoming Wishlisted'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-00-1920x1080-6ae741e030bb.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-01-1920x1080-abc96a86b4f0.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-02-1920x1080-bfdc2c908ac6.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-03-1920x1080-112c79719791.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-hogwartslegacy-avalanchesoftware-g1a-04-1920x1080-52b6c523cebc.jpg",
                num:5},
            ],
            [

            ],
        ],
        achievements:[
            {
                name:'Anto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'19 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Virst Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'102 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.2% of players unlock'
            },
            {
                name:'Cnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.3% of players unlock'
            },
            {
                name:'Bnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'3 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.4% of players unlock'
            },
            {
                name:'Ento the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'1 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.15% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'28 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'1.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'30 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'2.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'4 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.21% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'45 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'52 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'10 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            }
        ],
        editions:[
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
        ],
        adds:[
            {   mainname:"Hogwarts legacy",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacyDarkArtsPack_AvalancheSoftware_DLC_S1_2560x1440-cdfe25809d41ab8c76cd4457437b9c6f?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacyDarkArtsPack_AvalancheSoftware_DLC_S2_1200x1600-4e3b8069cb311cd188d9693d040922a2?h=480&quality=medium&resize=1&w=360',
            name:'Hogwarts Legacy: Dark Arts Pack',
            text:'Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.',
            type:'Add-on',
            dis:null,
            price:'19.99',
            oldprice:null,
            date:null,
            inw:false,
            ro:false,
        }
        ],
        game_disc:[
           game_discs.get('cc'),
           game_discs.get('gbb'),
           game_discs.get('as'),
           game_discs.get('ef'),
           game_discs.get('r'),
           game_discs.get('ac'),
        ]  
    },
    {
        name:'distiny 2',
        logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2Lightfall_Bungie_AddOn_S2_1200x1600-3a820ab4d96977371ca4e152059efa8c?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
        src:"https://cdn2.unrealengine.com/egs-destiny-2-lightfall-carousel-desktop-1280x702-e2432bee71b8.jpg?h=720&quality=medium&resize=1&w=1280",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#fcfcfc',
        price:0,    
        dis:null,
        oldprice:null,
        rate:5.0,
        dev:'Arkane Studios',
        pub:'Bethesda Softworks',
        rdate:"11/03/22",
        indate:"11/11/6",
        gener:['fps','ac','adv','rpg','ow'],
        features:['sp','cp'],
        col:['top sellers','Top Upcoming Wishlisted'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-01-1920x1080-5c74cbef0624.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-02-1920x1080-25fefb4a6552.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-03-1920x1080-32582ae0006a.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-04-1920x1080-bc819362994e.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-05-1920x1080-7c451d72c6e9.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-06-1920x1080-01489eb2a334.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-07-1920x1080-dbfb194947c7.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-g1a-08-1920x1080-c03e76963c67.jpg",
                num:8},
            ],
            [

            ],
        ],
        achievements:[
            {
                name:'Anto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'19 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Virst Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'102 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.2% of players unlock'
            },
            {
                name:'Cnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.3% of players unlock'
            },
            {
                name:'Bnto the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'3 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.4% of players unlock'
            },
            {
                name:'Ento the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'1 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.15% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'28 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'1.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'30 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'2.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'4 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.21% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'45 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'52 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'First Shot',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/b477fd8abd92f1d2e8b04173dbb48e26',
                xp:'10 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            },
            {
                name:'Into the Unknown',
                img:'https://shared-static-prod.epicgames.com/epic-achievements/f08f26f3509c473f8e074f7532798b92/87b7846d2eba4bc49eead0854323aba8/icons/7b113382f470d9b7f043bf5a570f6100',
                xp:'5 XP',
                text:'Help 50 survivors in Encounters.',
                unrate:'0.1% of players unlock'
            }
        ],
        editions:[
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
            {
                img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S3_2560x1440-172cba030b0261550b46b6c1224330bf',
                name:'Dishonored definitive edition',
                text:'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements....',
                type:'BASE GAME',
                dis:'50%',
                price:'59.99',
                oldprice:'59.99',
                date:'Sale ends 2/16/2023 at 7:00 PM'
            },
        ],
        adds:[
            {   mainname:"distiny 2",
                gener:['fps','ac','adv'],
                features:['sp','cp'],
                img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LightfallAnnualPass_Bungie_AddOn_S1_2560x1440-c119b2a5b37129d1241309c707a511b3?h=270&quality=medium&resize=1&w=480',
                logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LightfallAnnualPass_Bungie_AddOn_S2_1200x1600-3be933afa71298936dacbae79e09c342?h=480&quality=medium&resize=1&w=360',
                name:'Destiny 2: Lightfall + Annual Pass',
                text:'Purchase now through 17:00 UTC on March 14th to instantly unlock a new Exotic. Lightfall + Annual Pass includes access to a full year of content and more.',
                type:'Add-on',
                dis:null,
                price:'99.99',
                oldprice:null,
                date:null,
                inw:false,
                ro:false,
            },
            {   mainname:"distiny 2",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LightfallAnnualPass_Bungie_AddOn_S1_2560x1440-c119b2a5b37129d1241309c707a511b3?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2BeyondLight_Bungie_AddOn_S2_1200x1600-a5f8ef083d8b51a66d2c0c22cbb67843?h=480&quality=medium&resize=1&w=360',
            name:'Destiny 2: Lightfall + Annual Pass',
            text:'Purchase now through 17:00 UTC on March 14th to instantly unlock a new Exotic. Lightfall + Annual Pass includes access to a full year of content and more.',
            type:'Add-on',
            dis:null,
            price:'99.99',
            oldprice:null,
            date:null,
            inw:false,
            ro:false,
           },
           {   mainname:"distiny 2",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LightfallAnnualPass_Bungie_AddOn_S1_2560x1440-c119b2a5b37129d1241309c707a511b3?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2Bungie30thAnniversaryPack_Bungie_AddOn_S2_1200x1600-b3a839aa9a80c15f609dab688e21190c?h=480&quality=medium&resize=1&w=360',
            name:'Destiny 2: Lightfall + Annual Pass',
            text:'Purchase now through 17:00 UTC on March 14th to instantly unlock a new Exotic. Lightfall + Annual Pass includes access to a full year of content and more.',
            type:'Add-on',
            dis:null,
            price:'99.99',
            oldprice:null,
            date:null,
            inw:false,
            ro:false,
        },
       {   mainname:"distiny 2",
                gener:['fps','ac','adv'],
                features:['sp','cp'],
                img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LightfallAnnualPass_Bungie_AddOn_S1_2560x1440-c119b2a5b37129d1241309c707a511b3?h=270&quality=medium&resize=1&w=480',
                logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LightfallAnnualPass_Bungie_AddOn_S2_1200x1600-3be933afa71298936dacbae79e09c342?h=480&quality=medium&resize=1&w=360',
                name:'Destiny 2: Lightfall + Annual Pass',
                text:'Purchase now through 17:00 UTC on March 14th to instantly unlock a new Exotic. Lightfall + Annual Pass includes access to a full year of content and more.',
                type:'Add-on',
                dis:null,
                price:'99.99',
                oldprice:null,
                date:null,
                inw:false,
                ro:false,
            },                
        ],
        game_disc:[
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3a8.svg',
                title:'This game has Inclusive',
                text:'Character Customization'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f996.svg',
                title:'This game has',
                text:'Great Boss Battles'
            },
            {
                img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f60d.svg',
                title:'This game is',
                text:'Extremely Fun'
            },
        ]  
},
]

let event = ['2kpub','febs','thq']
let geners = ['fps','adv','ac','ac-adv','rpg','ow']
let price_filt = ['free',"un-10","un-20","un-30","up-14",'dis']
let new_old = [true,false]

for(let game of games_list){
    games.set(game.name,{
        name:game.name,
        type:'basegame',
        dev:game.dev,
        pub:game.pub,
        rdate:game.rdate,
        indate:game.indate,
        price:game.price,
        img:game.img,
        dis:game.dis,
        logoimg:game.logoimg,
        ach_img:game.ach_img,
        bottom_img:game.bottom_img,
        theme_color:game.theme_color,
        oldprice:game.oldprice,
        rate:game.rate,
        imgs:game.imgs,
        achievements:game.achievements,
        editions:game.editions,
        adds:game.adds,
        game_disc:game.game_disc,
        inw:false,
        ro:false,
        src:game.src,
        srcm:game.srcm,
        slide_img:game.slide_img,
        last:game.last,
        date:game.date,
        col:game.col,
        event:event[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
        gener:game.gener||[geners[Math.floor(Math.random() * (3 - 0 + 1)) + 0]],
        features:game.features||['mp','cs'],
        new:new_old[Math.floor(Math.random() * (1 - 0 + 1)) + 0]
    })
}



export default games;
