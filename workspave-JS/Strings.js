// 특수문자 이스케이스 시퀀스

let s = '\\'
s= '\\\''
s= '\\\'\''
console.log('s: ',s)

let myName = "BOB"
let email = 'BoB@gmail.com'
let hello = `hello ${myName}`

console.log(myName)
console.log(email)
console.log(hello)

let BOB = 'world'
let greeting = `Hello ${BOB.toUpperCase()}`
console.log('greeting :',greeting)

let firstname = '순신'
let lastname = '이'
greeting = `Hello, ${firstname.length > 0 ? `
            ${firstname[0]},` : ``}${lastname}`
console.log('greeting : ',greeting)

greeting = `<div>Hello</div> 
<div>${BOB}</div>`

console.log('greeting : ',greeting)
