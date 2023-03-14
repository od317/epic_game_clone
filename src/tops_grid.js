import games from './games'

let grids = new Map()

let titles = ['Top Sellers','Most Played','Top Upcoming Wishlisted','New Releases','Top Player Rated','Top Popular']

for(let tit of titles){
    let grid = []
    for(let i=0;i<5;i++){
        for(let g of games){
            if(games.get(g[0]).dummy)
              continue
            for(let c of games.get(g[0]).col){
                if(c.toLocaleLowerCase()==tit.toLocaleLowerCase()){
                  grid.push(games.get(g[0]))
                  i++
                }
                if(i>=5)
                break
            }
            if(i>=5)
                break
        }
    }
    grids.set(tit.toLocaleLowerCase(),grid)
}

export default grids;
