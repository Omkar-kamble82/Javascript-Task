import { Animals } from "./Animal.class.js"

export default class BigFishs extends Animals{

    constructor(data, animalList, animalName, animalClass, styles) {
        super(data, animalList, animalName, animalClass, styles)
    }

    sortBigFishsBySize() {
        this.sortByField("size")
    }

    addBigFish() {
        this.addAnimal()
    }
}