import React from "react";
import {kakao_Rest_api_key, kakao_redirect_uri} from '../data/kakaoLoginData'

function Auth() {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_Rest_api_key}&redirect_uri=${kakao_redirect_uri}&response_type=code`
    const kakao_handleLogin = () => {
        window.location.href = kakaoURL
    }
  return (
    <div>
        <h1>소셜 로그인 기능 구현 실습</h1>
        <button onClick={kakao_handleLogin}> kakao 로그인 하러 가기 </button>
    </div>
  );
}

export default Auth;
