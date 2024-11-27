import BigCats from "./Bigcat.class.js"
import BigFishs from "./Bigfish.class.js"
import Dog from "./dog.class.js"

(async function getData() {
    // BigCats data fetching and functionality
    const Bigcatdata = await fetch("./Data/BigCats.json")
    const BigCatsData = await Bigcatdata.json()
    const bigCat = new BigCats(BigCatsData, ".bigcats", "Big Cats", "bigcat", "font-weight: normal; color: white;")
    const sortBigCatbysize = document.querySelector('.bigcatsize')
    const sortBigCatbyname = document.querySelector('.bigcatname')
    const sortBigCatbylocation = document.querySelector('.bigcatlocation')
    sortBigCatbysize.addEventListener("click", () => {
        bigCat.sortBigCatsBySize()
    })
    sortBigCatbyname.addEventListener("click", () => {
        bigCat.sortBigCatsByName()
    })
    sortBigCatbylocation.addEventListener("click", () => {
        bigCat.sortBigCatsByLocation()
    })
    const addBigCatbutton = document.querySelector('.addbigcatbutton')
    addBigCatbutton.addEventListener("click", () => {
        bigCat.addBigCat()
    })


    // Dogs data fetching and functionality
    const Dogdata = await fetch("./Data/Dogs.json")
    const DogsData = await Dogdata.json()
    const dog = new Dog(DogsData, ".dogs", "Dogs", "dog", "font-weight: bold; color: white;")
    const sortDogbyname = document.querySelector('.dogname')
    const sortDogbylocation = document.querySelector('.doglocation')
    sortDogbyname.addEventListener("click", () => {
        dog.sortDogsByName()
    })
    sortDogbylocation.addEventListener("click", () => {
        dog.sortDogsByLocation()
    })
    const addDogbutton = document.querySelector('.adddogbutton')
    addDogbutton.addEventListener("click", () => {
        dog.addDog()
    })

    // BigFishs data fetching and functionality
    const BigFishdata = await fetch("./Data/BigFishs.json")
    const BigFishsData = await BigFishdata.json()
    const bigfish = new BigFishs(BigFishsData, ".bigfishs", "Big fishs", "bigfish", "font-weight: bold; color: #00ADB5; font-style: italic;")
    const sortBigFishbysize = document.querySelector('.bigfishsize')
    sortBigFishbysize.addEventListener("click", () => {
        bigfish.sortBigFishsBySize()
    })
    const addBigFishbutton = document.querySelector('.addbigfishbutton')
    addBigFishbutton.addEventListener("click", () => {
        bigfish.addBigFish()
    })

})()