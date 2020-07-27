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

// array destructuring assignment

const users = ['Seven', 'Robin', 'Andrew', 'Dan Abramov', 'Ire Aderinokun']
const [userOne, userTwo, userThree, userFour] = users

console.log(userOne, userTwo, userThree, userFour)
