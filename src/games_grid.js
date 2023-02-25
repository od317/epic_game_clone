
let gamesgrid =[
  
]



let event = ['2kpub','febs','thq']
let geners = ['fps','adv','ac','ac/adv']
let price_filt = ['free',"un-10","un-20","un-30","up-14",'dis']
let new_old = [true,false]
let all_filters = [event,price_filt,geners]




for(let i=1;i<=240;i++){
 gamesgrid.push({
     name:i,
     price: Math.floor(Math.random() * (60 - 0 + 1)) + 0,
     dis:new_old[Math.floor(Math.random() * (1 - 0 + 1)) + 0],
     img:'https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/3/2-dying-light-2-poster-dat-khong-chin-luong.jpg',
     event:event[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
     gener:geners[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
     new:new_old[Math.floor(Math.random() * (1 - 0 + 1)) + 0]    
 })
}

export default gamesgrid
