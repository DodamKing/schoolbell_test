// 1, 3, 5, 7, 9 숫자를 한번씩 써서 만들 수 있는 두개의 숫자(예를들면 13, 579)중 
// 곱한 값이 가장 큰 조합을 찾아주세요.
// (언어는 자바스크립트 또는 타입스크립트를 사용 바랍니다)

let answer = 0

for (let i=0; i<5; i++) {
    const numbers = [9, 7, 5, 3, 1]
    const a = numbers.splice(i, 1)
    const result = a * (numbers.join('') * 1)
    if (answer < result) answer = result
}

for (let i=0; i<5; i++) {
    for (let j=i+1; j<5; j++) {
        const numbers = [9, 7, 5, 3, 1]
        const a = '' + numbers[i] + numbers[j]
        numbers[i] = ''
        numbers[j] = ''
        const result = a * 1 * numbers.join('')
        if (answer < result) answer = result
    }
}

console.log(answer);