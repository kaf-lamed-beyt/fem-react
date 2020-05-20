
class Dev {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    getName() {
        return `${this.firstname} ${this.lastname}`
    }
}

const seven = new Dev('Caleb', 'Olojo')
console.log(seven.getName())