import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
const Home = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
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
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.name}</h3>
          <p>Email: {profile.email}</p>
          <p>Age: {profile.age}</p>
          <p>Bio: {profile.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Home;