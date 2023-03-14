import games from './games'

let games_lists = [
      [[ ],[ ],[ ],],
      [[ ],[ ],[ ],],
      [[ ],[ ],[ ],],
      [[ ],[ ],[ ],],
      [[ ],[ ],[ ],],
]

let lisits = ['ac','adv','fps','mp','free']



for(let p =0;p<games_lists.length;p++){
   let i = 0
   for(let game of games){
       if(games.get(game[0]).dummy)
          continue
       if(lisits[p]!=='mp' && lisits[p]!=='free')
       for(let c of games.get(game[0]).gener){
            if(i>=15)
               break
            if(c == lisits[p]){
               games_lists[p][Math.floor(i/5)].push(games.get(game[0]))
               i++
           }
       }
      else if (lisits[p]==='free'){
            if(i>=15)
               break
            if(games.get(game[0]).price == lisits[p] && !games.get(game[0]).oldprice){
               games_lists[p][Math.floor(i/5)].push(games.get(game[0]))
               i++
           }
       }
      else
      for(let c of games.get(game[0]).features){
        if(i>=15)
           break
        if(c == lisits[p]){
           games_lists[p][Math.floor(i/5)].push(games.get(game[0]))
           i++
       }
   }   
  }

}





export default games_lists;
