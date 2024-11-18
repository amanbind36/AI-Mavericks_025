import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigation=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        let uname=email
        let upass=password
        axios.get(`https://evlreact1-default-rtdb.firebaseio.com/users.json`)
        .then((res)=>{
            let dataa=Object.entries(res.data).filter(([key,val])=>{
                return val.email==uname && val.password==upass
            })
            if(dataa.length>0){
                alert("sucessfully login")
             
                navigation("/")
            }
            else{
                alert("provide coreect email and password")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="form-container">
            <h2 className="form-heading">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="form-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
