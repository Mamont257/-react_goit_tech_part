import {
  Avatar,
  AvatarContainer,
  Border,
  CardContainer,
  FollowBtn,
  FollowingBtn,
  Logo,
  UserFollowers,
  UserTweets,
} from './UserCard.styled';
import logo from '../../images/Logo.png';
import { useState } from 'react';
import { updateFollowers } from 'components/fetchUsers';

export default function UserCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(user.id))
  );
  const [newUser, setNewUser] = useState(user);

  function toggleBtn() {
    setIsFollowing(prevState => !prevState);

    if (!isFollowing) {
      updateFollowers(user.id, {
        ...user,
        followers: newUser.followers + 1,
      }).then(data => {
        setNewUser(data);
      });
    } else {
      updateFollowers(user.id, {
        ...user,
        followers: newUser.followers - 1,
      }).then(data => {
        setNewUser(data);
      });
    }

    localStorage.setItem(user.id, JSON.stringify(!isFollowing));
  }
  return (
    <CardContainer>
      <Logo src={logo} alt="Logo" />
      <Border>
        <AvatarContainer>
          <Avatar src={user.avatar} alt="User" />
        </AvatarContainer>
      </Border>
      <UserTweets> {user.tweets} Tweets</UserTweets>
      <UserFollowers>
        {newUser.followers.toLocaleString('en-US')} Followers
      </UserFollowers>
      {isFollowing ? (
        <FollowingBtn type="button" onClick={toggleBtn}>
          Following
        </FollowingBtn>
      ) : (
        <FollowBtn type="button" onClick={toggleBtn}>
          Follow
        </FollowBtn>
      )}
    </CardContainer>
  );
}
