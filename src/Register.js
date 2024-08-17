import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
 
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
 
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://54.86.237.113:3000/register', { username, password, email });
      if (response.status === 201) {
        setSuccess('User registered successfully');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      setError('User already exists or other error occurred');
    }
  };
 
  return (
<div>

<img src="/logo.png" alt="Website Logo" className="logo" />
<form onSubmit={handleRegister}>
<div>
<label>Username:</label>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
</div>
<div>
<label>Password:</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</div>
<div>
<label>Email:</label>
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
<button type="submit">Register</button>
</form>
</div>
  );
};
 
export default Register;