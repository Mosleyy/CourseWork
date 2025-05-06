import React, { useState } from 'react';
import userData from '../databases/users.json';

const API_URL = 'http://localhost:3001/users';

export function UsersList() {
const [usersData, setUsersData] = useState(userData.users);
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {usersData && usersData.map(({username, id}) => (
          <li key={id}>
            <h3>{username}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}