const superHero = class superHero {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
}

const printHeroName = function printHeroName(hero) {
    console.log(`Superhero name is: ${hero.name}`)
}

const printHeroPower = function printHeroPower(hero) {
    console.log(`Superhero power is: ${hero.power}`)
}

export default superHero
export {printHeroName, printHeroPower}
