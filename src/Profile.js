import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Profile.css';


const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    bio: ''
  });
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken);
      fetchProfile(storedToken);
    }
  }, []);

  const fetchProfile = async (token) => {
    try {
      const response = await axios.get('http://54.86.237.113:3002/profiles', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfile(response.data[0]);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://54.86.237.113:3002/profiles',
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert('Profile saved!');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div>
      <img src="/logo.png" alt="Website Logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
