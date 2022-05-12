/*
    JSON.stringify 메서드
        - 자바스크립트 객체를 JSON 문자열로 반환함
    JSON.parse 메서드
        - JSON 문자열을 자바스크립트 객체로 파싱함.

 */

let bob = JSON.parse(
    '{ "name": "Won young Jeong", "age":30 , "행운의 수": [17, 29], "BOBac":true }'
)
console.log('bob : ', bob)

let str = JSON.stringify({name: ['Won young', undefined, 'Jeong'], age: undefined})
console.log(str)