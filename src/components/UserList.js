import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import ProfileCard from './ProfileCard';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => (
        <ProfileCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;