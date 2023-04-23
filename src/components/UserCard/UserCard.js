import {
  Avatar,
  CardContainer,
  FollowBtn,
  Logo,
  UserFollowers,
  UserTweets,
} from './UserCard.styled';
import logo from '../../images/Logo.png';
import avatar from '../../images/User.png';

export default function UserCard({ user, tweets, followers }) {
  return (
    <CardContainer>
      <Logo src={logo} alt="Logo" />
      <Avatar src={avatar} alt="User" />
      <UserTweets> {tweets} Tweets</UserTweets>
      <UserFollowers>{followers} Followers</UserFollowers>
      <FollowBtn>Follow</FollowBtn>
    </CardContainer>
  );
}
