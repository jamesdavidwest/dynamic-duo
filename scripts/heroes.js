import {getHeroes} from "./database.js"

const heroes = getHeroes()

export const HeroList = () => {
    let heroHTML = "<ul>"
    
    for (const hero of heroes) {
        heroHTML+= `<l1>${hero.name}</li>`
}

heroHTML += "</uh"

return heroHTML
}