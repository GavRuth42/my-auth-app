import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://54.86.237.113:3001/login', { username, password });
            const { token, profileCreated } = response.data;
            localStorage.setItem('jwtToken', token);
            if (!profileCreated) {
                navigate('/profiles'); // Redirect to profile creation page
            } else {
                navigate('/home'); // Redirect to home page
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <img src="/logo.png" alt="Website Logo" className="logo" />
                <label>Username:</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            <p>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </form>
    );
}

export default Login;