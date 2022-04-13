const root = document.querySelector("#root");
const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", login);


// 로그인 페이지

//로그인 페이지 -> login

function login(){
    root.innerHTML = `
    <div>
        <div>로그인</div>
    </div>`;
}
function register(){
    root.innerHTML =
    `<div>
        <div>회원가입</div>
    </div>`;
}


login();
register();

// single, multi 왜 react가 유행하는지? spa mpa 구현해보기.

// 브라우저 렌더링
/*
클라이언트 -> dns 서버에 요청을 보냄 -> 클라이언트한테 브라우저 제공하면서
html 서버의 ip주소를 알려줌
다시 그 서버한테 html을 요청함
그럼 서버가 html 파일을 줌

클라이언트1: 김영진이라는 유저가 보여야함. 어디에 저장? 클라이언트, 서버보다는 db에 유저정보 저장
이 정보를 서버한테 요청. id sgb1201 pw tjrkqls 정보를 달라고 서버한테 요청
서버는 database한테서 찾아오고 그걸 가져온 서버는 ㅋ클라이언트한테 나타냄
클라이언트는 이걸 받음

이 요청을 api 호출이라고 하고, url 주소를 user이라고 함

*/