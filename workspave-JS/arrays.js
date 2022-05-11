const numbers = [1,2,3,'many']
console.log('numbers : ',numbers)
console.log(numbers[0])
console.log(numbers[3])
console.log(numbers.length)

const someNumbers = [,2, ,9]    // 프로퍼티 '0', '2'에 해당하는 값이 없음
console.log('someNumbers : ',someNumbers)
console.log(someNumbers[0])
console.log(someNumbers[5])

someNumbers[6] = 11 // someNumbers의 length는 7로 바뀜
console.log(someNumbers.length)
console.log(someNumbers)

const someNumbers2 = [1,2,7,9,]
console.log('someNumber2 :',someNumbers2)

const developers = ['이 순신','정 도전',] // 더많은 요소 추가가능
console.log('developers :',developers)

numbers.today = true
console.log('numbers : ',numbers)

console.log(typeof numbers)
console.log(Array.isArray(numbers)) // 객체가 배열인지 확인

// 배열을 문자열로 변경
const str = '' + [1,2,3]       // 문자열 '1,2,3'
console.log('str : ',str)
console.log(typeof str)

// 자바스크립트에서는 고차원 배열 개념 없음.
// 배열의 배열로 고차원 배열을 흉내낼수 있음.
const square = [
    [16, 3, 2, 13],
    [5,10,11,8],
    [9,5,6,12],
    [4,15,14,1]
]
console.log('square : ',square)
const element = square[1][2] // 두쌍의 대괄호로 필요한 요소 접근함
console.log('element : ',element)
