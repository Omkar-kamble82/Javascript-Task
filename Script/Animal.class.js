export class Animals { 
    constructor(data, animalList, animalName, animalClass, styles) {
        this.data = data
        this.animalName = animalName
        this.animalClass = animalClass
        this.styles = styles
        this.animalList = document.querySelector(animalList)
        this.displayAnimals(this.data, animalName, animalClass)
    }

    displayAnimals(animaldata) {
        this.animalList.innerHTML = ""
        if(animaldata.length === 0) {
            this.animalList.innerHTML = `<p>No ${this.animalName} avaliable</p>`
            return
        }
        animaldata.forEach((animaldata) => {
            const animal = document.createElement("span")
            animal.classList.add(this.animalClass)
            animal.setAttribute("id", animaldata.id)
            animal.innerHTML = `
                <p>Species: Big Cats</p>
                <p>Name: <span style="${this.styles}">${animaldata.name}</span></p>
                <p>Size: ${animaldata.size} ft</p>
                <p>Location: ${animaldata.location}</p>
                <img src=${animaldata.img} alt="${animaldata.name}" class="${this.animalClass}img">
                <div>
                    <button class="${this.animalClass}delete deletebutton">Delete</button>
                    <button class="${this.animalClass}update updatebutton">Update</button>
                </div>
            `
            
            const deleteButton = animal.querySelector(`.${this.animalClass}delete`)
            deleteButton.addEventListener('click', () => {
                this.deleteAnimal(animaldata.id)
            });

            const updateButton = animal.querySelector(`.${this.animalClass}update`)
            updateButton.addEventListener('click', () => {
                this.updateAnimal(animaldata.id)
            })
            this.animalList.append(animal)
        })

    }

    sortByField(FieldName) {
        if(FieldName === "name") {
            this.data.sort((a, b) => a.name.localeCompare(b.name))
            this.displayAnimals(this.data, this.animalName, this.animalClass)
        } else if(FieldName === "location") {
            this.data.sort((a, b) => a.location.localeCompare(b.location))
            this.displayAnimals(this.data, this.animalName, this.animalClass)
        } else {
            this.data.sort((a, b) => a.size - b.size)
            this.displayAnimals(this.data, this.animalName, this.animalClass)
        }
    }

    deleteAnimal(id) {
        this.data = this.data.filter(animal => animal.id !== id)
        this.displayAnimals(this.data, this.animalName, this.animalClass)
    }

    addAnimal() {
        const addmodal = document.querySelector(`.add${this.animalClass}modal`)
        addmodal.style.display = "block"
        addmodal.addEventListener('click', (e) => {
            if (e.target.className === `add${this.animalClass}modal`) {
                addmodal.style.display = "none"
            }
        })
        const lenght = this.data.length + 1
        const form = document.querySelector(`.add${this.animalClass}form`);
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const name = form.name.value
            const size = form.size.value
            const location = form.location.value
            const img = form.url.value || `./public/${this.animalClass}s/default.jpg`

            const isUnique = !this.data.some(animal => animal.name.toLowerCase() === name.toLowerCase());
            if (!isUnique) {
                alert("An animal already exists. Please enter new animal name.");
                return;
            }

            const data = { id: String(lenght), name, size, location, img }
            this.data.push(data)
            this.displayAnimals(this.data, this.animalName, this.animalClass)
            addmodal.style.display = "none"
            form.reset()
        });
    }

    updateAnimal(id) {
        const updatemodal = document.querySelector(`.update${this.animalClass}modal`)
        const form = document.querySelector(`.update${this.animalClass}form`)
        const animalData = this.data.find(animal => animal.id === id)

        form.name.value = animalData.name
        form.location.value = animalData.location
        form.size.value = animalData.size
        updatemodal.style.display = "block"
        updatemodal.addEventListener('click', (e) => {
            if (e.target.className === `update${this.animalClass}modal`) {
                updatemodal.style.display = "none"
            }
        })
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const updatedName = form.name.value || animalData.name
            const updatedLocation = form.location.value || animalData.location
            const updatedSize = form.size.value || animalData.size
            const updatedUrl = form.url.value || animalData.img
            animalData.name = updatedName
            animalData.location = updatedLocation
            animalData.size = updatedSize
            animalData.img = updatedUrl
            this.displayAnimals(this.data, this.animalName, this.animalClass)
            updatemodal.style.display = "none"
            form.reset()
        })
    }
}