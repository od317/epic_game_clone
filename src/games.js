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
            name:'farcry6',
            logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
            img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
            ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
            bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
            src:'https://images3.alphacoders.com/108/thumb-1920-1087064.jpg',
            srcm:"https://images3.alphacoders.com/108/thumb-1920-1087064.jpg",
            slide_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/FC6_Logo.png/1200px-FC6_Logo.png",
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
        name:'ac valhal',
        logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
        src:'data:image/jpeg;base64,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',
      srcm:"data:image/jpeg;base64,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",
      slide_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Assassin%27s_Creed_Valhalla_text_logo.svg/1200px-Assassin%27s_Creed_Valhalla_text_logo.svg.png",
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
        name:'Elden Ring',
        logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
        src:'https://images8.alphacoders.com/118/1186452.jpg',
        srcm:"https://images8.alphacoders.com/118/1186452.jpg",
        slide_img:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Elden_Ring_-_Title.png",
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
        name:'distiny 2',
        logoimg:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S2_1200x1600-96a53bbf6b94c5c93e568faebeffeb69?h=480&quality=medium&resize=1&w=360',
        img:'https://cdn2.unrealengine.com/egs-dishonored2-arkanestudios-ic1-400x400-ac105c61a65b.png?h=270&quality=medium&resize=1&w=480',
        ach_img:'https://cdn1.epicgames.com/offer/1dcddbcc334945c48353b75a8fce5e5e/EGS_Dishonored2_ArkaneStudios_S1_2560x1440-9b6ce619bb7247b4ed0f637dc6eb51c1?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn.vox-cdn.com/thumbor/BRbyogYROnwyRqWY6cnch_wouS0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7843013/emilypowers.jpg',
        src:'https://cdn2.unrealengine.com/egs-destiny-2-lightfall-carousel-desktop-1280x702-e2432bee71b8.jpg?h=720&quality=medium&resize=1&w=1280',
        srcm:"https://cdn2.unrealengine.com/egs-destiny-2-lightfall-carousel-desktop-1280x702-e2432bee71b8.jpg?h=720&quality=medium&resize=1&w=1280",
        slide_img:"https://upload.wikimedia.org/wikipedia/fr/thumb/f/ff/No_Man%27s_Sky_Logo.svg/1200px-No_Man%27s_Sky_Logo.svg.png",
        theme_color:'#fcfcfc',
        price:'59.99',
        dis:null,
        oldprice:null,
        rate:5.0,
        dev:'Arkane Studios',
        pub:'Bethesda Softworks',
        rdate:"11/03/22",
        indate:"11/11/6",
        last:true,
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
]

let event = ['2kpub','febs','thq']
let geners = ['fps','adv','ac','ac/adv']
let price_filt = ['free',"un-10","un-20","un-30","up-14",'dis']
let new_old = [true,false]

for(let game of games_list){
    games.set(game.name,{
        name:game.name,
        dev:game.dev,
        pub:game.pub,
        rdate:game.rdate,
        indate:game.indate,
        price:(Math.floor(Math.random() * (60 - 0 + 1)) + 0),
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
