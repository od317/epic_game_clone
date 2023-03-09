<script setup>

   import { defineProps, reactive, toRef,ref,watch} from "vue";
   import games from '../../../games'
   import { useRouter } from "vue-router";
   import {useRoute} from "vue-router";

   let router = useRouter()

        const props = defineProps({
        gamegrid: Array,
        type: String
        });

        let gamesgrid = ref(props.gamegrid) 

 
        let uri = window.location.href.split('?');
        
        let key_word_input = ref(useRoute().query.q||'')
            
        

      for(let g of gamesgrid.value){
        let wlist2 = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : [] 
        for(let g2 of wlist2){
              if(g.name == g2.name){
                  g.inw = true
                  break
              }
          }
        }


       let type = props.type



       


       let event = ['2kpub','febs','thq']
       let geners = ['fps','adv','ac','ac-adv']
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
                set:'ac-adv',
                num:12
            }
        ]
    },
    {
        type:'features',
        num:3,
        on:false,
        content:[
            {
                name:'Controller Support',
                set:'cp',
                num:13
            },
            {
                name:'Cloud Saves',
                set:'cs',
                num:14
            },
            {
                name:'Single Player',
                set:'sp',
                num:15
            },
            {
                name:'Multiplayer',
                set:'mp',
                num:16
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

   let gamesgrid2 = ref(gamesgrid.value)

   let end_num = ref(Math.ceil(gamesgrid2.value.length/12))
   let pos=ref(1)
   let start = ref(0)
   let end = ref(11)


   if(key_word_input.value!==""){

        gamesgrid2.value=[]
        for(let g of gamesgrid.value){
            if(g.name.substring(0,key_word_input.value.length).toLowerCase() === key_word_input.value.toLowerCase() )
            gamesgrid2.value.push(g)
        }
        end_num.value = Math.ceil(gamesgrid2.value.length/12)


      }

   let view_grid = ref(gamesgrid2.value.slice(0,12))

   let change = (new_pos)=>{

            end.value = (new_pos*12) 
            start.value = end.value - 12 > 0 ?  end.value - 12 : 0
            pos.value = new_pos
            view_grid.value = gamesgrid2.value.slice(start.value,end.value)
            
            
        window.scrollTo({ top: 0, behavior:'smooth'})

    }


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
        pos.value= 1
        start.value = 0
        end.value= 11
        view_grid.value = gamesgrid2.value.slice(start.value,end.value+1)

    }

    let filter_helper = ()=>{

        gamesgrid2.value = gamesgrid.value.filter(i=>{
                   
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
    end_num.value = Math.ceil(gamesgrid2.value.length/12)
    }

  
    
    let show_c = (c)=>{

         show_val.value = c
         show.value=c
         switch(c){
            case 'new':
                gamesgrid2.value = gamesgrid2.value.filter(i=>{
                    return i.new
                })
                break
            case 'cs':
                gamesgrid2.value = gamesgrid2.value.filter(i=>{
                    return i.cs
                })
                break
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
             gamesgrid2.value = gamesgrid.value
             filter_helper()
                break
         }
        
        pos.value= 1
        start.value = 0
        end.value= 12
        view_grid.value = gamesgrid2.value.slice(start.value,end.value)


    }
    

    let reset_filt = ()=>{
        filters.value = (['all','all','all','all','all','all'])
        filter_helper()
        filter_num.value=0
        show_c(show_val.value)
    }

    let george = ref(false)

       let count = 0
       let br = false
       let filters_style = new ref(new Array(all_filters[0].length+all_filters[1].length+all_filters[2].length))
       filters_style.value.fill(false)


       for(let list of all_filters){
        for(let filt of list){
            if(type === filt){
                 filter(type,count)
                 br = true
                 break
            }
        }
        if(br)break
        count++
       }
       type=''
    
      


let add_wish = (game2)=>{

   let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []


for(let g of wlist){
 if(g.name === game2.name)
 return
}
let game = games.get(game2.name)
if(game)
wlist.push(game)

game2.ro=true
let s = setTimeout(()=>{
    game2.ro=false
    game2.inw=true
    games.get(game2.name).inw=true
  },1000)

localStorage.setItem('wish_list',JSON.stringify(wlist))

}



let remove_wish = (game)=>{

  let wlist = localStorage.getItem('wish_list')? JSON.parse(localStorage.getItem('wish_list')) : []
  wlist = wlist.filter(i=>{
   return i.name !== game.name
  })
  game.ro=true
  let s = setTimeout(()=>{
   game.inw=false
   game.ro=false
   games.get(game.name).inw=false
  },1000)
  localStorage.setItem('wish_list',JSON.stringify(wlist))

}






      watch(key_word_input,()=>{

 
      if(key_word_input.value!==""){

        gamesgrid2.value=[]
        for(let g of gamesgrid.value){
            if(g.name.substring(0,key_word_input.value.length).toLowerCase() === key_word_input.value.toLowerCase() )
            gamesgrid2.value.push(g)
        }


      }

      else{
        gamesgrid2.value = gamesgrid.value
      }

      view_grid.value = gamesgrid2.value.slice(0,12)
      end_num.value = Math.ceil(gamesgrid2.value.length/12)

      })
      
      if(useRoute().query.filter){
        let is =false
        for(let o of drop_list.value){
            for(let c of o.content){
                if(c.set === useRoute().query.filter ){
                    filter(useRoute().query.filter,o.num)            
                    drop_list.value[o.num].on=true
                    is=true
                    break
                }
            }
            if(is) break
        }
      }

    
      let route_push_game = (game)=>{

        router.push('/game/'+game)
        

      }

       window.scrollTo({
        top:0,
      })

    

</script>



<template>





       <div class=" hidden md:flex w-full justify-center mb-[4rem] md:pt-[2rem]">
           <div class="md:grid md:w-[78%] md:row-start-1 md:row-end-1   md:grid-cols-4">

                       
            <div class="md:text-lg md:row-span-1  md:col-span-3 md:w-[95%]">
                    
                <button @click="dis_show = !dis_show" class="text-white relative">

                <label for=""  class=" cursor-pointer text-gray-500">show:</label>
                <label for="" class="text-white cursor-pointer ml-1">{{ show }}</label>
                <div :class="` absolute z-40 bg-dark3 w-[250%] rounded-sm ${ !dis_show ? 'hidden':'block' } `">
                
                    <div class="flex flex-col justify-start items-start p-[1rem] text-[1rem] text-white">
                        <button @click="show_c('random')">random</button>
                        <button @click="show_c('alpha')">alpha</button>
                        <button @click="show_c('hl')"> h to l</button>
                        <button @click="show_c('lh')"> l to h</button>
                    </div>
                
                </div>

                </button>
                
                <div v-if="view_grid.length<=0" class="text-white  w-full flex flex-col items-center justify-center text-center text-[2rem] pt-[1rem] " >
                         <label for="">no results found</label>    
                         <label class="text-[1rem] mt-[.5rem] text-gray-400" for="">Unfortunately I could not find any results matching your search.</label>
                        </div>

                <div v-else class="grid grid-cols-4 gap-x-[1rem]">

                        <div  @Click="route_push_game(game.name)" v-for="game in view_grid" class="  w-full py-[1rem]  ">
                                      
                                   <div class="w-[100%]  group rounded-md relative cursor-pointer">
                                      
                                    <div  class="bg-gray-400 absolute rounded-md w-[100%] h-[100%] opacity-0 group-hover:opacity-20 transition-all duration-200 cursor-pointer"></div>
                                 
                                    
                                    <div class="absolute flex w-full justify-end items-start p-3 cursor-pointer"> 
                            
                            <div v-if="!game.inw"  class=" 
                             relative rounded-full z-30 text-2xl 
                             opacity-0 group-hover:opacity-100  transition-all duration-100 
                             after_wish">
                                 <button @click.stop.prevent class="group relative " @click="add_wish(game)">
                                   <ion-icon  :class="` ${game.ro ? ' rotate-[360deg] transition-all duration-1000':''} bg-white   text-black rounded-full z-30 `" name="add-circle">
                                   </ion-icon>
                           

                                 </button>
                                 
                                 </div>



                                 <div v-if="game.inw"  class=" 
                             relative rounded-full z-30 text-2xl 
                             opacity-0 group-hover:opacity-100  transition-all duration-100 
                             after_wish2">
                                 <button @click.stop.prevent class="  group " @click="remove_wish(game)">
                                   <ion-icon :class="`${game.ro ? ' rotate-[-360deg] transition-all duration-1000':''} bg-white  text-black  rounded-full z-30` " name="checkmark-circle">
                                   </ion-icon>
                           
                                 </button>
                                 
                                 </div>


                             </div>


                                    <img  :src="game.logoimg" class="w-[100%]  h-[16rem] rounded-md" alt="">
                                     

                                     

                                   </div>
                                     <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-2'}`">
                                        <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                            <label for="" class="w-full text-lg text-white">{{ game.name }} </label>
                                            <div class="flex w-full mt-2 items-center">
                                                <label v-if="game.dis" for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">{{game.dis}}</label>
                                                <label v-if="game.dis" for="" class="text-gray-500 text-[.8rem] mr-2 line-through">${{ game.oldprice }}</label>
                                                <label for="" class="text-white text-[.8rem]">${{ game.price }}</label>
                                            </div>





                                    </div>


                        </div>

                </div>

            </div>





            
                       <div class="hidden md:inline-block col-span-1   text-white w-[90%] text-sm">
            
                        <div class="flex flex-row text-sm">
                                
                            <label class="flex-grow">Filters <label v-if="filter_num>0" for="">({{ filter_num }})</label></label>
                             <div v-if="filter_num !=0" class="inline-block">
                                <button @click="reset_filt()">RESET</button>
                            </div>
                        </div>
            
                        <div class="w-full  bg-dark2 my-[1rem] p-[.6rem] rounded-sm">
                                <ion-icon class=" translate-y-[10%] text-sm w-[8%] mr-[2%]" name="search"></ion-icon>
                                <input type="text" class=" w-[90%] text-sm bg-dark2 outline-none" placeholder="keywords" v-model="key_word_input">
                        </div>
            
                     
                            <div v-for="drop in drop_list">
                                    <button @click="drop.on = !drop.on" class=" cursor-pointer  flex items-start justify-between px-[1rem] py-[1rem] border-t-2 border-gray-400 text-sm text-gray-400  hover:text-white w-full">
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





                <div class="col-span-3 mt-[5rem] flex justify-center">
                       
                     <div v-if="end >= 48 && end <=(gamesgrid2.length - (3*12))" class="text-gray-500">
                             
                              <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>
                              <button @click="change(1)">1</button>
                              ...
                              <button @click="change(pos-1)" clas="ml-1">{{ pos-1 }}</button>
                              <button @click="change(pos)" class="text-white ml-1">{{ pos }}</button>
                              <button @click="change(pos+1)" class="ml-1">{{ pos+1 }}</button>
                              ...
                              <button @click="change(end_num)">{{end_num}}</button>
                              <button v-if="pos<20" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>
            
                     </div>  


                     <div v-else-if="end <=48" class="text-gray-500">
                    
                        <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>

                              <button @click="change(1)" :class="`${pos==1?'text-white':''} mx-1`">1</button>
                              <button v-if="end_num>=2" @click="change(2)" :class="`${pos==2?'text-white':''} ml-1`">2</button>
                              <button v-if="end_num>=3" @click="change(3)" :class="`${pos==3?'text-white':''} ml-1`">3</button>
                              <button v-if="end_num>=4" @click="change(4)" :class="`${pos==4?'text-white':''} ml-1`">4</button>
                              <button v-if="end_num>=5" @click="change(5)" :class="`${pos==5?'text-white':''} ml-1`">5</button>
                               <label v-if="end_num>5" for=""> ... </label>
                              <button v-if="end_num>5" @click="change(end_num)">{{end_num}}</button>
                              <button v-if="pos<end_num" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>

                     </div>
                    
                     <div v-else class="text-gray-400">
                        <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>

                        <button @click="change(1)" :class="`${pos==1?'text-white':''}`">1</button>
                        ...
                        <button @click="change(end_num-4)" :class="`${pos==end_num-4?'text-white':''} mx-1`">{{end_num-4}}</button>
                        <button @click="change(end_num-3)" :class="`${pos==end_num-3?'text-white':''} mx-1`">{{end_num-3}}</button>
                        <button @click="change(end_num-2)" :class="`${pos==end_num-2?'text-white':''} mx-1`">{{end_num-2}}</button>
                        <button @click="change(end_num-1)" :class="`${pos==end_num-1?'text-white':''} mx-1`">{{end_num-1}}</button>
                        <button @click="change(end_num)" :class="`${pos==end_num?'text-white':''} mx-1`">{{end_num}}</button>
                              <button v-if="pos<end_num" @click="change(pos+1)" class="ml-1"><ion-icon name="arrow-dropright"></ion-icon></button>

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

       <div v-if="!george" class="md:hidden flex flex-col px-[1.5rem] mt-[4rem]">


            <div class="flex flex-row justify-between items-center">

                   <button @click="dis_show = !dis_show" class="text-white text-[1.1rem] relative">

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

                <button @click="george= !george" class="text-[1.1rem] flex items-center text-center text-white">Filters 
                    <div v-if="filter_num !=0" class="mx-[.5rem] inline-block">
                    ({{ filter_num }})
                    </div>
                    <ion-icon class="ml-[.2rem]" name="funnel"></ion-icon></button>
            </div>




            <div class="flex justify-between flex-wrap">

                <div @Click="route_push_game(game.name)" v-for="game in view_grid" class=" group  py-[1rem] w-[48%] h-[100%] ">
                                      
                                      <div class="w-[100%]  rounded-md relative">
                                         
                                       <div class="bg-gray-400 absolute rounded-md w-[100%] h-[100%] opacity-0 group-hover:opacity-20 transition-all duration-200 cursor-pointer"></div>
                                        <img :src="game.logoimg" class="w-[100%] h-[16rem] rounded-md" alt="">
                                        
                                      </div>
                                        <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-[.2rem]'}`">
                                           <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                               <label for="" class="w-full text-[1rem] text-white">{{ game.name }} </label>
                                               <div class="flex w-full mt-2 items-center">
                                                   <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-[.3rem]">50%</label>
                                                   <label for="" class="text-gray-500 mr-[.2rem] line-through">$59.99</label>
                                                   <label for="" class="text-white">${{ game.price }}</label>
                                                   <label for="" class="text-white">{{ game.event }}</label>
                                                   <br>

                                               </div>
   
   
   
   
                                       </div>
   
   
                           </div>

            </div>



            <div class=" my-[2rem] flex justify-center">
                       
                <div v-if="end > 48 && end <=(gamesgrid2.length - (3*12))" class="text-gray-500">
                             
                             <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>
                             <button @click="change(1)">1</button>
                             ...
                             <button @click="change(pos-1)" clas="mx-1">{{ pos-1 }}</button>
                             <button @click="change(pos)" class="text-white mx-1">{{ pos }}</button>
                             <button @click="change(pos+1)" class="mx-1">{{ pos+1 }}</button>
                             ...
                             <button @click="change(end_num)">{{end_num}}</button>
                             <button v-if="pos<20" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>
           
                    </div>  


                    <div v-else-if="end <=48" class="text-gray-500">
                   
                       <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>

                             <button @click="change(1)" :class="`${pos==1?'text-white':''} mx-1`">1</button>
                             <button v-if="end_num>=2" @click="change(2)" :class="`${pos==2?'text-white':''} mx-1`">2</button>
                             <button v-if="end_num>=3" @click="change(3)" :class="`${pos==3?'text-white':''} mx-1`">3</button>
                             <button v-if="end_num>=4" @click="change(4)" :class="`${pos==4?'text-white':''} mx-1`">4</button>
                             <button v-if="end_num>=5" @click="change(5)" :class="`${pos==5?'text-white':''} mx-1`">5</button>
                              <label v-if="end_num>5" for=""> ... </label>
                             <button v-if="end_num>5" @click="change(end_num)">{{end_num}}</button>
                             <button v-if="pos<end_num" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>

                    </div>
                   
                    <div v-else class="text-gray-400">
                       <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>

                       <button @click="change(1)" :class="`${pos==1?'text-white':''}`">1</button>
                       ...
                             <button @click="change(end_num-4)" :class="`${pos==end_num-4?'text-white':''} mx-1`">{{end_num-4}}</button>
                             <button @click="change(end_num-3)" :class="`${pos==end_num-3?'text-white':''} mx-1`">{{end_num-3}}</button>
                             <button @click="change(end_num-2)" :class="`${pos==end_num-2?'text-white':''} mx-1`">{{end_num-2}}</button>
                             <button @click="change(end_num-1)" :class="`${pos==end_num-1?'text-white':''} mx-1`">{{end_num-1}}</button>
                             <button @click="change(end_num)" :class="`${pos==end_num?'text-white':''} mx-1`">{{end_num}}</button>
                             <button v-if="pos<end_num" @click="change(pos+1)" class="ml-1"><ion-icon name="arrow-dropright"></ion-icon></button>

                    </div>
                      
                  </div>


       </div>

 

</template>

