function average(x, y) {
    return (x + y) / 2
}

let result = average(6, 7)
console.log('result : ', result)

// 숫자가 아닌 다른 인수를 전달하면 어떻게 되나요?
// 상당히 유연하게 느껴짐.

result = average('6', '7')
console.log('result', result)

// 배열에서 특정한 값의 인덱스 계산하는 함수.
// 일치하는 값을 찾으면 인덱스를 반환하면서 함수 실행 즉시 종료함
function indexOf(arr, value) {
    for (let i in arr) {
        if (arr[i] === value)
            return i
    }
    return -1
}

// [2,3,5,7,11,13,17]

const smallArr = [2, 3, 5, 7, 11, 13, 17]

result = indexOf(smallArr,13)
console.log('result : ',result)