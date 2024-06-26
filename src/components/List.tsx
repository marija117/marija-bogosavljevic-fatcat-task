import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const List: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
              setUsers(response.data);
              setLoading(false);
          })
          .catch(error => {
              setError('Error fetching data');
              setLoading(false);
          });
  }, []);

  if (loading) {
      return <p>Loading...</p>;
  }

  if (error) {
      return <p>{error}</p>;
  }

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
