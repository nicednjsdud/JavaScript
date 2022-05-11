const bob = { name: 'bob',age:10}
console.log('bob: ',bob)

let bobAge = bob.age
console.log('bobAge : ',bobAge)

bob.age = 20
bob.name = 'Jeong'
console.log('bob: ',bob)

delete bob.age
console.log('bob : ',bob)

let name2 = bob.age
console.log('name2 :',name2)