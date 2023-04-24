// import fetchUsers from 'components/fetchUsers';
import { fetchUsers } from 'components/fetchUsers';
import UserCard from '../UserCard/UserCard';
import { useEffect, useState } from 'react';

export default function UserList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUser(data));
  }, []);

  return (
    <ul>
      {user.map(user => {
        return (
          <li key={user.id}>
            <UserCard
              user={user}
              // tweets={tweets}
              // followers={followers}
              // id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}
