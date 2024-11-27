import { Animals } from "./Animal.class.js"

export default class Dog extends Animals{

    constructor(data, animalList, animalName, animalClass, styles) {
        super(data, animalList, animalName, animalClass, styles)
    }

    sortDogsByLocation() {
        this.sortByField("location")
    }

    sortDogsByName() {
        this.sortByField("name")
    }

    addDog() {
        this.addAnimal()
    }
}