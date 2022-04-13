const root = document.querySelector("#root");
console.log(root);

// 로그인 페이지

//로그인 페이지 -> login

function login(){
    root.innerHTML = 
    <div>
        <div>로그인</div>
    </div>;
}
function register(){
    root.innerHTML =
    <div>
        <div>회원가입</div>
    </div>;
}


login();
register();