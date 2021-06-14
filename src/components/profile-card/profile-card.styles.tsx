import styled from 'styled-components';
import dp from '../../assets/images/profile.png';
import { appColors } from '../../constants/colors';
import { headline_2, headline_4, headline_6 } from '../../styles/text.styles';

export const CardContainer = styled.div`
  width: 90%;
  padding-left: 63px;
  max-width: 780px;
  height: 445px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.4);
  background-color: ${appColors.hoverBlue};

  @media screen and (max-width: 779px) {
    padding-left: 35px;
  }

  @media screen and (max-width: 696px) {
    height: 75%;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 80px;
  background-color: transparent;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dp});

  @media screen and (max-width: 779px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 696px) {
    margin-right: 0;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`;

export const Column = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 696px) {
    text-align: center;
    align-items: center;
  }
`;

export const Name = styled.h2`
  ${headline_2}
  margin: 0;
  padding: 0;

  @media screen and (max-width: 375px) {
    ${headline_4}
  }
`;

export const Occupation = styled.h4`
  ${headline_4}
  margin: 0;
  padding: 0;

  @media screen and (max-width: 375px) {
    ${headline_6}
  }
`;

export const SocialsRow = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;

  li {
    font-size: 32px;
    margin-right: 23px;
    cursor: pointer;
  }

  @media screen and (max-width: 696px) {
    justify-content: space-evenly;
    min-width: 100%;

    li {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 360px) {
    li {
      font-size: 26px;
      margin: 0 5px;
    }
  }
`;
