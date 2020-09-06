function getAlphabet() {
  return ['a', 'b']
}

const [firstItem, secondItem] = getAlphabet()

console.log(firstItem)


// testing javascript's spread operator

const profile = {
  firstname: 'Jane',
  lastname: 'Doe'
}

const address = {
  country: 'Nigeria',
  state: 'California',
  city: 'Ajegunle',
  zipcode: 101124
} 

const user = {
  gender: 'male',
  ...address,
  ...profile
}

console.log(user)

