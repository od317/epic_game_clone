<script setup> 

import {ref} from 'vue'

import game_lists from '../gamelist'
import gamesc from '../games'
import {useRouter} from 'vue-router'

let router = useRouter()


 let wlist = ref( localStorage.getItem('wish_list') != undefined ? JSON.parse(localStorage.getItem('wish_list')) : [])

 let cart = ref( localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : [])


 let addcart = (game)=>{


for(let g of cart.value){
 if(g.name === game.name)
 return
}

cart.value.push(game)
localStorage.setItem('cart',JSON.stringify(cart.value))

}

 let check_in_cart = (game)=>{
        for(let g of cart.value){
            if(game.name == g.name)
            return true
        }
        return false
 }
 

 let gamesgrid2 = ref(wlist.value)

 let george= ref(false)



 let event = ['2kpub','febs','thq']
       let geners = ['fps','adv','ac','ac/adv']
       let price_filt = ['free',"un-10","un-20","un-30","up-14",'dis']
       let new_old = [true,false]
       let all_filters = [event,price_filt,geners]
       






   let drop_list = ref([
    {
        type:'Events',
        num:0,
        on:false,
        content:[
            {
                name:'2k pub',
                set:'2kpub',
                num:0
            },
            {
                name:'febs',
                set:'febs',
                num:1
            },
            {
                name:'thq',
                set:'thq',
                num:2
            }
        ]
    },
    {
        type:'price',
        num:1,
        on:false,
        content:[
            {
                name:'free',
                set:'free',
                num:3
            },
            {
                name:'under_10',
                set:'un-10',
                num:4
            },
            {
                name:'under_20',
                set:'un-20',
                num:5
            },
            {
                name:'under_30',
                set:'un-30',
                num:6
            },
            {
                name:'14.99 and above',
                set:'up-14',
                num:7
            }
            ,
            {
                name:'disconted',
                set:'dis',
                num:8
            }
        ]
    },
    {
        type:'gener',
        num:2,
        on:false,
        content:[
            {
                name:'fps',
                set:'fps',
                num:9
            },
            {
                name:'adv',
                set:'adv',
                num:10
            },
            {
                name:'ac',
                set:'ac',
                num:11
            },
            {
                name:'ac/adv',
                set:'ac/adv',
                num:12
            }
        ]
    }
   ])

    

   let filters = ref(['all','all','all','all','all','all'])
   let geo = ref([])
       
   let filter_num = ref(0)
   let drop_events = ref(false)
   let drop_price = ref(false)
   let drop_genre = ref(false)
   let drop_features = ref(false)
   let drop_types = ref(false)
   let drop_platform = ref(false)


   let show = ref('random')
   let dis_show = ref(false)
   let show_val = ref('random')

 let filter = (f,poss)=>{
        let find = -1
        for(let drop of drop_list.value){
            for(let op of drop.content){
                if(op.set == f ){
                    filters_style.value[op.num]= !filters_style.value[op.num]
                    find= op.num
                }
            }
            if(find != -1){
               
               for(let op of drop.content){
                   if(op.num == find) continue
                   filters_style.value[op.num]= false
               }

               break
            }
        }

        filters.value[poss] = filters.value[poss] == f ? 'all' :f
         
        if(!george){window.scrollTo({
                top:0,
                behavior: 'smooth'
            })
            }

        filter_helper()

        filter_num.value=0
        for(let i of filters.value){
            if(i!=='all'){
               filter_num.value+=1
            }
        }
        show_c(show_val.value)
       
    }

    let filter_helper = ()=>{

        gamesgrid2.value = wlist.value.filter(i=>{
              let c1 = false, c2= false, c3 = false , c4=false , c5=false, c6=false, c7=false , c8=false
              
              c1 = filters.value[0] == 'all' || i.event == filters.value[0]
              
              let gener = false 
              
              for(let g of i.gener){
                if(g===filters.value[2]){
                gener=true
                break
                }
              }

              c3 = filters.value[2] == 'all' || gener
              switch(filters.value[1]){
                case "un-10":
                    c2 = i.price<=10
                    break
                case "un-20":
                    c2 = i.price<=20
                    break
                case "un-30":
                c2 = i.price<=30
                    break
                case "up-14":
                c2 = i.price>=14
                    break
                case 'free':
                    c2= i.price === 0
                    break
                case 'dis':
                    c2 = i.dis
                    break        
                default:
                    c2=true
                    break                
              }
              let features = false

              for(let f of i.features){
                if(f===filters.value[3]){
                features=true
                break
                }
              }

              c4 = filters.value[3] == 'all' || features

              return c1&&c2&&c3&&c4
       })
    }

  
    
    let show_c = (c)=>{

         show_val.value = c
         show.value=c
         switch(c){
            case 'alpha':
            gamesgrid2.value.sort((a,b)=>{
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;                
                })
                break
            case 'lh':
            gamesgrid2.value.sort((a,b)=>{
                    return a.price - b.price
                })
                break
            case 'hl':
            gamesgrid2.value.sort((a,b)=>{
                return b.price - a.price

                })
                break        
            default:
            gamesgrid2.value = wlist.value
             filter_helper()
                break
         }
        
       



    }
    

    let reset_filt = ()=>{
        filters.value = (['all','all','all','all','all','all'])
        filter_helper()
        filter_num.value=0
        show_c(show_val.value)
    }
    let filters_style = new ref(new Array(all_filters[0].length+all_filters[1].length+all_filters[2].length))
       filters_style.value.fill(false)




 let remove = (game)=>{

       wlist.value = wlist.value.filter(i=>{
        return i !== game
       })
       gamesgrid2.value = gamesgrid2.value.filter(i=>{
        return i !== game
       })
       game.inw=false
       for(let gl of game_lists){
        for(let gl2 of gl){
            for(let g of gl){
                for(let g2 of g){
                    if(g2.name == game.name)
                       if(game.type=='basegame')
                       g2.inw = false
                }
            }
        }
       }
       if(game.type=='basegame')
       gamesc.get(game.name).inw=false
       localStorage.setItem('wish_list',JSON.stringify(wlist.value))

 }


 let wish_push_router = (game)=>{
       if(game.type=='basegame')      
       router.push('game/'+game.name)
       else
       router.push('game/'+game.mainname)
 }

 window.scrollTo({top:0})

</script>



<template>

    








<div class=" hidden md:flex w-full justify-center md:pt-[2rem] mb-[4rem]">
           <div class="md:grid lg:w-[78%] md:w-[90%] md:row-start-1 md:row-end-1   md:grid-cols-4">

                       
            <div class="md:text-lg md:row-span-1  md:col-span-3 md:w-[95%]">
                    
                <button @click="dis_show = !dis_show" class="text-white relative">

                <label for=""  class=" cursor-pointer text-gray-500">show:</label>
                <label for="" class="text-white cursor-pointer ml-1">{{ show }}</label>
                <div :class="` absolute z-10 bg-dark3 w-[250%] rounded-sm ${ !dis_show ? 'hidden':'block' } `">
                
                    <div class="flex flex-col justify-start items-start p-[1rem] text-[1rem] text-white">
                        <button @click="show_c('random')">random</button>
                        <button @click="show_c('alpha')">alpha</button>
                        <button @click="show_c('hl')"> h to l</button>
                        <button @click="show_c('lh')"> l to h</button>
                    </div>
                
                </div>

                </button>
                
                <div :class="` ${wlist.length>0 ? 'flex' : 'hidden'}  flex-col  `">

                  <div v-for="game in gamesgrid2" :key="game" class="bg-dark2 p-[1rem] mt-[1.2rem]
                    flex flex-col hover:bg-gray-400 transition-all duration-150 hover:bg-opacity-30 cursor-pointer"
                    @Click="wish_push_router(game)">
                          
                    <div class="flex flex-row justify-between text-white ">   
                        
                        <div class="flex flex-row">
                               <img   class="w-[20%] mr-[1rem] rounded-md" :src="game.logoimg"/>
                               <div class="flex flex-col h-full">
                                    <label v-if="game.type == 'basegame'" class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem] cursor-pointer"> Base game </label>
                                    <label v-else class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem] cursor-pointer"> Add-on </label>
                                    <label class="text-start text-[1.2rem] cursor-pointer">{{ game.name }}</label>
                                </div>
                           </div>

                           <div class="flex  text-[1rem] flex-col">
                        <div class="flex flex-row">
                        <label v-if="game.dis" for="" class="text-white text-[.7rem] h-fit bg-blue1 rounded-md p-1 px-2 mr-3 cursor-pointer">{{game.dis}}</label>
                          <label v-if="game.oldprice" for="" class="text-gray-500 mr-2 line-through cursor-pointer">${{ game.oldprice }}</label>
                          <label for="" class="text-white cursor-pointer">${{ game.price }}</label>
                        </div>
                          <label class="text-white mt-[.5rem] cursor-pointer">sales end at 43/12/21 31:13</label>

                        </div> 

                        </div>
                        

                 
                         <div class="flex flex-row justify-end items-center">
                    <button v-on:click.stop @click="remove(game)" class="border-b-[.1rem] text-[.7rem] text-gray-400 text-start hover:text-white w-fit h-fit cursor-pointer">Remove</button>

                    <button v-on:click.stop @click="addcart(game)" :class="`w-full ${check_in_cart(game)? 'hidden':''} w-[20%] border-[.1rem] border-gray-400 
                    text-center text-white text-[.9rem] py-[.8rem] ml-[1rem] transition-all duration-150 hover:bg-zinc-600  rounded-md cursor-pointer `" >Add to cart</button>

                    <router-link v-on:click.stop v-if="check_in_cart(game)" class="w-[20%] border-[.1rem] border-gray-400 
                    text-center text-white text-[.9rem] py-[.8rem] ml-[1rem]  transition-all duration-150 hover:bg-zinc-600  rounded-md "  to="cart"><button :class="`w-full cursor-pointer ${!check_in_cart(game)? 'hidden':''}  `">view in cart</button></router-link>


                         </div>  

                    
                    </div>




                </div>
                <div :class="`${wlist.length>0 ? 'hidden' : ''} text-white flex flex-row items-center`">
                    
                    <label class="text-center mt-[3rem]" for=""> You haven't added anything to your wishlist yet.</label>

                    </div>
            </div>





            
            <div class="hidden md:inline-block col-span-1   text-white w-[90%] text-sm">
            
            <div class="flex flex-row text-sm mb-[2rem]">
                    
                <label class="flex-grow">Filters <label v-if="filter_num>0" for="">({{ filter_num }})</label></label>
                 <div v-if="filter_num !=0" class="inline-block">
                    <button @click="reset_filt()">RESET</button>
                </div>
            </div>



         
                <div v-for="drop in drop_list">
                        <button @click="drop.on = !drop.on" class=" cursor-pointer text-white flex items-start justify-between px-[1rem] py-[1rem] border-t-2 border-gray-400 text-sm  w-full">
                            <label class="cursor-pointer" for="">{{ drop.type }}</label>
                            <label :class="`cursor-pointer transition-all flex items-center text-center justify-center duration-300 ${drop.on? ' rotate-180':'' }`"><ion-icon  name="arrow-dropdown"></ion-icon></label>
                        </button>
                        <div :class="`flex flex-col items-start text-sm py-[.4rem] cursor-pointer  text-gray-400  ${ drop.on ?'block':'hidden'}`">

                                  <button v-for="type in drop.content" 
                                  @click="filter(type.set,drop.num)" :class="`group flex flex-row py-[.9rem] px-[1rem] text-sm cursor-pointer w-full text-start ${ filters[drop.num] == type.set ? 'bg-dark2 rounded-md text-white':''}`">
                                    <label class="flex-grow cursor-pointer group-hover:text-white">{{ type.name }}</label> 
                                    <label class="cursor-pointer" v-if="filters[drop.num] == type.set" ><ion-icon name="checkmark"></ion-icon></label>
                                  </button>

                        </div>
                </div>    
        </div>





                


           </div>
       </div>







<div :class="`${george? '':'hidden'} text-white pt-[1.5rem]  flex flex-col items-center inset-0 md:hidden absolute w-screen h-fit min-h-screen  bg-dark1 z-50 `">
                
                <div class="w-full mb-[.8rem] px-[1.5rem]">
                    <label for="">Filters</label>
                     <div v-if="filter_num !=0" class="ml-[.5rem] inline-block">
                        ({{ filter_num }})
                    </div>
                </div>
    

    
                <div class="flex-grow w-full">
                    <div class="py-[1.5rem] w-full px-[1.5rem] border-t-[.1rem] border-gray-400" v-for="drop in drop_list">
                            <button @click="drop.on = !drop.on" class="cursor-pointer  text-white flex items-start justify-between   w-full">
                                <label for="">{{ drop.type }}</label>
                                <ion-icon name="arrow-dropdown"></ion-icon>
                            </button>
                            <div :class="`flex flex-col items-start ${ drop.on ?'block  pt-[.5rem]':'hidden'}`">
    
                                      <button v-for="type in drop.content" 
                                      @click="filter(type.set,drop.num)"
                                       :class="` ${ filters_style[type.num]? 'bg-dark2':''} flex justify-between items-center px-[.7rem] text-start py-[.75rem] 
                                        w-full mt-[1rem] cursor-pointer ${geo[type.num]? '': '' } `">
                                           <label for="">{{ type.name }}</label>
                                            <label :class="` ${ !filters_style[type.num]? 'hidden':' '} `"><ion-icon name="checkmark"></ion-icon></label>
                                      </button>
    
                            </div>
                    </div>    
                </div>
    
                    <div class="bg-dark2 w-full py-[1rem] px-[2rem] flex  items-center justify-self-end">
                    
                    <button class="w-[40%] text-start" @click="reset_filt()">Clear</button>
                    
                    <button class=" bg-blue1 p-[1rem] rounded-md" @click="george=false">Done</button>
                   
                   </div>
    
          </div>
    
           <div v-if="!george" class="md:hidden mb-[4rem] flex flex-col px-[1.5rem] ">
    
    
                <div class="flex flex-row justify-between items-center">
    
                     <label class="text-white text-[2rem]">WishList</label>
    
                    <button @click="george= !george" class="text-[1.1rem] flex items-center text-center text-white">Filters 
                        <div v-if="filter_num !=0" class="mx-[.5rem] inline-block">
                        ({{ filter_num }})
                        </div>
                        <ion-icon class="ml-[.2rem]" name="funnel"></ion-icon></button>
                </div>
    
    
                <div class="flex items-start mt-[4rem] justify-start flex-col">
    
                        <button @click="dis_show = !dis_show" class="text-white text-[1.1rem] relative">
            
                            <label for=""  class=" cursor-pointer text-gray-500">show:</label>
                            <label for="" class="text-white cursor-pointer ml-1">{{ show }}^</label>
                            <div :class="` absolute z-10 bg-dark3 w-[250%] rounded-sm ${ !dis_show ? 'hidden':'block' } `">
                        
                                <div class="flex flex-col justify-start items-start p-[1rem] text-[1rem] text-white">
                                    <button @click="show_c('random')">random</button>
                                    <button @click="show_c('alpha')">alpha</button>
                                    <button @click="show_c('hl')"> h to l</button>
                                    <button @click="show_c('lh')"> l to h</button>
                                </div>
                        
                        </div>

                    </button>

                    <div @Click="wish_push_router(game)" v-for="game in gamesgrid2" :key="game" class="bg-dark2 p-[1rem] mt-[1.2rem]
                    flex flex-col">
                          
                    <div class="flex flex-row text-white">   
                               <img  class="w-[20%] mr-[1rem] rounded-md" :src="game.logoimg"/>
                                <div class="flex flex-col h-full">
                                    <label class="py-[.3rem] px-[.5rem] w-fit bg-dark4 rounded-md text-center text-[.8rem]"> Base game </label>
                                    <label class="text-start text-[1.2rem]">{{ game.name }}</label>
                                </div>
                           </div>

                    <div class="flex mt-[1.5rem] flex-row">
                        
                        <label v-if="game.dis" for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">{{game.dis}}</label>
                          <label v-if="game.oldprice" for="" class="text-gray-500 mr-2 line-through">${{ game.oldprice }}</label>
                          <label for="" class="text-white">${{ game.price }}</label>

                        </div> 
                           
                    <label class="text-white mt-[.5rem]">sales end at 43/12/21 31:13</label>

                    <button @click.stop @click="addcart(game)" :class="`w-full ${check_in_cart(game)? 'hidden':''} border-[.1rem] border-gray-400 
                    text-center text-white text-[1.1rem] py-[.8rem] mt-[2rem] rounded-md`">Add to cart</button>

                    <router-link @click.stop  to="cart"><button :class="`w-full ${!check_in_cart(game)? 'hidden':''} border-[.1rem] border-gray-400 
                    text-center text-white text-[1.1rem] py-[.8rem] mt-[2rem] rounded-md`">view in cart</button></router-link>


                    <button @click.stop @click="remove(game)" class="border-b-[.1rem] text-gray-400 text-start w-fit mt-[1.2rem]">Remove</button>

                    </div>
            
</div>
    

    
    
           </div>



</template>


