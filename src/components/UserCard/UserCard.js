import {
  Avatar,
  CardContainer,
  FollowBtn,
  FollowingBtn,
  Logo,
  UserFollowers,
  UserTweets,
} from './UserCard.styled';
import logo from '../../images/Logo.png';
import avatar from '../../images/User.png';
import { useEffect, useState } from 'react';

export default function UserCard({ user, tweets, followers, id }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userFollowers, setUserFollowers] = useState(Number(followers));

  useEffect(() => {
    const status = localStorage.getItem(id);
    setIsFollowing(status);
    // console.log(memory);
  }, [id]);

  function toggleBtn() {
    setIsFollowing(prevState => !prevState);
    if (!isFollowing) {
      setUserFollowers(prevState => prevState + 1);
    } else {
      setUserFollowers(prevState => prevState - 1);
    }
    localStorage.setItem(id, JSON.stringify(!isFollowing));
  }
  return (
    <CardContainer>
      <Logo src={logo} alt="Logo" />
      <Avatar src={avatar} alt="User" />
      <UserTweets> {tweets} Tweets</UserTweets>
      <UserFollowers>{userFollowers} Followers</UserFollowers>
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
