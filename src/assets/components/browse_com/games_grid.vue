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
        console.log(gamesgrid[gamesgrid.length-1])
       }



   let drop_list = ref([
    {
        type:'Events',
        num:0,
        on:false,
        content:[
            {
                name:'2k pub',
                set:'2kpub'
            },
            {
                name:'febs',
                set:'febs'
            },
            {
                name:'thq',
                set:'thq'
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
                set:'free'
            },
            {
                name:'under_10',
                set:'un-10'
            },
            {
                name:'under_20',
                set:'un-20'
            },
            {
                name:'under_30',
                set:'un-30'
            },
            {
                name:'14.99 and above',
                set:'up-14'
            }
            ,
            {
                name:'disconted',
                set:'dis'
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
                set:'fps'
            },
            {
                name:'adv',
                set:'adv'
            },
            {
                name:'ac',
                set:'ac'
            },
            {
                name:'ac/adv',
                set:'ac/adv'
            }
        ]
    }
   ])

    

   let filters = ref(['all','all','all','all','all','all'])
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



    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })

</script>



<template>





       <div class="w-full flex justify-center pt-[2rem]">
           <div class="grid w-[78%] row-start-1 row-end-1   grid-cols-4">

                       
            <div class="text-lg row-span-1  col-span-3 w-[95%]">
                    
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





            
                       <div class=" col-span-1  text-lg text-white w-[80%] ">
            
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




<br>
<br>
<br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br>


</template>

