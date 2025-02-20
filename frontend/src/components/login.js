// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password,
            });
            setMessage(response.data.message);
            // Handle successful login (e.g., store token, redirect)
        } catch (err) {
            setError(err.response?.data?.error || "An error occurred. Please try again.");
        }
    };

    return (
        <div className='div'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br/>
                
                <button type="submit">Login</button>
                </div>
            </form>

            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
