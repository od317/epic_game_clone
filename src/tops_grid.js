import games from './games'

let grids = new Map()

let titles = ['Top Sellers','Most Played','Top Upcoming Wishlisted','New Releases','Top Player Rated','Coming Soon']

for(let tit of titles){
    let grid = []
    for(let i=0;i<7;i++){
        for(let g of games){
            for(let c of games.get(g[0]).col){
                if(c.toLocaleLowerCase()==tit.toLocaleLowerCase()){
                  grid.push(games.get(g[0]))
                  i++
                }
                if(i>=7)
                break
            }
            if(i>=7)
                break
        }
    }
    grids.set(tit.toLocaleLowerCase(),grid)
}

export default grids;
