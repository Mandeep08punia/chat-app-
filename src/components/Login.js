import React from 'react'
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';

function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Chatter box</h2>
                <div className="login-button google">
                    <GoogleOutlined/>
                    Sign in with google
                </div>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Login
