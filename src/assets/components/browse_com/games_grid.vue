<script setup>

   import { defineProps, reactive, toRef,ref } from "vue";


        const props = defineProps({
        gamegrid: Array,
        });

       /* let gamesgrid = props.gamegrid */

       let gamesgrid =[
  
       ]
       
       let event = ['none','2kpub','febs','thq']
       let geners = ['ac','adv','ac/adv','fps']
       let new_old = [true,false]
       for(let i=1;i<=240;i++){
        gamesgrid.push({
            name:i,
            price: Math.floor(Math.random() * (60 - 0 + 1)) + 0,
            img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg',
            event:event[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
            gener:geners[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
            new:new_old[Math.floor(Math.random() * (1 - 0 + 1)) + 0]    
        })
       }



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

   let show = ref('all')
   let dis_show = ref(false)
   let show_val = ref('all')

   let gamesgrid2 = ref(gamesgrid)
   let pos=ref(1)
   let start = ref(0)
   let end = ref(11)
   let view_grid = ref(gamesgrid2.value.slice(0,12))

   let change = (new_pos)=>{

            end.value = (new_pos*12) 
            start.value = end.value - 12 > 0 ?  end.value - 12 : 0
            pos.value = new_pos
            view_grid.value = gamesgrid2.value.slice(start.value,end.value)
            console.log(start.value+"  "+end.value+" "+pos.value+" ")
            for(let i in view_grid.value){
                console.log(i)
            }
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }


    let filter = (f,poss)=>{

        filters.value[poss] = filters.value[poss] == f ? 'all' :f
        window.scrollTo({
        top:0   ,
        behavior: 'smooth'
      })
        filter_helper()
        filter_num.value=0
        for(let i of filters.value){
            if(i!=='all')
               filter_num.value+=1
        }
        show_c(show_val.value)
        pos.value= 1
        start.value = 0
        end.value= 11
        view_grid.value = gamesgrid2.value.slice(start.value,end.value)

    }

    let filter_helper = ()=>{

        gamesgrid2.value = gamesgrid.filter(i=>{
                   
              let c1 = false, c2= false, c3 = false , c4=false , c5=false, c6=false, c7=false , c8=false
              
              c1 = filters.value[0] == 'all' || i.event == filters.value[0]
              
              c3 = filters.value[2] == 'all' || i.gener == filters.value[2] 

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
              return c1&&c2&&c3
       })
    }

  
    
    let show_c = (c)=>{

         show_val.value = c
         show.value=c
         switch(c){
            case 'new':
                console.log('new')
                gamesgrid2.value = gamesgrid2.value.filter(i=>{
                    return i.new
                })
                break
            case 'cs':
                console.log('cs')
                gamesgrid2.value = gamesgrid2.value.filter(i=>{
                    return i.cs
                })
                break
            case 'alpha':
                console.log('alpha')
                gamesgrid2.value.sort((a,b)=>{
                    return a.name - b.name
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
                break
         }
        
        pos.value= 1
        start.value = 0
        end.value= 11
        view_grid.value = gamesgrid2.value.slice(start.value,end.value)


    }
    

    let reset_filt = ()=>{
        filters.value = (['all','all','all','all','all','all'])
        filter_helper()
        filter_num.value=0
        show_c(show_val.value)
    }

    let george = ref(false)

    window.scrollTo({
        top: document.body.scrollHeight,
      })

</script>



<template>





       <div class=" hidden md:flex w-full justify-center md:pt-[2rem]">
           <div class="md:grid md:w-[78%] md:row-start-1 md:row-end-1   md:grid-cols-4">

                       
            <div class="md:text-lg md:row-span-1  md:col-span-3 md:w-[95%]">
                    
                <button @click="dis_show = !dis_show" class="text-white relative">

                <label for=""  class=" cursor-pointer text-gray-500">show:</label>
                <label for="" class="text-white cursor-pointer ml-1">{{ show }}</label>
                <div :class="` absolute z-10 bg-dark3 w-[250%] rounded-sm ${ !dis_show ? 'hidden':'block' } `">
                
                    <div class="flex flex-col justify-start items-start p-[1rem] text-[1rem] text-white">
                        <button @click="show_c('all')">All</button>
                        <button @click="show_c('new')">new</button>
                        <button @click="show_c('cs')">coming soon</button>
                        <button @click="show_c('alpha')">alpha</button>
                        <button @click="show_c('hl')"> h to l</button>
                        <button @click="show_c('lh')"> l to h</button>
                    </div>
                
                </div>

                </button>
                
                <div class="grid grid-cols-4 gap-[1rem]">

                        <div v-for="game in view_grid" class=" group w-full py-[1rem] h-[100%] ">
                                      
                                   <div class="w-[100%] h-[70%] rounded-md relative">
                                      
                                    <div class="bg-gray-400 absolute rounded-md w-[100%] h-[100%] opacity-0 group-hover:opacity-20 transition-all duration-200 cursor-pointer"></div>
                                     <img :src="game.img" class="w-[100%] h-[100%] rounded-md" alt="">
                                     
                                   </div>
                                     <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-2'}`">
                                        <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                            <label for="" class="w-full text-xl text-white">{{ game.name }} </label>
                                            <div class="flex w-full mt-2 items-center">
                                                <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-3">50%</label>
                                                <label for="" class="text-gray-500 mr-2 line-through">$59.99</label>
                                                <label for="" class="text-white">${{ game.price }}</label>
                                                <label for="" class="text-white">{{ game.event }}</label>
                                            </div>

                                            <label for="" class="text-white">{{ game.gener }}</label>
                                            <label for="" class="text-white">{{ game.new }}</label>



                                    </div>


                        </div>

                </div>

            </div>





            
                       <div class="hidden md:inline-block col-span-1  text-lg text-white w-[80%] ">
            
                        <div>filters
                             <div v-if="filter_num !=0" class="inline-block">
                                {{ filter_num }}
                                <button @click="reset_filt()">reset</button>
                            </div>
                        </div>
            
                        <div class="w-full bg-dark2 my-[1rem] p-[.5rem] rounded-md">
                                <input type="text" class=" w-[90%] bg-dark2" placeholder="keywords">
                        </div>
            
                     
                            <div v-for="drop in drop_list">
                                    <button @click="drop.on = !drop.on" class="mb-1 cursor-pointer text-white flex items-start justify-between p-[1rem] border-t-2 border-gray-400  w-full">
                                        <label for="">{{ drop.type }}</label>
                                        <ion-icon name="arrow-dropdown"></ion-icon>
                                    </button>
                                    <div :class="`flex flex-col items-start ${ drop.on ?'block':'hidden'}`">

                                              <button v-for="type in drop.content" 
                                              @click="filter(type.set,drop.num)" class=" cursor-pointer">
                                                    {{ type.name }}
                                              </button>

                                    </div>
                            </div>    
                    </div>





                <div class="col-span-3 mt-[5rem] flex justify-center">
                       
                     <div v-if="end >= 48 && end <=(180)" class="text-gray-500">
                             
                              <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>
                              <button @click="change(1)">1</button>
                              ...
                              <button @click="change(pos-1)" clas="ml-1">{{ pos-1 }}</button>
                              <button @click="change(pos)" class="text-white ml-1">{{ pos }}</button>
                              <button @click="change(pos+1)" class="ml-1">{{ pos+1 }}</button>
                              ...
                              <button @click="change(20)">20</button>
                              <button v-if="pos<20" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>
            
                     </div>  


                     <div v-else-if="end <=48" class="text-gray-500">
                    
                        <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>

                              <button @click="change(1)" :class="`${pos==1?'text-white':''} ml-1`">1</button>
                              <button @click="change(2)" :class="`${pos==2?'text-white':''} ml-1`">2</button>
                              <button @click="change(3)" :class="`${pos==3?'text-white':''} ml-1`">3</button>
                              <button @click="change(4)" :class="`${pos==4?'text-white':''} ml-1`">4</button>
                              <button @click="change(5)" :class="`${pos==5?'text-white':''} ml-1`">5</button>
                              ...
                              <button @click="change(20)">20</button>
                              <button v-if="pos<20" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>

                     </div>
                    
                     <div v-else class="text-gray-400">
                        <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>

                        <button @click="change(1)" :class="`${pos==1?'text-white':''}`">1</button>
                        ...
                        <button @click="change(16)" :class="`${pos==16?'text-white':''} ml-1`">16</button>
                              <button @click="change(17)" :class="`${pos==17?'text-white':''} ml-1`">17</button>
                              <button @click="change(18)" :class="`${pos==18?'text-white':''}ml-1`">18</button>
                              <button @click="change(19)" :class="`${pos==19?'text-white':''}ml-1`">19</button>
                              <button @click="change(20)" :class="`${pos==20?'text-white':''}ml-1`">20</button>
                              <button v-if="pos<20" @click="change(pos+1)" class="ml-1"><ion-icon name="arrow-dropright"></ion-icon></button>

                     </div>
                     
                    
                </div>
                


           </div>
       </div>

       
       <div :class="`${george? '':'hidden'} text-white pt-[1.5rem]  flex flex-col items-center inset-0 md:hidden absolute w-screen h-screen  bg-dark1 z-50 `">
                
            <div class="w-full mb-[.8rem] px-[1.5rem]">
                <label for="">Filters</label>
                 <div v-if="filter_num !=0" class="ml-[.5rem] inline-block">
                    ({{ filter_num }})
                </div>
            </div>

            <div class="  w-[90%] px-[1.5rem] bg-dark2 text-center flex items-center my-[1rem] py-[.5rem] rounded-md">
                <ion-icon class="mr-[.5rem]" name="search"></ion-icon>
                <input type="text" class="  w-[90%] bg-dark2" placeholder="keywords">
            </div>

            <div class="flex-grow w-full">
                <div class="py-[1.5rem] w-full px-[1.5rem] border-t-[.1rem] border-gray-400" v-for="drop in drop_list">
                        <button @click="drop.on = !drop.on" class="cursor-pointer  text-white flex items-start justify-between   w-full">
                            <label for="">{{ drop.type }}</label>
                            <ion-icon name="arrow-dropdown"></ion-icon>
                        </button>
                        <div :class="`flex flex-col items-start ${ drop.on ?'block pt-[1rem]':'hidden'}`">

                                  <button v-for="type in drop.content" 
                                  @click="filter(type.set,drop.num)"
                                   :class="` mt-[1rem] cursor-pointer ${geo[type.num]? '': '' } `">
                                        {{ type.name }}
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
                <label for="" class="text-white cursor-pointer ml-1">{{ show }}^</label>
                <div :class="` absolute z-10 bg-dark3 w-[250%] rounded-sm ${ !dis_show ? 'hidden':'block' } `">
                
                    <div class="flex flex-col justify-start items-start p-[1rem] text-[1rem] text-white">
                        <button @click="show_c('all')">All</button>
                        <button @click="show_c('new')">new</button>
                        <button @click="show_c('cs')">coming soon</button>
                        <button @click="show_c('alpha')">alpha</button>
                        <button @click="show_c('hl')"> h to l</button>
                        <button @click="show_c('lh')"> l to h</button>
                    </div>
                
                </div>

                </button>

                <button @click="george= !george" class="text-[1.1rem] flex items-center text-center text-white">Filters <ion-icon class="ml-[.2rem]" name="funnel"></ion-icon></button>
            </div>




            <div class="flex justify-between flex-wrap">

                <div v-for="game in view_grid" class=" group  py-[1rem] w-[48%] h-[100%] ">
                                      
                                      <div class="w-[100%] h-[70%] rounded-md relative">
                                         
                                       <div class="bg-gray-400 absolute rounded-md w-[100%] h-[100%] opacity-0 group-hover:opacity-20 transition-all duration-200 cursor-pointer"></div>
                                        <img :src="game.img" class="w-[100%] h-[100%] rounded-md" alt="">
                                        
                                      </div>
                                        <div :class="`${game.last ? 'hidden':'flex flex-col w-full mt-[.2rem]'}`">
                                           <label for="" class="w-full text-sm text-gray-600">Base game </label>
                                               <label for="" class="w-full text-[1rem] text-white">{{ game.name }} </label>
                                               <div class="flex w-full mt-2 items-center">
                                                   <label for="" class="text-white text-[.7rem] bg-blue1 rounded-md p-1 px-2 mr-[.3rem]">50%</label>
                                                   <label for="" class="text-gray-500 mr-[.2rem] line-through">$59.99</label>
                                                   <label for="" class="text-white">${{ game.price }}</label>
                                                   <label for="" class="text-white">{{ game.event }}</label>
                                               </div>
   
   
   
   
                                       </div>
   
   
                           </div>

            </div>



            <div class=" my-[2rem] flex justify-center">
                       
                       <div v-if="end >= 48 && end <=(180)" class="text-gray-500">
                               
                                <button class="mr-[1rem]" v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>
                                <button class="mr-[1rem]" @click="change(1)">1</button>
                                <label class="mr-[1rem]" for="">...</label>
                                <button @click="change(pos-1)" clas="ml-[1rem]">{{ pos-1 }}</button>
                                <button @click="change(pos)" class="text-white ml-[1rem]">{{ pos }}</button>
                                <button @click="change(pos+1)" class="ml-[1rem]">{{ pos+1 }}</button>
                                <label class="ml-[1rem]" for="">...</label>
                                <button class="ml-[1rem]" @click="change(20)">20</button>
                                <button class="ml-[1rem]" v-if="pos<20" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>
              
                       </div>  
  
  
                       <div v-else-if="end <=48" class="text-gray-500">
                      
                          <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>
  
                                <button @click="change(1)" :class="`${pos==1?'text-white':''} ml-[1rem]`">1</button>
                                <button @click="change(2)" :class="`${pos==2?'text-white':''} ml-[1rem]`">2</button>
                                <button @click="change(3)" :class="`${pos==3?'text-white':''} ml-[1rem]`">3</button>
                                <button @click="change(4)" :class="`${pos==4?'text-white':''} ml-[1rem]`">4</button>
                                <button @click="change(5)" :class="`${pos==5?'text-white':''} mx-[1rem]`">5</button>
                                ...
                                <button class="mx-[1rem]" @click="change(20)">20</button>
                                <button v-if="pos<20" @click="change(pos+1)"><ion-icon name="arrow-dropright"></ion-icon></button>
  
                       </div>
                      
                       <div v-else class="text-gray-500">
                          <button v-if="pos>1" @click="change(pos-1)"><ion-icon name="arrow-dropleft"></ion-icon></button>
  
                          <button class="mx-[1rem]" @click="change(1)" :class="`${pos==1?'text-white':''}`">1</button>
                          ...
                          <button @click="change(16)" :class="`${pos==16?'text-white':''} ml-[1rem]`">16</button>
                                <button @click="change(17)" :class="`${pos==17?'text-white':''} ml-[1rem]`">17</button>
                                <button @click="change(18)" :class="`${pos==18?'text-white':'' }ml-[1rem]`">18</button>
                                <button @click="change(19)" :class="`${pos==19?'text-white':''} ml-[1rem]`">19</button>
                                <button @click="change(20)" :class="`${pos==20?'text-white':''} mx-[1rem]`">20</button>
                                <button v-if="pos<20" @click="change(pos+1)" class="ml-1"><ion-icon name="arrow-dropright"></ion-icon></button>
  
                       </div>
                       
                      
                  </div>


       </div>

 

</template>

