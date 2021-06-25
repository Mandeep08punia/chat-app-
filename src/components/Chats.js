import React,{useRef,useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase'
import {useAuth} from '../contexts/AuthContext'
import axios from 'axios';

function Chats() {
    const history=useHistory();
    const {user} =useAuth();
    const [loading,setLoading]=useState(true);
    console.log(user);
    const handleLogout=async()=>{
        await auth.signOut();
        history.push('/');
    }
    
    useEffect(()=>{
        if(!user){
            history.push('/');
        }
        axios.get('https://api.chatengine.io/me',{
            headers:{
                "project-id":"8c4ef433-1c4b-4569-bda7-59dad4000612",
                "user-name":user.email,
                "user-secret":user.uid,
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formdata=new FormData();
            formdata.append('email','user.email')
            formdata.append('username','displayName')
            formdata.append('secret','user.uid');
        })
    },[user,history])
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Let's chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine height="calc(100vh-66px)"
                projectId="8c4ef433-1c4b-4569-bda7-59dad4000612"
                username="."
                userSecret="."
            />
        </div>
    )
}

export default Chats
