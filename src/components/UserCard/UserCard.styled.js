import styled from 'styled-components';
import bgImg from '../../images/backImg.png';

export const CardContainer = styled.div`
  display: block;
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: 308px 168px;
  background-position: 36px 28px;
  background-color: #471ca9;
`;

export const Logo = styled.img`
  width: 76px;
  margin: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  display: block;
  margin-top: 106px;
  margin-left: 150px;
`;

export const UserTweets = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const UserFollowers = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid transparent;

  display: block;
  margin: auto;
`;

export const FollowingBtn = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  width: 196px;
  height: 50px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid transparent;

  display: block;
  margin: auto;
`;
