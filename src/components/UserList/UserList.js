import { fetchUsers } from 'components/fetchUsers';
import UserCard from '../UserCard/UserCard';
import { useEffect, useState } from 'react';
import { Button, Container, List } from './UserList.styled';

export default function UserList() {
  const [user, setUser] = useState([]);
  const [visibleUser, setVisibleUser] = useState([]);
  const [userCount, setUserCount] = useState(3);
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    fetchUsers().then(data => {
      setUser(data);
      setIsButton(true);
    });
  }, []);

  useEffect(() => {
    if (userCount >= user.length && user.length) {
      setIsButton(false);
    }
    setVisibleUser(user.slice(0, userCount));
  }, [user, userCount]);

  return (
    <Container>
      <List>
        {visibleUser.map(user => {
          return (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          );
        })}
      </List>
      {isButton && (
        <Button
          type="button"
          onClick={() => setUserCount(prevState => prevState + 3)}
        >
          Load more
        </Button>
      )}
    </Container>
  );
}
