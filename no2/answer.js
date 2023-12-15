// 아래 jQuery 코드를 다른 외부 라이브러리 없이 순수 자바스크립트 코드만을 추가하여
// 실행하였을때 jQuery 라이브러리를 사용했을때와 같은 결과가 나오도록 만들어주세요
// (*아래 코드가 에러가 나지 않고 동작하도록 코드를 짜야하며 아래 코드를 수정을 하거나 
// 아래 코드가 에러가 나는 상태로 실행 결과만을 카피하는 코드를 새로 추가하는 것은 요구되는 정답이 아닙니다.)

// 1
document.getElementById('target-1').classList.remove('border')

//2
document.getElementById('target-1').style.left = '250px'

//3
document.getElementsByClassName('target-2')[0].classList.remove('border')
document.getElementsByClassName('target-2')[0].classList.add('blue')

// 4
document.getElementsByClassName('target-2')[0].style.left = '50px'
document.getElementsByClassName('target-2')[0].style.marginTop = '-15px'

// 5
document.getElementById('target-3').style.opacity = 1

const fadeOut = () => {
    let opacity = document.getElementById('target-3').style.opacity * 1
    if (opacity > 0) {
        opacity = opacity - 0.1
        document.getElementById('target-3').style.opacity = opacity
    }
    else {
        clearInterval(intervalFade)
        document.getElementById('target-4').classList.add('green')
    }
}

const intervalFade = setInterval(fadeOut, 100)