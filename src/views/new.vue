<script setup>

    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import { defineProps, reactive, toRef,ref } from "vue";
  
    let img1="https://cdn2.unrealengine.com/spring-traps-vine-lines-wild-hearts-50-hour-campaign-4096x1851-984f664f5d1f.jpg?h=480&quality=medium&resize=1&w=854"
    let img2="https://cdn2.unrealengine.com/hogwarts-legacy-epic-games-tips-2560x1440-7c9d00d8748c.jpg?h=480&quality=medium&resize=1&w=854"
    let top_news = [
        {
            img:"https://cdn2.unrealengine.com/spring-traps-vine-lines-wild-hearts-50-hour-campaign-4096x1851-984f664f5d1f.jpg?h=480&quality=medium&resize=1&w=854",
            date:'5 days ago',
            title:"Inside the Spring Traps and Vine Lines of Wild Hearts’ 50-hour Campaign",
            text:"Colorful sweeping landscapes, and massive beasts bristling with nature’s power help Wild Hearts breath new life into the hunting genre"
        },
        {
            img:"https://cdn2.unrealengine.com/hogwarts-legacy-epic-games-tips-2560x1440-7c9d00d8748c.jpg?h=480&quality=medium&resize=1&w=854",
            date:'5 days ago',
            title:"Inside the Spring Traps and Vine Lines of Wild Hearts’ 50-hour Campaign",
            text:"Colorful sweeping landscapes, and massive beasts bristling with nature’s power help Wild Hearts breath new life into the hunting genre"
        } 
    ]
    let news_list = [
        {
            title:'HITMAN World of Assassination redefines the hit game',
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'
        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
        {
            text:'Play the trilogy’s classic levels, and challenge yourself with Freelancer mode.',
            title:'HITMAN World of Assassination redefines the hit game',
            img:'https://cdn2.unrealengine.com/hitman-world-of-assassination-redefines-the-hit-game-1920x1080-ea0c4f90ba65.jpg?h=270&quality=medium&resize=1&w=480'

        },
    ]


</script>

<template>


          <div class=" hidden w-full bg-dark1 md:flex justify-center ">
 


                 <div class="w-[78%] flex flex-col bg-dark1">

                   <label class="text-white text-[1.3rem]"  for="">Epic games news</label>

                   <div class="flex flex-row justify-between pt-[1rem] bg-dark1">

                              <div class="flex justify-between flex-col ">
                                <img class="w-[35rem] h-[22rem]  rounded-md mb-[1rem]" :src="img1"  alt="">
                                <label class=" text-gray-400 text-sm"  for="">5 days ago</label>
                                <label class="text-white font-bold text-[1rem] mt-[.5rem]" for="">
                                    Inside the Spring Traps and Vine Lines of Wild Hearts’ 50-hour <br> Campaign
                                </label>  
                                <label class="mt-[1rem] text-gray-400 max-w-[35rem]" for="">
                                    Colorful sweeping landscapes, and massive beasts bristling with nature’s power help Wild Hearts breath new life into the hunting genre
                                </label>
                            </div>
                            
                              <div class="flex flex-col ">
                                <img class="w-[35rem] h-[22rem] rounded-md mb-[1rem]" :src="img2" alt="">
                                <label class=" text-gray-400 text-sm"  for="">5 days ago</label>
                                <label class="text-white font-bold text-[1rem] mt-[.5rem]" for="">
                                    Inside the Spring Traps and Vine Lines of Wild Hearts’ 50-hour Campaign
                                </label>  
                                <label class="mt-[1rem] text-gray-400 max-w-[35rem]" for="">
                                    Colorful sweeping landscapes, and massive beasts bristling with nature’s power help Wild Hearts breath new life into the hunting genre
                                </label>  
                            </div>

                   </div>

             
                  
                   <div class="flex flex-col mt-[2rem]">
                            <div v-for="n in news_list" class="flex flex-row pt-[1.8rem] border-t-[.1rem]  mb-[1.8rem] border-gray-400">
                                 <img class="w-[20%] rounded-md mr-[1rem]" :src="n.img" alt="">
                                 <div class="flex flex-col pt-[.5rem]">
                                    <label class="text-gray-400 text-[.8rem]" for="">{{ n.date }} days ago</label>
                                    <label class="text-white text-[1rem] mt-[1rem] font-bold" for="">{{ n.title }} </label>
                                    <label class="text-gray-400 text-[1rem] mt-[1.2rem]" for="">{{ n.text }}</label>
                                 </div>
                            </div>
                  </div>

                    
                 </div>

          </div>


        <div class="md:hidden px-[1.5rem] ">


            <div class="flex flex-col text-white ">
                        
                    <label class="text-[1.2rem] mb-[1rem]" for="">Epic games news</label>
                         <Carousel class="  " :items-to-show="1.05" >
                        
                            <slide class="  h-full flex flex-col   pr-[1rem]" v-for="n in top_news" :key="n">
                                 <img class="h-[14rem] rounded-sm mb-[1rem]" :src="n.img" alt="">
                                 <label class=" text-start text-gray-400 text-sm w-full"  for="">5 days ago</label>
                                <label class="text-white text-start font-bold text-[.9rem] mt-[.5rem] w-full" for="">
                                    Inside the Spring Traps and Vine Lines of Wild Hearts’ 50-hour <br> Campaign
                                </label>  
                                <label class="mt-[1rem] text-[.9rem] text-start text-gray-400 max-w-[35rem] w-full" for="">
                                    Colorful sweeping landscapes, and massive beasts bristling with nature’s power help Wild Hearts breath new life into the hunting genre
                                </label>
                            </slide>
                           
                           
                        </Carousel>


            </div>

            <div class="flex flex-col mt-[5rem]">
                            <div v-for="n in news_list" class="flex flex-col justify-center pt-[1.8rem] border-t-[.1rem]  mb-[1.8rem] border-gray-400">
                                 <img class="w-[full] rounded-md " :src="n.img" alt="">
                                 <div class="flex flex-col pt-[.5rem]">
                                    <label class="text-gray-400 text-[.8rem]" for="">{{ n.date }} days ago</label>
                                    <label class="text-white text-[1rem] mt-[1rem] font-bold" for="">{{ n.title }} </label>
                                    <label class="text-gray-400 text-[1rem] mt-[1.2rem]" for="">{{ n.text }}</label>
                                 </div>
                            </div>
                  </div>


        </div>


</template>