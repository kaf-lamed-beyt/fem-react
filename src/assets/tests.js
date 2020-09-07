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

// Rest parameter

const _user = {
  id: 1,
  firstname: 'Caleb',
  lastname: 'Olojo',
  username: 'Seven',
  country: 'Nigeria',
  city: 'Ajegunle'
}

const { firstname, lastname, country, city, ...theOneIdidnotInclude } = _user

console.log(theOneIdidnotInclude)
