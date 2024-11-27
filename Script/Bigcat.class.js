import { Animals } from "./Animal.class.js"

export default class BigCats extends Animals{

    constructor(data, animalList, animalName, animalClass, styles) {
        super(data, animalList, animalName, animalClass, styles)
    }

    sortBigCatsBySize() {
        this.sortByField("size")
    }

    sortBigCatsByLocation() {
        this.sortByField("location")
    }

    sortBigCatsByName() {
        this.sortByField("name")
    }

    addBigCat() {
        this.addAnimal()
    }
}