import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {kakao_Rest_api_key, kakao_redirect_uri} from '../data/kakaoLoginData'

function Login() {
    
    const navigate = useNavigate();    
    
    // Token 가져오기
    useEffect(() => {

      // 인가 코드 추출하기
        const kakao_code = new URL(window.location.href).searchParams.get("code");

        fetch(`https://kauth.kakao.com/oauth/token`, {
            method: 'POST',
            headers: {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
            body: `grant_type=authorization_code&client_id=${kakao_Rest_api_key}&redirect_uri=${kakao_redirect_uri}&code=${kakao_code}`,
        })
        .then(res => res.json())
        .then(data => {
            if(data.access_token && data.refresh_token){
                // local에 access_token 저장
                localStorage.setItem('access_token', data.access_token);
                console.log("액세스토큰 발급 성공");
                
                // local에 refresh_token 저장
                localStorage.setItem('refresh_token', data.refresh_token);
                console.log("리프레시토큰 발급 성공");
                
                navigate('/token');
            }
            else{
                navigate('/');
                console.log("롸");
            }
        });
    }, []);
    
    return (
        <div>
            <h1>여기는 kakao Login 페이지 아아</h1>
        </div>
    );
}

export default Login;
