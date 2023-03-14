
import games from './games'

let gamesgrid =[
  
]



let event = ['2kpub','febs','thq']
let geners = ['fps','adv','ac','ac/adv']
let price_filt = ['free',"un-10","un-20","un-30","up-14",'dis']
let new_old = [true,false]
let all_filters = [event,price_filt,geners]




    for(let g of games){
        gamesgrid.push(games.get(g[0]))       
       
    }


export default gamesgrid
