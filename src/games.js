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
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f423.svg',
    title:'This game is',
    text:'Great for Beginners'
})


game_discs.set('ac',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f3ad.svg',
    title:'This game has',
    text:'Amazing Characters'
})

game_discs.set('quc',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f5b1.svg',
    title:'This game has',
    text:'Quickly Understood Controls'
})

game_discs.set('hr',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f4e2.svg',
    title:'This game is',
    text:'Highly Recommended'
})

game_discs.set('chc',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/2694.svg',
    title:'This game has',
    text:'Challenging Combat'
})

game_discs.set('dc',                {
    img:'https://cdn2.epicgames.com/static/fonts/joypixel/1f310.svg',
    title:'This game has',
    text:'Diverse Characters'
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
    gener:['fps','ac'],
    features:['sp','cp','mp'],
    col:['top sellers',''],
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
        ach_img:'https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g2-00-3840x2160-e2632aa5352f.jpg',
        theme_color:'#0062ff',
        price:'39.99',
        oldprice:'59.99',
        dis:'20%',
        dev:'Naughty Dog LLC',
        pub:'PlayStation PC LLC',
        rdate:"03/28/23",
        indate:"11/11/6",
        gener:['fps','adv'],
        features:['sp','cp'],
        rate:4.9,
        date:'Avalibale 2023',
        col:['top sellers',''],
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
                img:'https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_UpgradetoDigitalDeluxeEdition_NaughtyDogLLC_AddOn_S1_2560x1440-d0195796f9b15e41ee69393bb95c4edc?h=270&quality=medium&resize=1&w=480',
                mainname:'The Last of Us Part I',
                logoimg:'https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_UpgradetoDigitalDeluxeEdition_NaughtyDogLLC_AddOn_S2_1200x1600-0ff89dae27795b746ec117b8b7956b75?h=480&quality=medium&resize=1&w=360',
                name:'The Last of Us™ Part I – Upgrade to Digital Deluxe Edition',
                text:'Existing The Last of Us™ Part I Digital Standard Edition owners can upgrade to the Digital Deluxe Edition for an additional cost.',
                type:'ADD-ON',
                dis:null,
                price:'10',
                oldprice:null,
                date:null
            },
         
        ],
        game_disc:[
           game_discs.get('gfb'),
           game_discs.get('ac'),
           game_discs.get('r'),
           game_discs.get('as'),
           game_discs.get('ef'),
        ]
    },
    {
        name:'spiderman Remastered',
        logoimg:'https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-ic1-400x400-783ee335e810.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808?h=270&quality=medium&resize=1&w=480',
        theme_color:'#0062ff',
        price:'40.19',
        dis:"33%",
        oldprice:'59.99',
        rate:4.9,
        dev:'Insomniac Games, Nixxes Software',
        pub:'PlayStation PC LLC',
        rdate:"08/12/22",
        indate:"11/11/6",
        gener:['ac'],
        features:['sp','cp','mp'],
        col:['Most Played',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-00-1920x1080-25b4862bff3b.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-01-1920x1080-89160030c92b.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-04-1920x1080-e5729d1cc34f.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-05-1920x1080-d101cafea3fe.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-06-1920x1080-226a78cecc59.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-07-1920x1080-c845a2ff7d72.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-09-1920x1080-7ff7a0b65a3d.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-10-1920x1080-015932125397.jpg",
                num:8},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g1a-11-1920x1080-be5f97e75677.jpg",
                num:9},
             
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
        game_disc:[
            game_discs.get('quc'),
            game_discs.get('hr'),
            game_discs.get('r'),
            game_discs.get('ef'),

        ]  
    },
    {
            name:'dishonored2',
            logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
            img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
            ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
            bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
            src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
            srcm:"https://dokumen.pub/img/dishonored-the-roleplaying-game-core-rulebook-9781912743216.jpg",
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
            gener:['fps','adv'],
            features:['sp','cp'],
            col:['top sellers',''],
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
            ach_img:'https://cdn2.unrealengine.com/tetra-preorder-standard-edition-epic-store-landscape-2560x1440-2560x1440-430970417.jpg',
            bottom_img:'https://cdn2.unrealengine.com/fc6-epic-banner-accolade-1200x200-uk-1200x200-11fcee6eb0a8.jpg',
            src:'https://images3.alphacoders.com/108/thumb-1920-1087064.jpg',
            srcm:"https://assets-prd.ignimgs.com/2020/07/10/far-cry-6-placeholder-1594397352824.jpg",
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
            gener:['fps','ac'],
            col:['Most Played','mp'],
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
        logoimg:'https://cdn1.epicgames.com/offer/4cbfe407ada24702a556b6e4d28a8800/EGS_WILDHEARTSStandardEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-398fdb8dbc918051f99347ebe0335973?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-wildhearts-koeitecmogamescoltd-ic1-400x400-c3e4c7cf64f4.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn2.unrealengine.com/egs-wildhearts-koeitecmogamescoltd-s1-2560x1440-5c8f24919516.jpg?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn2.unrealengine.com/wh-launch-infographic-epic-en-1920x1080-4e17b5ec0c33.jpg',
        src:'https://cdn2.unrealengine.com/egs-wild-hearts-carousel-desktop-1248x702-5426345bf742.jpg?h=720&quality=medium&resize=1&w=1280',
        srcm:"https://store-images.s-microsoft.com/image/apps.15566.14419340246812518.6ed7971c-0390-4d30-8373-3724d60e305e.18f702a4-ab4c-4faf-92ac-b940ef5561e2?mode=scale&q=90&h=225&w=150",
        slide_img:"https://cdn2.unrealengine.com/egs-wildhearts-koeitecmogamescoltd-ic1-400x400-c3e4c7cf64f4.png?h=270&quality=medium&resize=1&w=480",
        theme_color:'#fcfcfc',
        price:'69.99',
        dis:null,
        oldprice:null,
        rate:3.5,
        dev:'KOEI TECMO GAMES CO., LTD',
        pub:'Electronic Arts',
        rdate:"11/03/22",
        indate:"02/16/23",
        gener:['fps','adv'],
        col:['Most Played',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-01-1920x1080-ebd1e3b7a39f.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-02-1920x1080-a73a508170e0.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-03-1920x1080-92497f7b92bd.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-05-1920x1080-017ec1e2c529.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-04-1920x1080-48d1cb074937.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-06-1920x1080-3a3a8f97a3e1.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-07-1920x1080-32b439e3e013.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-08-1920x1080-9434df5fc697.jpg",
                num:8},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-09-1920x1080-41fd64cf3d20.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/egs-wildheartsstandardedition-koeitecmogamescoltd-g1a-10-1920x1080-ced03d2c067c.jpg",
                num:8},
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
        game_disc:[
           game_discs.get('r'),
           game_discs.get('ac'),
           game_discs.get('as'),
           game_discs.get('gbb'),

        ]  
    },
    {
        name:'fortnite',
        logoimg:'https://cdn1.epicgames.com/offer/fn/24BR_S24_EGS_Launcher_Blade_1200x1600_1200x1600-0f74a2c818a2b043fa684875eca49784?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn2.unrealengine.com/24br-s24-egs-launcher-pdp-2560x1440-2560x1440-15633fe086b0.jpg',
        bottom_img:'https://cdn2.unrealengine.com/24br-s24-egs-launcher-pdp-2560x1440-2560x1440-15633fe086b0.jpg',
        src:'https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-desktop-1248x702-f69aa15e3d14.jpg?h=720&quality=medium&resize=1&w=1280',
        srcm:"https://cdn2.unrealengine.com/egs-fortnite-ch4-s2-carousel-thumb-1200x1600-ae771a0f5dea.jpg?h=128&quality=medium&resize=1&w=96",
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
        gener:['fps','ac'],
        col:['Most Played',''],
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
        srcm:"https://cdn2.unrealengine.com/egs-hogwarts-legacy-carousel-thumb-1200x1600-a012b7811415.jpg?h=128&quality=medium&resize=1&w=96",
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
        gener:['adv'],
        features:['sp','cp','mp'],
        col:['top sellers',''],
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
        img:'https://cdn2.unrealengine.com/en-bungie-destiny2-ic1-400x400-400x400-428671b4082f.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/FR_Bungie_Destiny2_S1_2560x1440_2560x1440-eb02e9edc6111b582ebbacbaae6482ed',
        src:"https://cdn2.unrealengine.com/egs-destiny-2-lightfall-carousel-desktop-1280x702-e2432bee71b8.jpg?h=720&quality=medium&resize=1&w=1280",
        srcm:"https://upload.wikimedia.org/wikipedia/en/0/06/Destiny_XBO.jpg",
        slide_img:"https://cdn2.unrealengine.com/en-bungie-destiny2-ic1-400x400-400x400-428671b4082f.png?h=270&quality=medium&resize=1&w=480",
        theme_color:'#fcfcfc',
        price:'free',    
        dis:null,
        oldprice:null,
        rate:4.5,
        dev:'Bungie',
        pub:'Bungie',
        rdate:"08/23/22",
        indate:"10/24/17",
        gener:['ac','rpg','ow'],
        features:['sp','cp','mp'],
        col:['top sellers',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/screenshot-01-1920x1080-883ead3f2627.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/screenshot-02-1920x1080-51c75098fdac.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/screenshot-03-1920x1080-ba70b10165f1.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/screenshot-04-1920x1080-a67d4b551359.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/screenshot-05-1920x1080-a0df39f1877c.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/screenshot-06-1920x1080-0d94d07aafde.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/screenshot-07-1920x1080-b034d4757ff6.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/screenshot-08-1920x1080-8cc98892af49.jpg",
                num:8},
            ],
            [
                {
                    img:'https://cdn2.unrealengine.com/screenshot-09-1920x1080-bc164c69b06c.jpg',
                    num:9
                },
                {
                    img:'https://cdn2.unrealengine.com/screenshot-10-1920x1080-3a0da41aaada.jpg',
                    num:10
                }

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
                gener:['ac','adv'],
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
            gener:['ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2LegacyCollection2023_Bungie_Bundles_S1_2560x1440-c12dafc5484d838c29532a5e8c87fd74?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2BeyondLight_Bungie_AddOn_S2_1200x1600-a5f8ef083d8b51a66d2c0c22cbb67843?h=480&quality=medium&resize=1&w=360',
            name:'Destiny 2: Legacy Collection (2023)',
            text:'Purchase now through 17:00 UTC on March 14th to instantly unlock a new Exotic. Lightfall + Annual Pass includes access to a full year of content and more.',
            type:'Add-on',
            dis:null,
            price:'59.99',
            oldprice:null,
            date:null,
            inw:false,
            ro:false,
           },
           {   mainname:"distiny 2",
            gener:['ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_S20_Silver_Bundle_S3_2560x1440_2560x1440-f3777a1754c5d9bef617df3107289c19?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2Bungie30thAnniversaryPack_Bungie_AddOn_S2_1200x1600-b3a839aa9a80c15f609dab688e21190c?h=480&quality=medium&resize=1&w=360',
            name:'Destiny 2: Season of Defiance Silver Bundle',
            text:'Purchase now through 17:00 UTC on March 14th to instantly unlock a new Exotic. Lightfall + Annual Pass includes access to a full year of content and more.',
            type:'Add-on',
            dis:null,
            price:'14.99',
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
        name:'control',
        logoimg:'https://cdn1.epicgames.com/offer/calluna/Control_Portrait_Storefront_1200X1600_1200x1600-456c920cae7a0aa9b36670cd5e1237a1?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcontrol%2Fhome%2FCONTROL_logo_black_with_trademark_RGB-2339x431-bb9ba500a825fd85bb075403fc5068ad162c95f3.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/calluna/Control_Landscape_Image_2560X1440_2560x1440-ec7b2eb03bb70f61d17ed01fa76d95a6?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FCONTROL_Gallery_WorldTrailer_piperoom-3840x2160-26d2a44d282344cc0fc40239e5da055757b8a807.jpg?h=720&quality=medium&resize=1&w=1280',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#ed0000',
        price:'free',
        dis:'100%',
        oldprice:'31.99',
        rate:4.6,
        dev:'Remedy Entertainment',
        pub:'505 Games',
        rdate:"08/27/19",
        indate:"08/27/19",
        gener:[,'adv'],
        features:['sp','cp','mp'],
        col:['Most Played',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fcontrol%2Fhome%2FControl_Awards-1920x1080-1920x1080-ec09bae0882a0e71f3f536a8fea401fc12da67e1.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FControl_Carousel_Screenshot1-2580x1450-a4c0cb5068ce902b95bf1370b3d1b7e64f6af5f4.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FControl_Carousel_Screenshot2-2580x1450-3b09ba8e779ef14ea6f52248df15b74686102ccf.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FControl_Carousel_Screenshot3-2580x1450-2ce26d66cfc08f27c6e2d9db06dce0461edd50b8.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FControl_Carousel_Screenshot4-2580x1450-6afcd0611d2b60c8a2e41ee9e86bc2abebd3504d.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FControl_Carousel_Screenshot5-2580x1450-60e2762f91aaaa121cabf0cdf51b465228d0759b.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcalluna%2Fhome%2FControl_Carousel_Screenshot6-2580x1450-75b44576acc46953f77fe95e53f069e791cc0068.jpg",
                num:7},                    
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
            {   mainname:"control",
                gener:['fps','ac','adv'],
                features:['sp','cp'],
                img:'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fcontrol%2Fseason-pass%2FSeason-Pass_LandscapeImage_2560x1440-2560x1440-a0d7f4042c2f4c424094c90f4326d2bb4fb567a2.jpg?h=270&quality=medium&resize=1&w=480',
                logoimg:'https://cdn1.epicgames.com/calluna/offer/AWE_Tall-860x1148-2533e3f639edd227d591b5a1cdd36865.jpg?h=480&quality=medium&resize=1&w=360',
                name:'Control Season Pass',
                text:'Delve deeper into the world of Control by purchasing the Season Pass. Purchase now and receive Expansion 1 "The Foundation" Late summer 2020 you will receive Expansion 2',
                type:'Add-on',
                dis:"60%",
                price:'5.79',
                oldprice:'14.49',
                date:null,
                inw:false,
                ro:false,
            },              
            {   mainname:"control",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fcontrol%2Fthe-foundation%2FFoundation_LandscapeImage_2560x1440-2560x1440-c83b2c41427796a361f9684b46d2bef4a334689c.jpg?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/calluna/offer/Foundation_PortraitImage_860x1148-860x1148-69b77aca2e31879e9a7629ab47d88ac3.jpg?h=480&quality=medium&resize=1&w=360',
            name:'Control Expansion Pack 1 "The Foundation"',
            text:'The Foundation Expansion includes new story content and side missions as well as new weapons and mods inspired by the Oldest Houses mysterious origins',
            type:'Add-on',
            dis:"60%",
            price:'3.99',
            oldprice:'9.99',
            date:null,
            inw:false,
            ro:false,
        },               
        ],
        game_disc:[
        game_discs.get('chc'),
        game_discs.get('dc'),
        game_discs.get('hr'),
        game_discs.get('ef'),
        game_discs.get('as'),
        ]  
    },
    {
        name:'cyberpunk 2077',
        logoimg:'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-ic1-400x400-82b90aa9a275.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#d1022b',
        price:'29.99',
        dis:'50%',
        oldprice:'59.99',
        rate:4.2,
        dev:'CD PROJEKT RED',
        pub:'CD PROJEKT RED',
        rdate:"12/10/20",
        indate:"12/10/20",
        gener:['fps','ac'],
        features:['sp','cp'],
        col:['Top Upcoming Wishlisted',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-04-02-24-22-1920x1080-e44528f4fa16.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-05-02-24-22-1920x1080-4dd0bff6a6c0.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-06-02-24-22-1920x1080-b5a2e4e8e86e.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-07-02-24-22-1920x1080-9da0619a7040.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-09-02-24-22-1920x1080-59e698ae2482.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-10-02-24-22-1920x1080-428a4e04c6e0.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-11-02-24-22-1920x1080-7e8b54fe2fbd.jpg",
                num:7},    
                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-13-02-24-22-1920x1080-dd4dcc601c17.jpg",
                num:8},                
            ],
            [

                {img:"https://cdn2.unrealengine.com/egs-cyberpunk2077-cdprojektred-g1a-14-02-24-22-1920x1080-810476afc100.jpg",
                num:9},
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
        game_disc:[
        game_discs.get('gfb'),
        game_discs.get('gbb'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Red Dead Redemption 2',
        logoimg:'https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_IC1-625x625-38ae1bca6b89370d01ac3ed3a17daf7dd004f9f5.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#ed0000',
        price:'19.79',
        dis:'67%',
        oldprice:'59.99',
        rate:4.2,
        dev:'Rockstar Games',
        pub:'Rockstar Games',
        rdate:"11/05/19",
        gener:[,'adv'],
        features:['sp','cp','mp'],
        col:['Top Upcoming Wishlisted','Top Popular'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg",
                num:1},

            ],
            [
                          
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
        game_disc:[
        game_discs.get('gfb'),
        game_discs.get('gbb'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Borderlands 3',
        logoimg:'https://cdn1.epicgames.com/offer/catnip/EGS_Borderlands3_Takeover_Mobile-560x760-58be14c3e086e3a85bedcc21c08ab5cb-560x760-58be14c3e086e3a85bedcc21c08ab5cbjpg_560x760-58be14c3e086e3a85bedcc21c08ab5cb?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcatnip%2FEGS_2K_OAK_IC1_Logo_Transparent_400x800-800x400-847db268641618b804c2dc3e64f0055387fd10e5.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#e6c41c',
        price:'8.99',
        dis:'85%',
        oldprice:'59.99',
        rate:5,
        dev:'Gearbox Software',
        pub:'Gearbox Software',
        rdate:"09/13/19",
        gener:['fps','ac'],
        features:['sp','cp'],
        col:['Top Upcoming Wishlisted',''],
        imgs:[
            [
                {img:"https://www.techspot.com/articles-info/1912/images/2019-09-15-image.jpg",
                num:1},
                {img:"https://i0.wp.com/dicendpads.com/wp-content/uploads/2019/05/BL3_2K_SS_02_y9042grtyuix.jpg?fit=1920%2C1080&ssl=1",
                num:2},
                {img:"https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/04/29/watch-the-borderlands-3-gameplay-reveal-stream-here_feature.jpg",
                num:3},
                {img:"https://images.hdqwalls.com/download/borderlands-3-game-art-z9-1920x1080.jpg",
                num:4},
            ],
            [
                
                {img:"https://rare-gallery.com/uploads/posts/959463-Borderlands-3-Borderlands-video-games-video-game-art.jpg",
                num:5},
                
            ],
            [


            ],
        ],
        editions:[],
        adds:[
            {   
                mainname:"Borderlands 3",
                gener:['fps','ac','adv'],
                features:['sp','cp'],
                img:'https://cdn1.epicgames.com/catnip/offer/2KGMKT_BL3_ZANE_DOTV_Pack_EPIC_Blog_Landscape_Store_2560x1440-2560x1440-813a46114055562c4421947cea10a088.jpg?h=270&quality=medium&resize=1&w=480',
                logoimg:'https://cdn1.epicgames.com/catnip/offer/2KGMKT_BL3_ZANE_DOTV_Pack_EPIC_Mobile_Store_1200x1600-1200x1600-93a2ff85bc8116ae08ae9816eaee394e.jpg?h=480&quality=medium&resize=1&w=360',
                name:'Borderlands 3: Multiverse Disciples of the Vault Zane Cosmetic Pack ',
                text:'Delve deeper into the world of Control by purchasing the Season Pass. Purchase now and receive Expansion 1 "The Foundation" Late summer 2020 you will receive Expansion 2',
                type:'Add-on',
                dis:"60%",
                price:'5.79',
                oldprice:'14.49',
                date:null,
                inw:false,
                ro:false,
            },              
            {   mainname:"Borderlands 3",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/catnip/offer/2KGMKT_BL3_Amara_DOTV_Pack_EPIC_Blog_Landscape_Store_2560x1440-2560x1440-af1a91d311bfcd1ec4e9ecd64868f8d0.jpg?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/catnip/offer/2KGMKT_BL3_Amara_DOTV_Pack_EPIC_Mobile_Store_1200x1600-1200x1600-92a219267c6301f55670e9972719fe21.jpg?h=480&quality=medium&resize=1&w=360',
            name:'Borderlands 3: Multiverse Disciples of the Vault Amara Cosmetic Pack',
            text:'The Foundation Expansion includes new story content and side missions as well as new weapons and mods inspired by the Oldest Houses mysterious origins',
            type:'Add-on',
            dis:"60%",
            price:'3.99',
            oldprice:'9.99',
            date:null,
            inw:false,
            ro:false,
        },               
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
        game_disc:[
        game_discs.get('gfb'),
        game_discs.get('gbb'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },    
    {
        name:'The Witcher 3',
        logoimg:'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-ic1-400x400-39ecddf1cc77.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#e6c41c',
        price:'14.98',
        dis:'70%',
        oldprice:'49.96',
        rate:5,
        dev:'CD PROJEKT RED',
        pub:'CD PROJEKT RED',
        rdate:"09/13/19",
        gener:['rpg','adv'],
        features:['sp','cp','mp'],
        col:['top sellers','Top Upcoming Wishlisted'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-01-1920x1080-8869fa6cdc96.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-02-1920x1080-1295749a2ef4.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-03-1920x1080-24c8f2997f41.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-04-1920x1080-a76e68321990.jpg",
                num:4},
            ],
            [
                
                {img:"https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-g1a-05-1920x1080-ac4ebacf1833.jpg",
                num:5},
                
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('gfb'),
        game_discs.get('gbb'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Tiny Tina s Wonderlands',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/Daffodil_1P_Awareness_INT_Epic_1200x1600_1200x1600-356dd4965bde4c5dbd1000f9c97ac4b4?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/daffodil-1p-awareness-int-epic-logo-400x400-400x400-d838fc4222b5.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/Daffodil_1P_Awareness_INT_Epic_2560x1440_2560x1440-ba126bdeac3faab0596b7c56e9c09990?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/en-egs-tinytina-breaker-1920x1080-v03-1920x1080-4e9248d0c1fe.jpg',
        theme_color:'#b006d6',
        price:'29.99',
        dis:'50%',
        oldprice:'59.99',
        rate:4.2,
        dev:'Gearbox Software',
        pub:'2K',
        rdate:"03/25/22",
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['Top Upcoming Wishlisted',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/ttwl-gameplay-reveal-screenshots-banshee-1080-1mb-1920x1080-bf235e1791e1.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/ttwl-gameplay-reveal-screenshots-mushroom-forest-1080-1mb-1920x1080-9f8ebad39534.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/ttwl-gameplay-reveal-screenshots-pirate-1080-1mb-1920x1080-44f05e3211d0.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/castle-01-3840x2160-05f15ce0780a.jpg",
                num:4},
            ],
            [
                
                {img:"https://cdn2.unrealengine.com/crypt-01-3840x2160-4fd5e57cdc50.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/dragonlord-01-2-3838x2160-f53717d5cb5c.jpg",
                num:6},
                
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('gfb'),
        game_discs.get('gbb'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'HITMAN World of Assassination',
        logoimg:'https://cdn1.epicgames.com/offer/ed55aa5edc5941de92fd7f64de415793/EGS_HITMANWorldofAssassination_IOInteractiveAS_Bundles_S2_1200x1600-1f5eb0ca3e8855875b9f0757748337b4?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-ic1-200x200-217f7c141f0f.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/ed55aa5edc5941de92fd7f64de415793/EGS_HITMANWorldofAssassination_IOInteractiveAS_Bundles_S1_2560x1440-c44b7c8cf06d0ab3d63f5316c03b7c05?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/en-egs-tinytina-breaker-1920x1080-v03-1920x1080-4e9248d0c1fe.jpg',
        theme_color:'#e84338',
        price:'38.49',
        dis:'45%',
        oldprice:'69.99',
        rate:5,
        dev:'IO Interactive A/S',
        pub:'IO Interactive A/S',
        rdate:"01/20/22",
        indate:'01/20/22',
        gener:['rpg','adv'],
        features:['sp','cp','mp'],
        col:['Top Upcoming Wishlisted',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-00-1920x1080-f5d44fdadec6.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-01-1920x1080-fbbc8b7fb955.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-02-1920x1080-7c70948d17f8.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-03-1920x1080-d429d9b53ac4.jpg",
                num:4},
            ],
            [
                
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-04-1920x1080-afd8d1e1e050.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-05-1920x1080-5ed7b47b4201.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-06-1920x1080-a072201f1d1b.jpg",
                num:7},
                {img:"https://cdn2.unrealengine.com/egs-hitmanworldofassassination-iointeractiveas-bundles-g1a-07-1920x1080-eb9ab542fe2f.jpg",
                num:8},
                
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Horizon Zero Dawn™ Complete Edition',
        logoimg:'https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_tall-1200x1600-d4b1057afd47f9256d8da71f2f187be4.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/hzn-1-zd-ce-logo-white-v2-400x161-378073103.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#fcfcfc',
        price:'16.49',
        dis:'67%',
        oldprice:'49.99',
        rate:4.8,
        dev:'Guerrilla',
        pub:'PlayStation PC LLC',
        rdate:"08/07/20",
        indate:'08/07/20',
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['New Releases',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/hzn-zdce-storefront-2560x1440-v2-2560x1440-378073920.jpg",
                num:1},

            ],
            [
                

            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Sifu',
        logoimg:'https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-greeneye-sloclap-ic1-400x400-7f5493d6af29.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_G1A_03_1920x1080-1df3ab45b895adfee06b011673df20aa_1920x1080-1df3ab45b895adfee06b011673df20aa?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#fcfcfc',
        price:'39.99',
        dis:null,
        oldprice:null,
        rate:4.8,
        dev:'Sloclap',
        pub:'Sloclap',
        rdate:"02/08/22",
        indate:'02/08/22',
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['New Releases',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-03new-1920x1080-baa0719f9112.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-03-1920x1080-e06c29589756.jpg",
                num:2},                
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-04-1920x1080-d2330279142d.jpg",
                num:3},                
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-05-1920x1080-96a139d0cf54.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-06-1920x1080-9d12c85fba2b.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-07-1920x1080-cf81cc55722f.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-sifustandardedition-sloclap-g1a-08-1920x1080-9c6cc1ac68e8.jpg",
                num:7},
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'DEATH STRANDING',
        logoimg:'https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S4_1200x1600-5f99e16507795f9b497716b470cfd876?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-ic1-400x400-7cfaaef8077b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S3_2560x1440-fe4e51f1801fba36e452aa3466625789?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#327da8',
        price:'23.99',
        dis:'40%',
        oldprice:'39.99',
        rate:4.8,
        dev:'KOJIMA PRODUCTIONS',
        pub:'505 Games',
        rdate:"03/30/22",
        indate:'03/30/22',
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['New Releases',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-00-1920x1080-ff95f1c6868f.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-01-1920x1080-209008c65839.jpg",
                num:2},                
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-02-1920x1080-6a1d1e08c752.jpg",
                num:3},                
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-03-1920x1080-b5d07f820680.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-04-1920x1080-4089117b81f2.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-06-1920x1080-bc43459c5f93.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-g1a-07-1920x1080-c5238bdd6b1f.jpg",
                num:7},
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'STAR WARS Jedi: Fallen Order Standard Edition',
        logoimg:'https://cdn1.epicgames.com/undefined/offer/SWJFO_ADHOC_510X680-510x680-04ec2ab0afa8b571f51c34577bf1ec09.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-deathstrandingdirectorscut-kojimaproductions-ic1-400x400-7cfaaef8077b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/e509c16d53714b13ba8e393966507255/offer/jedi-fallen-orderWide-1920x1080-28eae371dbae080e2fc0df646fa42917.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#327da8',
        price:'3.99',
        dis:'90%',
        oldprice:'39.99',
        rate:4.8,
        dev:'Respawn Entertainment',
        pub:'Electronic Arts',
        rdate:"11/14/19",
        indate:'11/14/19',
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['New Releases',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fstar-wars-jedi-fallen-order%2Fhome%2FSWFJO_Standard_Keyart_1920x1080-1920x1080-7a42241ea451299ac73036ac61eb73c1184753e0.jpg",
                num:1},
              
            ],
            [
               
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'VALORANT',
        logoimg:'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-03324a2dfe6b0b9557ce96f23681c859?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-valorant-riotgames-ic1-400x270-ee924f75e8d4.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/e509c16d53714b13ba8e393966507255/offer/jedi-fallen-orderWide-1920x1080-28eae371dbae080e2fc0df646fa42917.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:4.5,
        dev:'Riot Games',
        pub:'Riot Games',
        rdate:"11/04/21",
        indate:'06/02/20',
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['New Releases',''],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-02-1920x1080-580683fffe0f.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-03-1920x1080-f34bc7b4f1b5.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-04-1920x1080-b9b0e57a12be.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg",
                num:4},
              
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-06-1920x1080-c525ac170f37.jpg",
                num:1},
            ],
            [


            ],
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Genshin Impact',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-genshinimpact-mihoyolimited-ic1-400x400-0a1ff1b6cf40.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:4.5,
        dev:'COGNOSPHERE PTE. LTD',
        pub:'COGNOSPHERE PTE. LTD',
        rdate:"06/09/21",
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['Top Player Rated'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-genshinimpact-cognospherepteltd-g1a-00-1920x1080-8d4bab533b67.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-genshinimpactsumerudebut-cognospherepteltd-g1a-01-1920x1080-f8aadc1c45d6.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-genshinimpactsumerudebut-cognospherepteltd-g1a-02-1920x1080-180b2d3f292f.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-genshinimpactsumerudebut-cognospherepteltd-g1a-03-1920x1080-9a87794f1890.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-genshinimpactsumerudebut-cognospherepteltd-g1a-04-1920x1080-0f614884f850.jpg",
                num:5},
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'League of Legends',
        logoimg:'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LoL_1200x1600-15ad6c981af8d98f50e833eac7843986?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-ic1-388x150-9fa18958e18b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:3.5,
        dev:'Riot Games',
        pub:'Riot Games',
        rdate:"11/04/21",
        indate:'10/27/09',
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['Top Player Rated'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-g1a-04-1920x1080-1ddfea6ca636.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-g1a-05-1920x1080-826873d63b34.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-g1a-06-1920x1080-98fe7aef83c9.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-g1a-07-1920x1080-294594dedec6.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-leagueoflegends-riotgames-g1a-08-1920x1080-7607516fd73b.jpg",
                num:5},

            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Warframe',
        logoimg:'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/EGS_Warframe_DigitalExtremes_S2_1200x1600-5bf4bc570c2a4c695f552b7ed5aa4e50?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-warframe-digitalextremes-ic1-400x149-daea26b82987.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/EGS_Warframe_DigitalExtremes_S1_2560x1440-c4a764b2e827bbda5d08491cf4eda6fb?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:4.5,
        dev:'Digital Extremes',
        pub:'Digital Extremes',
        rdate:"12/11/20",
        indate:'03/25/20',
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['Top Player Rated'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-warframe-digitalextremes-g1a-01-1920x1080-2d1069a28637.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-warframe-digitalextremes-g1a-02-1920x1080-741f00f76d6d.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-warframe-digitalextremes-g1a-03-1920x1080-119c4db10175.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-warframe-digitalextremes-g1a-04-1920x1080-b2e1004326b5.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-warframe-digitalextremes-g1a-05-1920x1080-474caec4caad.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-warframe-digitalextremes-g1a-06-1920x1080-97b20b6b8ba4.jpg",
                num:6},
            ],
            [

            ]
        ],
        editions:[],
        adds:[
            {   mainname:"Warframe",
                gener:['fps','ac','adv'],
                features:['sp','cp'],
                img:'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/EGS_WarframeBaruukPrimeAccessDesolatePack_DigitalExtremes_DLC_S1_2560x1440-821e503f25c658812364d3fa7033a1d8?h=270&quality=medium&resize=1&w=480',
                logoimg:'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/EGS_WarframeBaruukPrimeAccessDesolatePack_DigitalExtremes_DLC_S2_1200x1600-dfdda90c3533020bc0cabc891f51bb14?h=480&quality=medium&resize=1&w=360',
                name:'Warframe: Baruuk Prime Access - Serene Storm Pack',
                text:'Add the latest Prime Warframe, Weapons, and exclusive Accessories to your Arsenal instantly. The Serene Storm Pack includes 3990 Platinum, Baruuk Prime',
                type:'Add-on',
                dis:null,
                price:'125.99',
                oldprice:null,
                date:null,
                inw:false,
                ro:false,
            },              
            {   mainname:"Warframe",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/EGS_WarframeBaruukPrimeAccessSereneStormPack_DigitalExtremes_DLC_S1_2560x1440-4d5a80f0d8c1bfe1688a8af0972bdb25?h=270&quality=medium&resize=1&w=480',
            logoimg:'https://cdn1.epicgames.com/offer/244aaaa06bfa49d088205b13b9d2d115/EGS_WarframeBaruukPrimeAccessSereneStormPack_DigitalExtremes_DLC_S2_1200x1600-41b2a5891b531bc49de109e7a1d9f8e1?h=480&quality=medium&resize=1&w=360',
            name:' Warframe: Baruuk Prime Access - Desolate Pack',
            text:'Make the newest Prime Warframe and Weapons yours instantly. The Desolate Pack includes 2625 Platinum, Baruuk Prime, Cobra & Crane Prime',
            type:'Add-on',
            dis:null,
            price:'71.99',
            oldprice:null,
            date:null,
            inw:false,
            ro:false,
        },               
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Tomb Raider',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S2_1200x1600-a700eac197c57b46cfc99a08b1d62589?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-ic1-400x400-3e22efa0cd45-400x114-ba026833492c.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#660404',
        price:'19.99',
        dis:null,
        oldprice:null,
        rate:4.7,
        dev:'Crystal Dynamics',
        pub:'Crystal Dynamics',
        rdate:"12/30/21",
        indate:'03/05/13',
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['Top Player Rated'],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-01-1920x1080-e805b0875b06.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-02-1920x1080-9f8be773b263.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-03-1920x1080-32077b61f78c.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-04-1920x1080-f2ad3f9c089c.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-05-1920x1080-0ad1fd2c6198.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-06-1920x1080-233dd5955a75.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-tombraidergameoftheyearedition-crystaldynamics-g1a-07-1920x1080-971511ca788b.jpg",
                num:7},
                
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Assassins Creed® Valhalla',
        logoimg:'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fassassins-creed-valhalla%2Fhome%2FAC-KINGDOM-PREORDER_STANDARD-EDITION_EPIC_Game_Logo_whiteblue_1000x375-1000x375-baa332e9500ef71697f4a31924488fe309c4784d.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fassassins-creed-valhalla%2Fhome%2FBanner-1%2FACK_EPIC_KeyFeature_Banner1_Intro_1200x200_GB-1200x200-cbd94e4320c5eb468f95b64c19d6341526676999.jpg',
        theme_color:'#2ab1eb',
        price:'19.79',
        dis:'67%',
        oldprice:'59.99',
        rate:4.6,
        dev:'Ubisoft Montreal',
        pub:'Ubisoft',
        rdate:"11/17/20",
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['Top Player Rated'],
        imgs:[
            [
                {img:"https://sm.ign.com/t/ign_nordic/news/a/assassins-/assassins-creed-valhalla-gameplay-story-details-revealed_841w.1200.jpg",
                num:1},
                {img:"https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/05/ACValhallaTrailer_HERO.jpg",
                num:2},
                {img:"https://cdn.vox-cdn.com/thumbor/9-GmhPsmQx2FY70AEJdmuevTg8s=/0x0:3840x2160/1200x675/filters:focal(1178x452:1792x1066)/cdn.vox-cdn.com/uploads/chorus_image/image/67047828/ACV_UbiFwd_0720_Enemy_Variety.0.jpg",
                num:3},
                {img:"https://d.newsweek.com/en/full/1651219/assassins-creed-valhalla-settlement.png",
                num:4},
            ],
            [
                {img:"https://asset.vg247.com/assassins_creed_valhalla_review_06.png/BROK/resize/1920x1920%3E/format/jpg/quality/80/assassins_creed_valhalla_review_06.png",
                num:5},
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Celeste',
        logoimg:'https://cdn1.epicgames.com/offer/b671fbc7be424e888c9346a9a6d3d9db/CodeRedemption_Celeste-340x440-873dacb76be8c59d659757b4b5284a611_1200x1600-9e39079f1ce19738e65d349a8bc98650?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2FIC1-1920x1589-77b65e0a0aeff8e362ec3656670774bd16df06f1.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/b671fbc7be424e888c9346a9a6d3d9db/offer/Celeste - landscape offer image-2560x1440-0b9b94fd493d817704ecfdf4c704989a.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#2ab1eb',
        price:'3.99',
        dis:'75%',
        oldprice:'15.99',
        rate:5,
        dev:'Maddy Makes Games',
        pub:'Maddy Makes Games',
        rdate:"01/05/18",
        indate:"01/25/18",
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F00-1920x1080-656978e07c631e4fb1dc5d2f435c536edaafd8d5.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F01-1920x1080-e2e349a02d2d6cb17b71eb93c0de65c8f7006153.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F02-1920x1080-d7c57dac7d9384dfb1898fa9ed4a30aae7b755d4.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F05-1920x1080-2bd192fb27de2cfad4b9ba861562844080413c8c.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fceleste%2Fhome%2F04-1920x1080-9324de42e90adf9e94ffa13ae2531c0eede475ed.jpg",
                num:5},
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Hades',
        logoimg:'https://cdn1.epicgames.com/min/offer/1200x1600-1200x1600-e92fa6b99bb20c9edee19c361b8853b9.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/hades-logo-launch-messaging-2000x647-983740753.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/min/offer/2560x1440-2560x1440-5e710b93049cbd2125cf0261dcfbf943.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        bottom_img:'https://cdn2.unrealengine.com/egs-hades-supergiantgames-g2-02-1920x1080-027048444.jpg?h=720&quality=medium&resize=1&w=1280',
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#ed0000',
        price:'20.99',
        dis:null,
        oldprice:null,
        rate:4.9,
        dev:'Supergiant Games',
        pub:'Supergiant Games',
        rdate:"12/10/19",
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-hades-supergiantgames-g1a-01-1920x1080-010078133.jpg",
                num:1},
            ],
            [
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Dead Cells',
        logoimg:'https://cdn1.epicgames.com/1368a7f14c3344bbaededbae528fafed/offer/EGS_DeadCells_MotionTwin_S2-1200x1600-34d9d5ebca89e17e0a26ddb2cb158b75.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-deadcells-motiontwin-ic1-400x130-312501311.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/1368a7f14c3344bbaededbae528fafed/offer/EGS_DeadCells_MotionTwin_S1-2560x1440-87045359c3856ef941959aeeb00dbc7f.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'14.99',
        dis:'40%',
        oldprice:'24.99',
        rate:4.8,
        dev:'Motion Twin',
        pub:'Motion Twin',
        rdate:"10/22/20",
        gener:['fps','rpg','ac'],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-deadcells-motiontwin-s1-2560x1440-312502186.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-deadcells-motiontwin-g1c-01-1920x1080-312502115.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-deadcells-motiontwin-g1a-02-1920x1080-312500881.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-deadcells-motiontwin-g1a-03-1920x1080-312501125.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-deadcells-motiontwin-g1a-04-1920x1080-312501095.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-deadcells-motiontwin-g1a-05-1920x1080-312501305.jpg",
                num:7},

            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Gotham Knights',
        logoimg:'https://cdn1.epicgames.com/offer/05057ec2d5ea43c3b0701cc1518e0577/EGS_GothamKnights_WarnerBrosGamesMontreal_S2_1200x1600-5a46b442e57afa637f013bbc09fe5487?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontreal-ic1-400x400-3957d6ffed34.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/05057ec2d5ea43c3b0701cc1518e0577/EGS_GothamKnights_WarnerBrosGamesMontreal_S1_2560x1440-0c43d39faa7d02a599489d98b7678527?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'23.99',
        dis:'60%',
        oldprice:'59.99',
        rate:2,
        dev:'Warner Bros. Games',
        pub:'Warner Bros. Games',
        rdate:"10/21/22",
        gener:['fps','rpg','adv'],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontrealqloc-g1a-02-1920x1080-8571afcfb36c.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontrealqloc-g1a-03-1920x1080-260e845ab226.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontrealqloc-g1a-04-1920x1080-73d784ed3bd3.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontrealqloc-g1a-05-1920x1080-4550f1b42812.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontrealqloc-g1a-06-1920x1080-865826d53aa9.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontrealqloc-g1a-07-1920x1080-18f490dc33cb.jpg",
                num:7},

            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Aimlabs',
        logoimg:'https://cdn1.epicgames.com/offer/baa1163025994ae3b1cf3d425230e90a/EGS_Aimlabs_StateSpaceLabsInc_S2_1200x1600-adeec4040a02ec05f3881323db86f814?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-ic1-400x400-1bb2b59ed174.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/baa1163025994ae3b1cf3d425230e90a/EGS_Aimlabs_StateSpaceLabsInc_S1_2560x1440-19ed7c3790290146977ec2ede7d5295e?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:2,
        dev:'State Space Labs Inc',
        pub:'State Space Labs Inc',
        rdate:"10/21/22",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-g1a-00-1920x1080-9705da35ecc8.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-g1a-01-1920x1080-5fee79121c75.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-g1a-02-1920x1080-dadd107b77a5.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-g1a-03-1920x1080-b5a0ea9c2e34.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-g1a-04-1920x1080-d579bb9ae166.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-aimlabs-statespacelabsinc-g1a-05-1920x1080-98ccdf134521.jpg",
                num:7},

            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Fangs',
        logoimg:'https://cdn1.epicgames.com/offer/315f40c8c7ae4f95ad7426f364a39194/EGS_Fangs_HiddenLeafGames_S2_1200x1600-2424ccfe1312106fb878a7aefc3817c0?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-fangs-hiddenleafgames-ic1-400x400-d5da45e07b24.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/315f40c8c7ae4f95ad7426f364a39194/EGS_Fangs_HiddenLeafGames_S1_2560x1440-a23fb93cd2ca817bfe642298c097c6ec?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        bottom_img:'https://cdn2.unrealengine.com/logo-600x125-bc072934b242.png',
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#db0d4e',
        price:'free',
        dis:null,
        oldprice:null,
        rate:3,
        dev:'Hidden Leaf Games',
        pub:'Hidden Leaf Games',
        rdate:"10/21/22",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-fangs-hiddenleafgames-g1a-01-1920x1080-50b9460cff90.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-fangs-hiddenleafgames-g1a-02-1920x1080-14fb7bf76fc9.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-fangs-hiddenleafgames-g1a-03-1920x1080-e5dcea365e1c.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-fangs-hiddenleafgames-g1a-04-1920x1080-853f448911ff.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-fangs-hiddenleafgames-g1a-05-1920x1080-8c22efa839ed.jpg",
                num:6},
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'MultiVersus',
        logoimg:'https://cdn1.epicgames.com/offer/3a212c0da4f1438e840c21565df4b6fe/EGS_MultiVersus_PlayerFirstGames_S2_1200x1600-e365b2244970128b898fd729263db67d?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-ic1-season2-400x400-844db4384b6a.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/3a212c0da4f1438e840c21565df4b6fe/EGS_MultiVersus_PlayerFirstGames_S1_2560x1440-0c97c9a155748f90f13fc0dd484ccc48?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:4.5,
        dev:'Player First Games',
        pub:'Warner Bros. Games',
        rdate:"07/26/22",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-g1a-00-1920x1080-56dda75b15a3.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-g1a-01-1920x1080-3f7950acfa11.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-g1a-02-1920x1080-d53862382802.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-g1a-03-1920x1080-8f2857a556a5.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-g1a-04-1920x1080-aa30328a0c4b.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-multiversus-playerfirstgames-g1a-05-1920x1080-a86bd636140a.jpg",
                num:7},
                
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Century: Age of Ashes',
        logoimg:'https://cdn1.epicgames.com/offer/f698d5d792654ac99f47d67e93916bef/EGS_CenturyAgeofAshes_Playwing_S2_1200x1600-e7d29deb8f16791a5e59f2cfef2d529c?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-ic1-400x200-709ec0fdf3d8.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/f698d5d792654ac99f47d67e93916bef/EGS_CenturyAgeofAshes_Playwing_S1_2560x1440-b71bec626c97bd6d77aaa41ebe3382d1?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g2-00-2360x532-24353774879e.jpg',
        theme_color:'#2a70d1',
        price:'free',
        dis:null,
        oldprice:null,
        rate:3.5,
        dev:'Playwing',
        pub:'Playwing',
        rdate:"02/23/22",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g1a-01-v2-1920x1080-d40547c7b82b.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g1a-02-v2-1920x1080-4c9e83cc5bc2.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g1a-03-1920x1080-fc7cbb014c15.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g1a-04-1920x1080-8fc3d64ca194.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g1a-05-1920x1080-42d39aae5610.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-centuryageofashes-playwing-g1a-06-1920x1080-c3148a73bb3f.jpg",
                num:7},
                
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Brawlhalla',
        logoimg:'https://cdn2.unrealengine.com/atla-productart-1200x1600-1200x1600-59caced19b71.jpg?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/productlogo-390x390-840c9bb3ba02.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn2.unrealengine.com/atla-productart-1920x1080-1920x1080-477cda5a5a30.jpg?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:2.5,
        dev:'Blue Mammoth Games',
        pub:'Ubisoft',
        rdate:"11/15/22",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/gen-3fa-shadows-1920x1080-bb40a4ed7bb9.png",
                num:1},
                {img:"https://cdn2.unrealengine.com/gen-brynn-shadows-1920x1080-83ef51d5894b.png",
                num:2},
                {img:"https://cdn2.unrealengine.com/gen-ffa-shadows-1920x1080-0e50b2d8492d.png",
                num:3},
                {img:"https://cdn2.unrealengine.com/gen-kojival-shadows-1920x1080-dafa1c774076.png",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/gen-onyxpetra-shadows-1920x1080-d1238454196a.png",
                num:6},

                
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Dauntless',
        logoimg:'https://cdn1.epicgames.com/offer/jackal/EGS_LIVEFORTHEHUNT_PhoenixLabs_S2_1200x1600-20fc53f050fc87617216d71436e2ace4?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/dauntless-logo-white-centered-1204x593-101920654.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/jackal/EGS_LIVEFORTHEHUNT_PhoenixLabs_S1_2560x1440-2b965037bf3386c42c5826ea920fa6cf?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g2-00-1920x500-001d5803be78.jpg',
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:2.5,
        dev:'Phoenix Labs',
        pub:'Phoenix Labs',
        rdate:"03/19/20",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g1a-01-1920x1080-ce4c7190cfa4.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g1a-02-1920x1080-e53b05194ce8.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g1a-03-1920x1080-6c0225e08a20.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g1a-04-1920x1080-5e2ba0c19b18.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g1a-05-1920x1080-c649941fb14c.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-liveforthehunt-phoenixlabs-g1a-07-1920x1080-ea49885fefcb.jpg",
                num:7},
                
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Rocket League®',
        logoimg:'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-689a36ce5c8643ff37c1483d68be7d6e?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-ic1-200x200-25b4f760c45c.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S3_2560x1440-1434001758900f513cab0c885121744a?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:4.5,
        dev:'Psyonix LLC',
        pub:'Psyonix LLC',
        rdate:"03/19/20",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-00-1920x1080-acc5246faf36.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-02-1920x1080-64a9d507311b.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-03-1920x1080-dd11b399b5dd.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-04-1920x1080-f9ae9721a9d9.jpg",
                num:4},
            ],
            [
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'Warface',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Warface_AllodsTeam_S2_1200x1600-90a094bdcb6824eefe84c60ef0c4a612?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-warface-allodsteam-ic1-png-300x130-c1d9cf9223f2.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Warface_AllodsTeam_S1_2560x1440-bf3c5da7b0239523117b1ff2bba16dc9?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/egs-warface-allodsteam-g2-00-1920x1080-c173a432592b.jpg',
        theme_color:'#0062ff',
        price:'free',
        dis:null,
        oldprice:null,
        rate:3.5,
        dev:'Allods Team',
        pub:'MY.GAMES',
        rdate:"06/29/21",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g2-00-1920x1080-c173a432592b.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g1a-03-1920x1080-3c71732704ff.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g1a-04-1920x1080-61af894cba25.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g1a-05-1920x1080-98d59b41ee74.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g1a-06-1920x1080-1f2d811ba1a2.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g1a-07-1920x1080-32b9142a244b.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-warface-allodsteam-g2-01-1920x1080-dd83896256e8.jpg",
                num:7},
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'The Cycle: Frontier',
        logoimg:'https://cdn1.epicgames.com/offer/azalea/EGS_TheCycleFrontier_YAGER_S2_1200x1600-473004ea09823cc40080ab1aba6d5090?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-ic1-400x400-446dac031b2b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/azalea/EGS_TheCycleFrontier_YAGER_S1_2560x1440-41498f780de5b4a62709b004126afbc1?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/egs-warface-allodsteam-g2-00-1920x1080-c173a432592b.jpg',
        theme_color:'#de9312',
        price:'free',
        dis:null,
        oldprice:null,
        rate:3.5,
        dev:'YAGER',
        pub:'YAGER',
        rdate:"06/08/22",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-01-1920x1080-45c1b179163c.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-04-1920x1080-16a94600ed5e.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-05-1920x1080-bafc5d0fd37f.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-06-1920x1080-2826eeaaa844.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-07-1920x1080-52fd38490f11.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-08-1920x1080-d8f5ad02ab39.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-thecyclefrontier-yager-g1a-09-1920x1080-10ba5aad1ec1.jpg",
                num:7},
            ],
            [

            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
    {
        name:'The Outer Worlds: Spacers Choice',
        logoimg:'https://cdn1.epicgames.com/offer/dc61166eea95474e912953b163791d42/EGS_TheOuterWorldsSpacersChoiceEdition_ObsidianEntertainment_S2_1200x1600-24b156886564b75bf9aa823a0a0eb18e?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-ic1-400x400-86c3bee5e2d2.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/dc61166eea95474e912953b163791d42/EGS_TheOuterWorldsSpacersChoiceEdition_ObsidianEntertainment_S1_2560x1440-dd9211a8277a2392a9dd5b108858ba33?h=270&quality=medium&resize=1&w=480',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://images8.alphacoders.com/710/thumb-1920-710284.png",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        bottom_img:'https://cdn2.unrealengine.com/egs-warface-allodsteam-g2-00-1920x1080-c173a432592b.jpg',
        theme_color:'#de9312',
        price:'47.99',
        dis:'20%',
        oldprice:'59.99',
        rate:4.5,
        dev:'Obsidian Entertainment',
        pub:'Private Division',
        rdate:"03/07/23",
        gener:[],
        features:['sp','cp'],
        col:['Top Popular',],
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-00-1920x1080-a82009312103.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-01-1920x1080-f0ad1f7b8d71.jpg",
                num:2},
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-02-1920x1080-51b91c65d2ed.jpg",
                num:3},
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-03-1920x1080-1fd07dfe05fa.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-04-1920x1080-2e8084901833.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-05-1920x1080-1e38dba9b282.jpg",
                num:6},
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-06-1920x1080-307e8f4f536f.jpg",
                num:7},
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-07-1920x1080-b81e4a01ad2b.jpg",
                num:8},
            ],
            [
                {img:"https://cdn2.unrealengine.com/egs-theouterworldsspacerschoiceedition-obsidianentertainment-g1a-08-1920x1080-9dd56a824e91.jpg",
                 num:9}
            ]
        ],
        editions:[],
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
        game_disc:[
        game_discs.get('quc'),
        game_discs.get('ac'),
        game_discs.get('cc'),
        game_discs.get('as'),
        game_discs.get('r'),
        ]  
    },
]




let dummy_games = [
    {
        name:'NARAKA: BLADEPOINT',
        logoimg:'https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-88f4e1f1ee1ffa8f7a85bf4e3a492e7e?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Magic: The Gathering Arena',
        logoimg:'https://cdn1.epicgames.com/offer/5fdcc0dc67294af3be740f362bd976fd/EGS_MagicTheGatheringArena_WizardsoftheCoast_S2_1200x1600-598bab107ae56fa357070c71100cc0be?h=480&quality=medium&resize=1&w=360',
        price:'free',
        dis:null,
        oldprice:null,
    },
    {
        name:'Magic: The Gathering Arena',
        logoimg:'https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S2-1200x1600-11d040719a8457bbf36cabbe89b200db.jpg?h=480&quality=medium&resize=1&w=360',
        price:'9.99',
        dis:'75%',
        oldprice:'39.99',
    },
    {
        name:'ARK: Survival Evolved',
        logoimg:'https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Metro Last Light Redux',
        logoimg:'https://cdn1.epicgames.com/offer/c5e786eddfd041caa9984213e3f9621d/metro_last_light_epic_tile_1200x1600_1200x1600-d4f66fca79c098f57e6759dedb6c6565?h=480&quality=medium&resize=1&w=360',
        price:'3.99',
        dis:'80%',
        oldprice:'19.99',
    },
    {
        name:'Overcooked! 2',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/egs-overcooked2-tall_1200x1600-fbae89fad70c05cd1979316f620e64a9?h=480&quality=medium&resize=1&w=360',
        price:'3.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'theHunter: Call of the Wild™',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_theHunterCalloftheWild_ExpansiveWorlds_S2_1200x1600-1e9b46aaabc33fe0a08cf5b418e76ba2?h=480&quality=medium&resize=1&w=360',
        price:'4.99',
        dis:'75%',
        oldprice:'19.99',
    },
    {
        name:'Nioh: The Complete Edition',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NiohTheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-4723c89d30b680dafa5cf9f279a6cfb7?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Car Mechanic Simulator 2018',
        logoimg:'https://cdn1.epicgames.com/offer/226306adde104c9092247dcd4bfa1499/EGS_CarMechanicSimulator2018_RedDotGames_S2_1200x1600-f285924f9144353f57ac4631f0c689e6?h=480&quality=medium&resize=1&w=360',
        price:'15.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Fallout 3: Game of the Year Edition',
        logoimg:'https://cdn1.epicgames.com/offer/fa702d34a37248ba98fb17f680c085e3/EGS_Fallout3GameoftheYearEdition_BethesdaGameStudios_S2_1200x1600-e2ba392652a1f57c4feb65d6bbd1f963?h=480&quality=medium&resize=1&w=360',
        price:'6.99',
        dis:'67%',
        oldprice:'19.99',
    },
    {
        name:'Mortal Shell',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/c54f6d5f-2a48-41f9-9f36-38a441bdb535_1200x1600-8f81674351d5cbaa78be417ee078a80e?h=480&quality=medium&resize=1&w=360',
        price:'9.99',
        dis:'70%',
        oldprice:'29.99',
    },
    {
        name:'Saints Row IV Re-Elected',
        logoimg:'https://cdn1.epicgames.com/offer/151e56468b5049628653dedab7c88007/EGS_SaintsRowIVReElected_DeepSilverVolition_S2_1200x1600-7607305fd444a7dab171d4404dbe7ff0?h=480&quality=medium&resize=1&w=360',
        price:'4.99',
        dis:'75%',
        oldprice:'19.99',
    },
    {
        name:'Riders Republic',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208?h=480&quality=medium&resize=1&w=360',
        price:'17.99',
        dis:'70%',
        oldprice:'59.99',
    },
    {
        name:'Rising Storm 2: Vietnam',
        logoimg:'https://cdn1.epicgames.com/3542a1df211e492bb2abecb7c734f7f9/offer/EGS_RisingStorm2Vietnam_AntimatterGamesTripwireInteractive_S4-1200x1600-5e3b2f8107e17cc008237e52761d67e5.jpg?h=480&quality=medium&resize=1&w=360',
        price:'5.99',
        dis:'75%',
        oldprice:'21.99',
    },
    {
        name:'Severed Steel',
        logoimg:'https://cdn1.epicgames.com/offer/5db7394e65044dd1bb083ee983e2b3a5/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-42edb36730050be3d18171baac58a7f2?h=480&quality=medium&resize=1&w=360',
        price:'12.99',
        dis:'50%',
        oldprice:'24.99',
    },
    {
        name:'Severed Steel',
        logoimg:'https://cdn1.epicgames.com/offer/5db7394e65044dd1bb083ee983e2b3a5/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-42edb36730050be3d18171baac58a7f2?h=480&quality=medium&resize=1&w=360',
        price:'12.99',
        dis:'50%',
        oldprice:'24.99',
    },
    {
        name:'World War Z Aftermath',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/wwzAfterTall_1200x1600-b7b0af3e21961a57059ec4a3019e57fb?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:'50%',
        oldprice:'39.99',
    },
    {
        name:'PUBG: BATTLEGROUNDS',
        logoimg:'https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/download-pubg-battlegrounds-offer-1er5e.jpg?h=480&quality=medium&resize=1&w=360',
        price:'free',
        dis:null,
        oldprice:null,
    },
    {
        name:'SnowRunner',
        logoimg:'https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_PortraitImage_860x1148-860x1148-bdf591a23e5a348671dc2a77465d0ba6c5871d68-860x1148-5a5adeae2140a3f0b5586750f70bf8e2-860x1148-5a5adeae2140a3f0b5586750f70bf8e2.jpg?h=480&quality=medium&resize=1&w=360',
        price:'16.49',
        dis:'45%',
        oldprice:'29.99',
    },
    {
        name:'Satisfactory',
        logoimg:'https://cdn1.epicgames.com/offer/crab/U7_Epic_1200x1600_Logo_1200x1600-ed7f1a9f8a59acbfaba61af7accc0a4b?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Kingdom Come: Deliverance',
        logoimg:'https://cdn1.epicgames.com/undefined/offer/EGS_WarhorseStudios_KingdomComeDeliverance_S4-510x680-ec915782c8a2d6f1d64c028dd74a398f.jpg?h=480&quality=medium&resize=1&w=360',
        price:'7.49',
        dis:'75%',
        oldprice:'29.99',
    },
    {
        name:'Idle Champions of the Forgotten Realms',
        logoimg:'https://cdn1.epicgames.com/offer/7e508f543b05465abe3a935960eb70ac/EGS_IdleChampionsoftheForgottenRealms_CodenameEntertainment_S2_1200x1600-52d8736cc62172b3a3fb42a34dee38df?h=480&quality=medium&resize=1&w=360',
        price:'free',
        dis:null,
        oldprice:null,
    },
    {
        name:'Paladins',
        logoimg:'https://cdn1.epicgames.com/offer/badb0ee71b474ed591ec43212547cfc8/EGS_PortraitImage_860x1148_860x1148-b9b418bb9564d90a45d86ba3829f72f1?h=480&quality=medium&resize=1&w=360',
        price:'free',
        dis:null,
        oldprice:null,
    },
    {
        name:'Frostpunk',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S2_1200x1600-c71dc27cfe505c6c662c49011b36a0c5?h=480&quality=medium&resize=1&w=360',
        price:'6.99',
        dis:'75%',
        oldprice:'27.99',
    },
    {
        name:'Just Cause 4 Reloaded',
        logoimg:'https://cdn1.epicgames.com/ba8062bdcc1342c0b78743e3c6242575/offer/JC4-Reloaded-860x1148-860x1148-145b58e1d3d597871b8585f824540c57-860x1148-145b58e1d3d597871b8585f824540c57.jpg?h=480&quality=medium&resize=1&w=360',
        price:'32.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Gloomhaven',
        logoimg:'https://cdn1.epicgames.com/spt-assets/ef2777467a3c49059a076e42fd9b41f0/download-gloomhaven-offer-1ho2x.jpg?h=480&quality=medium&resize=1&w=360',
        price:'34.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Ghost Recon Breakpoint Standard Edition',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/GRT_STD_Edition_Store_Portrait_1200x1600_1200x1600-b08ee70d85ee2649b6e9c575d9192e66?h=480&quality=medium&resize=1&w=360',
        price:'11.99',
        dis:'80%',
        oldprice:'59.99',
    },
    {
        name:'A Total War Saga: TROY',
        logoimg:'https://cdn1.epicgames.com/53310576ce1d4446b20dbbdac4f09f2d/offer/EGS_TotalWarSagaTROY_CREATIVEASSEMBLY_S2-1200x1600-4dc6b4bb1c8958b13c60e4346ad31288.jpg?h=480&quality=medium&resize=1&w=360',
        price:'24.99',
        dis:'50%',
        oldprice:'49.99',
    },
    {
        name:'Mount & Blade II: Bannerlord',
        logoimg:'https://cdn1.epicgames.com/offer/aeac94c7a11048758064b82f8f8d20ed/EGS_MountBladeIIBannerlord_TaleWorldsEntertainment_S2_1200x1600-67b826955ba37d7d6c33ec578aaa2d54?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Evil Dead: The Game',
        logoimg:'https://cdn1.epicgames.com/offer/95e09a8c24c44684bca1a6f25aea920c/EGS_EvilDeadTheGame_SaberInteractiveInc_S2_1200x1600-8e839d708bc638cd58c219ae38d58f6f_1200x1600-8e839d708bc638cd58c219ae38d58f6f?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:'50%',
        oldprice:'39.99',
    },
    {
        name:'Total War: WARHAMMER',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TotalWarWARHAMMER_CREATIVEASSEMBLY_S6_1200x1600-3e82a2d0de323e3de30f4ff4989a5c15?h=480&quality=medium&resize=1&w=360',
        price:'14.99',
        dis:'75%',
        oldprice:'59.99',
    },
    {
        name:'For The King',
        logoimg:'https://cdn1.epicgames.com/epic/offer/Diesel_productv2_for-the-king_EGS_IronOakGames_ForTheKing_S4-510x680-124fa65abe75469a705800f43aaa481fcc0ae8df-510x680-226ea06223a3a31c31c242834bb6878f.jpg?h=480&quality=medium&resize=1&w=360',
        price:'4.99',
        dis:'75%',
        oldprice:'19.99',
    },
    {
        name:'The Long Dark',
        logoimg:'https://cdn1.epicgames.com/58dfcd1952ee48c1a1fa31c6ace5fe3d/offer/EGS_TheLongDark_HinterlandStudioInc_S6-1200x1600-3debfeb01e511b9e1221f973b6bb1fe7.jpg?h=480&quality=medium&resize=1&w=360',
        price:'13.99',
        dis:'50%',
        oldprice:'27.99',
    },
    {
        name:'Goat Simulator 3',
        logoimg:'https://cdn1.epicgames.com/offer/50bbaf85f4454b1c88786efeede5b302/EGS_GoatSimulator3_CoffeeStainNorthAB_S2_1200x1600-99737fa8a749438ca909c776a4cd9b89?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:'35%',
        oldprice:'29.99',
    },
    {
        name:'Rising Storm 2: Vietnam',
        logoimg:'https://cdn1.epicgames.com/3542a1df211e492bb2abecb7c734f7f9/offer/EGS_RisingStorm2Vietnam_AntimatterGamesTripwireInteractive_S4-1200x1600-5e3b2f8107e17cc008237e52761d67e5.jpg?h=480&quality=medium&resize=1&w=360',
        price:'5.99',
        dis:'75%',
        oldprice:'21.99',
    },
    {
        name:'Metro Exodus Standard Edition',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/MetroExodus-PCEnhancedEdition_S2_1200x1600-64a550825c1427140460cc3a86cafdb5?h=480&quality=medium&resize=1&w=360',
        price:'7.99',
        dis:'75%',
        oldprice:'29.99',
    },
    {
        name:'Rough Justice: 84',
        logoimg:'https://cdn1.epicgames.com/spt-assets/301c3581b20d4fc2aacbac10ac009ba3/rough-justice-84-12r2b.png?h=480&quality=medium&resize=1&w=360',
        price:'17.99',
        dis:'10%',
        oldprice:'19.99',
    },
    {
        name:'Trinity Fusion',
        logoimg:'https://cdn1.epicgames.com/spt-assets/7ff0b14c1b50498ca2a180710f0874ee/trinity-fusion-has9t.png?h=480&quality=medium&resize=1&w=360',
        price:'free',
        dis:null,
        oldprice:null,
    },
    {
        name:'Forspoken',
        logoimg:'https://cdn1.epicgames.com/offer/a472b0f2f2a5493d960a941f01cf3393/EGS_Forspoken_LuminousProductions_S2_1200x1600-dd7b5d1f22cb04906377b7ed895779b8_1200x1600-dd7b5d1f22cb04906377b7ed895779b8?h=480&quality=medium&resize=1&w=360',
        price:'79.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'FINAL FANTASY VII',
        logoimg:'https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S2_1200x1600-e147110cf8dd1bc8c96810a5867b3475?h=480&quality=medium&resize=1&w=360',
        price:'79.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'NEO: The World Ends with You',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NEOTheWorldEndswithYou_handInc_S2_1200x1600-bd41753975486e08ca8f0518d893280f?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Marvel s Guardians of the Galaxy',
        logoimg:'https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_01_1200x1600-e8e868690d5e67692c7bf2c13aa84561?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'KINGDOM HEARTS',
        logoimg:'https://cdn1.epicgames.com/c8ff067c1c984cd7ab1998e8a9afc8b6/offer/EGS_KINGDOMHEARTSHD28FinalChapterPrologue_SquareEnix_S6-1200x1600-a3fc8fc218fe1ff3541dc2b5b9f076d7.jpg?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Age of Wonders 4',
        logoimg:'https://cdn1.epicgames.com/offer/61375e6a52534a1aa2d8ba6d46f9ee64/EGS_AgeofWonders4_TriumphStudios_S2_1200x1600-6753645ce36ddcfd00142d40143f3c46?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Sniper Elite 5',
        logoimg:'https://cdn1.epicgames.com/offer/18ad196e381b4331bf856e71a85ee0df/EGS_SniperElite5_Rebellion_S2_1200x1600-a0198a289c1472b26bc8d7a409c358c1?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Anno 1800 Standard Edition',
        logoimg:'https://cdn1.epicgames.com/offer/oregano/an18-store-portrait-1200x1600-1200x1600-665115795_1200x1600-a714948f3c93306d618c279edded0525?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'DAEMON X MACHINA',
        logoimg:'https://cdn1.epicgames.com/offer/0dc18227b3f14162968d8e7969e454ef/EGS_DAEMONXMACHINA_MarvelousInc_S2_1200x1600-11d198187c5cc2f494f6473515866556?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Kerbal Space Program 2',
        logoimg:'https://cdn1.epicgames.com/offer/038295c445bb40d1b06545fd75741af1/EGS_KerbalSpaceProgram2_InterceptGames_S2_1200x1600-a28fc59b570d183358da192385d777d5?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Kena: Bridge of Spirits',
        logoimg:'https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S6-1200x1600-e701bd947727ee14b81626c7f9757e4f.jpg?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Farming Simulator 22',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/725818d8-9768-4a6a-a723-3039aaee1e23_1200x1600-3b6116d3fc1b566b71251d04bce27938?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'OUTRIDERS',
        logoimg:'https://cdn1.epicgames.com/offer/c6e54ebd92da4ee8819c1c0956cebdc4/EGS_OUTRIDERS_PeopleCanFly_S2_1200x1600-9fb60a61da1704a46d3c2d29d45f6dca?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Cris Tales',
        logoimg:'https://cdn1.epicgames.com/ef361cdf19514595a8cb0945fb66962e/offer/EGS_AgorgeousindielovelettertoclassicJRPGs_DreamsUncorporatedSYCK_S2-1200x1600-1cb9e1f4514ece8e580803edccc2e99e.jpg?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Samurai Jack: Battle Through Time',
        logoimg:'https://cdn1.epicgames.com/db9feb0da696474e9923764dd75b9854/offer/EGS_SamuraiJackBattleThroughTime_SoleilLtd_S2-1200x1600-244b9d4be3acb79075ca408875e05b8b.jpg?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Kingdoms of Amalur: Re-Reckoning',
        logoimg:'https://cdn1.epicgames.com/0f86606a1622460898a7874d488f288a/offer/Portrait_Product_Image-1200x1600-9f98edc40c24f96c10fb38316ad8860d.png?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'DRAGON QUEST® XI',
        logoimg:'https://cdn1.epicgames.com/94a50905f377470c84c8e4b7c38f9cdd/offer/EGS_DRAGONQUESTXISEchoesofanElusiveAge_SquareEnix_S2-1200x1600-85fb72821e496f64e3945969c6fd4290.jpg?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'System Shock',
        logoimg:'https://cdn1.epicgames.com/e49aaa31c1324e398e0b1029a0c6d390/offer/EGS_Afighttothedeathinthedepthsofspace_NightdiveStudios_S4-1200x1600-45f2ccbf4fcbf71a059499d0742229f0.jpg?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Returnal™',
        logoimg:'https://cdn1.epicgames.com/offer/4c461792757541e99c4a16c00834c956/EGS_Returnal_HousemarqueClimaxStudios_S2_1200x1600-617cb4daee4cf45fa937304bceb60a81?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'The Callisto Protocol',
        logoimg:'https://cdn1.epicgames.com/offer/6b0541b5d9aa476cbf407643ab3b1d7d/EGS_TheCallistoProtocol_StrikingDistanceStudios_S2_1200x1600-1e31eacc92833279f5b7a8d07cd3826c?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Alan Wake Remastered',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-8024b0d13e7a3f3888cb27df87cf263f?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Crysis Remastered',
        logoimg:'https://cdn1.epicgames.com/offer/17a1f8585f9246808597b30780aaf4fb/EGS_Featured_Carousal_Image_1200x1600_MobileCRM_1200x1600-3c3a82d36e59aaae069224789fcfb8c8?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Saints Row',
        logoimg:'https://cdn1.epicgames.com/offer/0d23bb77ee2f45b7a571bde68caddb09/EGS_SaintsRow_DeepSilverVolition_S2_1200x1600-d95f6c911a764ad44302f021a3174a24?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:'55%',
        oldprice:'59.99',
    },
    {
        name:'SUPERHOT',
        logoimg:'https://cdn1.epicgames.com/908bed122ba84c4a908ee1e14da401c3/offer/2ac39eae-91af-4f2f-81bd-d1c51d74ddf1-1200x1600-2aee8dd73e7218a2af9ac961406530b5.jpg?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Crysis 3 Remastered',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4?h=480&quality=medium&resize=1&w=360',
        price:'16.99',
        dis:'45%',
        oldprice:'29.99',
    },
    {
        name:'Arcadegeddon',
        logoimg:'https://cdn1.epicgames.com/offer/043ffc92cbd64a9fbc350ea68f415937/EGS_Arcadegeddon_IllFonic_S2_1200x1600-eb8ee0f2ccf8ac8540c0034831562975?h=480&quality=medium&resize=1&w=360',
        price:'15.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Mafia: Definitive Edition',
        logoimg:'https://cdn1.epicgames.com/ee8802651a004c48999169fa32eb4903/offer/EGS_MafiaDefinitiveEditionPreOrder_Hangar13_S2-1200x1600-3674a5caa0e10eca89feb4dba0484112.jpg?h=480&quality=medium&resize=1&w=360',
        price:'13.99',
        dis:'65%',
        oldprice:'39.99',
    },
    {
        name:'Monkey Barrels',
        logoimg:'https://cdn1.epicgames.com/aa54bad47e504fdca79a3eb77be8c465/offer/EGS_MONKEYBARRELS_GoodFeelCoLtd_S2-1200x1600-2a1d398bad097402dcdca68d72c61641.jpg?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Prey',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Prey_ArkaneStudios_S2_1200x1600-98e869dbf74a7db4857c4242c044272d?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:'75%',
        oldprice:'9.99',
    },
    {
        name:'Marvels Midnight Suns',
        logoimg:'https://cdn1.epicgames.com/offer/ea73c08ac633414584e281f838b3a78c/EGS_MarvelsMidnightSuns_FiraxisGames_S2_1200x1600-2bbbf1249898e7441527c7b5679b1dd2?h=480&quality=medium&resize=1&w=360',
        price:'59.99',
        dis:'50%',
        oldprice:'29.99',
    },
    {
        name:'Expeditions: Viking',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_ExpeditionsViking_LogicArtists_S2_1200x1600-149ca492cef6dff9152ddd751ea1f2dc?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Hellpoint',
        logoimg:'https://cdn1.epicgames.com/97f91a3e4a7449fa9f4505a09efe1645/offer/EGS_Hellpoint_CradleGames_S2-1200x1600-03cd47fb94500a866134675f32c85a34.jpg?h=480&quality=medium&resize=1&w=360',
        price:'27.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'ELEX II',
        logoimg:'https://cdn1.epicgames.com/offer/75c06d52a99942e9884a47deced106bb/EGS_ELEXII_PiranhaBytes_S2_1200x1600-54abb7b85d02538e20e3237f67dd7b59?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:'50%',
        oldprice:'49.99',
    },
    {
        name:'Assassins Creed® III: Remastered',
        logoimg:'https://cdn1.epicgames.com/offer/camellia/ACOrigins_STD_Store_Portrait_1200x1600_1200x1600-4a79f9f393f7a3a9e5be3a0ae581f3d5?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:'50%',
        oldprice:'39.99',
    },
    {
        name:'Project Warlock II',
        logoimg:'https://cdn1.epicgames.com/spt-assets/99980c9e2c8e4ba6812642b418e25b3c/download-project-warlock-ii-offer-uxh7o.png?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'DEATHLOOP',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S2_1200x1600-d062aa01760072626d27af24af05db77?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:'67%',
        oldprice:'59.99',
    },
    {
        name:'Gravewood High',
        logoimg:'https://cdn1.epicgames.com/36d3389b16b14deeb527754f6393469b/offer/EGS_GravewoodHigh_EvilCoGames_S2-1200x1600-919c38e636b31bc0614fc550d0cb0830.jpg?h=480&quality=medium&resize=1&w=360',
        price:'15.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Recursive Ruin',
        logoimg:'https://cdn1.epicgames.com/spt-assets/8291b71e47a240c8b47c1992784346d0/download-recursive-ruin-offer-18k1r.png?h=480&quality=medium&resize=1&w=360',
        price:'13.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Adams Venture Origins',
        logoimg:'https://cdn1.epicgames.com/spt-assets/e04cbcb561c24dc184bc870778ac1746/download-adams-venture-origins-offer-1htig.jpg?h=480&quality=medium&resize=1&w=360',
        price:'9.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'ATONE: Heart of the Elder Tree',
        logoimg:'https://cdn1.epicgames.com/spt-assets/fb679d650ab14a85a6d21a815744f619/atone-heart-of-the-elder-tree-7xqs7.jpg?h=480&quality=medium&resize=1&w=360',
        price:'11.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Omen Of Sorrow',
        logoimg:'https://cdn1.epicgames.com/daffodil/offer/portrait_epicgames_full-860x1148-90c34fae2eec55fed474ad3c11e9fbb0.png?h=480&quality=medium&resize=1&w=360',
        price:'15.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Cobra Kai',
        logoimg:'https://cdn1.epicgames.com/spt-assets/3f9d44017bba4506a0cf530aa6e6b384/download-cobra-kai--the-karate-kid-saga-continues-offer-nk1n7.jpg?h=480&quality=medium&resize=1&w=360',
        price:'15.99',
        dis:'75%',
        oldprice:'3.99',
    },
    {
        name:'Sherlock Holmes The Awakened',
        logoimg:'https://cdn1.epicgames.com/offer/f9bc208b965c4fb7afd0c842d764fc37/EGS_SherlockHolmesTheAwakened_Frogwares_S2_1200x1600-0ed490340fbe9567880c4751f6b9b10c?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Asterigos: Curse of the Stars',
        logoimg:'https://cdn1.epicgames.com/spt-assets/7c264e76228641f2b62fa8adf85841d6/download-asterigos-offer-1s3ig.jpg?h=480&quality=medium&resize=1&w=360',
        price:'39.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'A Plague Tale: Requiem',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/PlagueTale1_1200x1600-98f9fd41d86634c1f82e4b5cbfc4e83f?h=480&quality=medium&resize=1&w=360',
        price:'49.99',
        dis:'35%',
        oldprice:'32.99',
    },
    {
        name:'Hi-Fi RUSH',
        logoimg:'https://cdn1.epicgames.com/offer/577c5cbc303a4d168b1a104f3b46e751/EGS_HiFiRUSH_TangoGameworks_S2_1200x1600-4cb4b10faea9632e2b308e60695c8a32?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Hello Neighbor 2',
        logoimg:'https://cdn1.epicgames.com/offer/4046b000e6b0477ea639ee07e28db3d0/EGS_HelloNeighbor2_EerieGuest_S2_1200x1600-0fc602ed536ebbf08ee1645af162b38d?h=480&quality=medium&resize=1&w=360',
        price:'31.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Subnautica Below Zero',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_SubnauticaBelowZero_UnknownWorldsEntertainmentInc_S2_1200x1600-b131add18be6b0f16511772e17850e49?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Tchia',
        logoimg:'https://cdn1.epicgames.com/offer/2e09c1d223094f3798f63873548c9454/portrait_1200x1600-30ac6c45fa9f00724591b1ca567d8655?h=480&quality=medium&resize=1&w=360',
        price:'29.99',
        dis:'10%',
        oldprice:'26.99',
    },
    {
        name:'Blasphemous',
        logoimg:'https://cdn1.epicgames.com/offer/eddb735dde6b47cda8193f2643cff886/EGS_Blasphemous_TheGameKitchen_S6_1200x1600-37265bbc691109595a2ff9b0c21ba8c7?h=480&quality=medium&resize=1&w=360',
        price:'24.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Moonglow Bay',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MoonglowBay_Bunnyhug_S2_1200x1600-5dee944c8789c29cc85084438ad895db?h=480&quality=medium&resize=1&w=360',
        price:'24.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'SEASON®: A letter to the future',
        logoimg:'https://cdn1.epicgames.com/offer/3428aac705b44d88beb8334780fa33bd/EGS_SEASONAlettertothefuture_ScavengersStudio_S2_1200x1600-fd02caab75848d7b7ab3633bc0503ec7?h=480&quality=medium&resize=1&w=360',
        price:'24.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Shattered: Tale of the Forgotten King',
        logoimg:'https://cdn1.epicgames.com/offer/2176462c35e843e3bb1bacdf5a3f05bf/EGS_ShatteredTaleoftheForgottenKing_RedlockStudio_S2_1200x1600-2aa4cc7b1b1e8a17d79b387f6770490e?h=480&quality=medium&resize=1&w=360',
        price:'23.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Myst',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Myst_CyanWorldsInc_S2_1200x1600-47abfc334929c9fb5b5f67667e3106bc?h=480&quality=medium&resize=1&w=360',
        price:'23.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'The Eternal Cylinder',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheEternalCylinder_ACETeam_S2_1200x1600-a87a940bd65fe2853363dd6d93e13811?h=480&quality=medium&resize=1&w=360',
        price:'23.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Obduction',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Obduction_CyanInc_S2_1200x1600-7a12b5dfb5998545f1b285e1647be99b?h=480&quality=medium&resize=1&w=360',
        price:'23.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Pine',
        logoimg:'https://cdn1.epicgames.com/salesEvent/salesEvent/4dc9b96e-73f8-45a5-be20-b0f3a2405d62_1200x1600-429cae2dfc059c193e15ae17ba36bb2d?h=480&quality=medium&resize=1&w=360',
        price:'20.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Not For Broadcast',
        logoimg:'https://cdn1.epicgames.com/spt-assets/faa0260d9ce64462b11ba5c1a6dbb13d/download-not-for-broadcast-offer-3vvnw.jpg?h=480&quality=medium&resize=1&w=360',
        price:'20.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Evoland Legendary Edition',
        logoimg:'https://cdn1.epicgames.com/spt-assets/aafde465b31e4bd5a169ff1c8a164a17/evoland-legendary-edition-1j93v.png?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Life of Delta',
        logoimg:'https://cdn1.epicgames.com/spt-assets/39afb308699243968326a20ebf733046/life-of-delta-1s431.jpg?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Nine Noir Lives',
        logoimg:'https://cdn1.epicgames.com/spt-assets/2ee0c36dbf084219bb314d5b22fb4b53/download-nine-noir-lives-offer-1io67.jpg?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:null,
        oldprice:null,
    },
    {
        name:'Silence',
        logoimg:'https://cdn1.epicgames.com/spt-assets/2e1926d1cb0a4caebe18087243efebb6/download-silence-offer-11268.jpg?h=480&quality=medium&resize=1&w=360',
        price:'19.99',
        dis:null,
        oldprice:null,
    }
]

https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Voidtrain_NEARGA_S2_1200x1600-497cd22d4e46bc6c5ba56c3215fc5b4f?h=480&quality=medium&resize=1&w=360
 
console.log(dummy_games.length)

let event = ['2kpub','febs','thq']
let geners = ['fps','adv','ac','ac-adv','rpg','ow','fg','eg','hg','td','sv','stg','sth']
let col = [ 'New Releases', 'Top Player Rated','Top Popular', 'Top Sellers','Most Played','Top Upcoming Wishlisted']
let feat = ['cp','cs','sp','mp']
/* adv ac fps rpg ow ac-adv */

/* New Releases Top Player Rated Top Popular Top Sellers Most Played Top Upcoming Wishlisted */

/* cp cs sp mp  */


for(let dum of dummy_games){
    geners = geners.sort(function() {
        return 0.5 - Math.random();
      })
    col = col.sort(function() {
        return 0.5 - Math.random();
      })
    feat = feat.sort(function() {
        return 0.5 - Math.random();
      })
    let g = [geners[0],geners[1],geners[2]]
    let c = [col[0],col[1],col[2]]
    let f = [feat[0],feat[1],feat[2]]

    games_list.push({
        name:dum.name,
        logoimg:dum.logoimg,
        img:'https://i.ytimg.com/vi/-he2LPUvHQ8/hqdefault.jpg',
        ach_img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
        bottom_img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
        src:"https://wallup.net/wp-content/uploads/2017/11/22/391484-Dishonored-dishonored_2-video_games-Emily_Kaldwin.jpg",
        srcm:"https://dokumen.pub/img/dishonored-the-roleplaying-game-core-rulebook-9781912743216.jpg",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/2/29/Dishonored_2_Logo.png",
        theme_color:'#fcfcfc',
        price:dum.price,
        dis:dum.dis,
        oldprice:dum.oldprice,
        rate:5.0,
        dev:'epic games',
        pub:'epic games',
        rdate:"11/03/22",
        indate:"11/11/6",
        gener:g,
        features:f,
        col:c,
        dummy:true,
        imgs:[
            [
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:1},
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:2},                   
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:3},                    
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:4},
            ],
            [
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:5},
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:6},                   
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:7},                    
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:8},
            ],
            [
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:9},
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:10},                   
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:11},                    
                {img:"https://cdn2.unrealengine.com/epic-games-store-ratings-and-polls-update-1920x1080-dc391bf9ab36.jpg",
                num:12},
            ],
        ],
        achievements:[
            {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },
            {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },        {
                name:'epic games ach',
                img:'https://cdn.vox-cdn.com/thumbor/cV1TVSZhJ_zxjDpXnw2Y_4Jb274=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                xp:Math.floor(Math.random() *(100 - 1 + 1)) + 1+" XP",
                text:'epic games ach',
                unrate:'0.1% of players unlock'
            },
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
            {   mainname:"",
                gener:['fps','ac','adv'],
                features:['sp','cp'],
                img:'https://cdn.vox-cdn.com/thumbor/FtAfpk9Hfhs1Bjq0puMqvrVtTsU=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
                logoimg:'https://game.watch.impress.co.jp/img/gmw/docs/1270/728/image00_l.jpg',
                name:'add',
                text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
                type:'Add-on',
                dis:'50%',
                price:'4.99',
                oldprice:'9.99',
                date:null,
                inw:false,
                ro:false,
            },          
            {   mainname:"",
            gener:['fps','ac','adv'],
            features:['sp','cp'],
            img:'https://cdn.vox-cdn.com/thumbor/FtAfpk9Hfhs1Bjq0puMqvrVtTsU=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
            logoimg:'https://game.watch.impress.co.jp/img/gmw/docs/1270/728/image00_l.jpg',
            name:'add',
            text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
            type:'Add-on',
            dis:'50%',
            price:'4.99',
            oldprice:'9.99',
            date:null,
            inw:false,
            ro:false,
        },      {   mainname:"",
        gener:['fps','ac','adv'],
        features:['sp','cp'],
        img:'https://cdn.vox-cdn.com/thumbor/FtAfpk9Hfhs1Bjq0puMqvrVtTsU=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
        logoimg:'https://game.watch.impress.co.jp/img/gmw/docs/1270/728/image00_l.jpg',
        name:'add',
        text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
        type:'Add-on',
        dis:'50%',
        price:'4.99',
        oldprice:'9.99',
        date:null,
        inw:false,
        ro:false,
    },      {   mainname:"",
    gener:['fps','ac','adv'],
    features:['sp','cp'],
    img:'https://cdn.vox-cdn.com/thumbor/FtAfpk9Hfhs1Bjq0puMqvrVtTsU=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
    logoimg:'https://game.watch.impress.co.jp/img/gmw/docs/1270/728/image00_l.jpg',
    name:'add',
    text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
    type:'Add-on',
    dis:'50%',
    price:'4.99',
    oldprice:'9.99',
    date:null,
    inw:false,
    ro:false,
    },      {   mainname:"",
    gener:['fps','ac','adv'],
    features:['sp','cp'],
    img:'https://cdn.vox-cdn.com/thumbor/FtAfpk9Hfhs1Bjq0puMqvrVtTsU=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
    logoimg:'https://game.watch.impress.co.jp/img/gmw/docs/1270/728/image00_l.jpg',
    name:'add',
    text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
    type:'Add-on',
    dis:'50%',
    price:'4.99',
    oldprice:'9.99',
    date:null,
    inw:false,
    ro:false,
    },      {   mainname:"",
    gener:['fps','ac','adv'],
    features:['sp','cp'],
    img:'https://cdn.vox-cdn.com/thumbor/FtAfpk9Hfhs1Bjq0puMqvrVtTsU=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68634511/epic_logo_black.0.jpg',
    logoimg:'https://game.watch.impress.co.jp/img/gmw/docs/1270/728/image00_l.jpg',
    name:'add',
    text:'It’s time to live by your own rules and become the most feared man in The City. Satisfy your hunger for power and wealth as Rais, a powerful warlord who strikes fear in the hearts of all',
    type:'Add-on',
    dis:'50%',
    price:'4.99',
    oldprice:'9.99',
    date:null,
    inw:false,
    ro:false,
    },   
        ],
        game_disc:[
           game_discs.get('cc'),
            game_discs.get('gbb'),
            game_discs.get('ef'),
            game_discs.get('as'),
            game_discs.get('r'),
            game_discs.get('gfb'),
            game_discs.get('ac'),
            game_discs.get('quc'),
            game_discs.get('hr'),
            game_discs.get('chc'),
            game_discs.get('dc'),
        ]  
    })
}



let price_filt = ['free',"un-10","un-20","un-30","up-14",'dis']
let new_old = [true,false]

games_list.sort((a,b)=>{
    if(a.name.toLocaleLowerCase().charAt(0) > b.name.toLocaleLowerCase().charAt(0) ){
        return 1
    }
    else return -1
})

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
        dummy:game.dummy,
        col:game.col,
        event:event[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
        gener:game.gener||[geners[Math.floor(Math.random() * (3 - 0 + 1)) + 0]],
        features:game.features||['mp','cs'],
        new:new_old[Math.floor(Math.random() * (1 - 0 + 1)) + 0]
    })
}



export default games;
