let 제목 = document.querySelector('title');
let 링크 = document.querySelector('.link');
let 버튼 = document.querySelector('#button');

// ? 연산자도 네로잉으로 인정해줌
버튼?.addEventListener('click', function (){
    
})

if(링크 instanceof HTMLAnchorElement){
    링크.href = 'https://kakao.com'
}
// if (제목 != null){
//     제목.innerHTML = '반가워요'
// }

// 가장많이 사용하는 방식
if(제목 instanceof Element){
    제목.innerHTML = '반가워요'
}

if(제목?.innerHTML != undefined){
    제목.innerHTML = '반가워요'
};

