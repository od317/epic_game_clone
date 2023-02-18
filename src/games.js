let games = new Map()
let games_list =[
    
    {
    name:'daying light2',
    img:'https://cdn2.unrealengine.com/egs-dyinglight2stayhuman-techland-ic5-400x166-55b2799d56f3.png?h=270&resize=1&w=480',
    ach_img:'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S3_2560x1440-f1dcd15207f091674615ccb4bd9dc3c7',
    bottom_img:'https://cdn2.unrealengine.com/dl2-1st-anniversary-roadmap-1920x1080-eng-1920x1080-bb5b3ec5de61.jpg',
    theme_color:'#ed0000',
    rate:4.6,
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
        name:'The Last of Us Part I',
        img:'https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-ic1-400x108-afff3c9ed58a.png?h=270&quality=medium&resize=1&w=480',
        bottom_img:'https://cdn2.unrealengine.com/egs-thelastofusparti-naughtydogllc-g2-00-3840x2160-e2632aa5352f.jpg',
        theme_color:'#0062ff',
        rate:4.9,
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
    }

]

for(let game of games_list){
    games.set(game.name,{
        name:game.name,
        img:game.img,
        ach_img:game.ach_img,
        bottom_img:game.bottom_img,
        theme_color:game.theme_color,
        rate:game.rate,
        imgs:game.imgs,
        achievements:game.achievements,
        editions:game.editions,
        adds:game.adds,
        game_disc:game.game_disc

    })
}



export default games;