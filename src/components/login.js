import React from "react";

function Login() {
    // 인가 코드 추출하기
    const kakao_code = new URL(window.location.href).searchParams.get("code");
    
  return (
    <div>
        <h1>여기는 kakao Login 페이지 아아</h1>
    </div>
  );
}

export default Login;
