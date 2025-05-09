import React, { useState } from 'react';
import "../CSS/CityStyle.css";
import userData from '../databases/users.json';

export function UsersList() {
const [usersData, setUsersData] = useState(userData.users);
  return (
    <ul>
      {userData && usersData.map(({username}) => (
      <div className='city-container'>
        <div className="city-section">
          <img src="/src/IMGs/user.jpg" alt="First" className="user-image" />
          <div className="city-text">
            <h2>{username}</h2>
            <p>Lorem Ipsun</p>
          </div>
        </div>
      </div>))}
    </ul>
  );
}