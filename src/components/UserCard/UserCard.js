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
import { useState } from 'react';
import { updateFollowers } from 'components/fetchUsers';

export default function UserCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(user.id))
  );
  // const [userFollowers, setUserFollowers] = useState(Number(user.followers));

  const [newUser, setNewUser] = useState(user);

  // useEffect(() => {
  //   if (!isFollowing) {
  //     console.log('+');
  //     // setUserFollowers(prevState => prevState + 1);
  //     // updateFollowers(user.id, user.followers + 1);
  //     updateFollowers(user.id, { ...user, followers: user.followers + 1 });
  //   } else {
  //     console.log('-');
  //     // setUserFollowers(prevState => prevState - 1);
  //     updateFollowers(user.id, { ...user, followers: user.followers - 1 });
  //     // updateFollowers(user.id, user.followers - 1);
  //   }
  // }, [isFollowing, user]);

  function toggleBtn() {
    setIsFollowing(prevState => !prevState);

    if (!isFollowing) {
      console.log('+');

      updateFollowers(user.id, {
        ...user,
        followers: newUser.followers + 1,
      }).then(data => {
        setNewUser(data);
      });
    } else {
      console.log('-');

      setNewUser(
        updateFollowers(user.id, {
          ...user,
          followers: newUser.followers - 1,
        }).then(data => {
          setNewUser(data);
        })
      );
    }

    localStorage.setItem(user.id, JSON.stringify(!isFollowing));
  }
  return (
    <CardContainer>
      <Logo src={logo} alt="Logo" />
      {/* <Border> */}
      <Avatar src={avatar} alt="User" />
      {/* </Border> */}
      <UserTweets> {user.tweets} Tweets</UserTweets>
      <UserFollowers>{newUser.followers} Followers</UserFollowers>
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
