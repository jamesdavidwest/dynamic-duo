const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire Blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super Speed"
        }            
    ],
    villains: [
        {
            id: 1,
            name: "Dr. Poopy Pants",
            power: "Fecal Blasts"
        },
        {
            id: 2,
            name: "Roger Rogers Rogerson",
            power: "Energy Vampire"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillians = () => {
    return database.heroes.map(villain => ({...villain}))
}