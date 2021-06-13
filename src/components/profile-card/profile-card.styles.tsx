import styled from 'styled-components';
import dp from '../../assets/images/profile.png';
import { appColors } from '../../constants/colors';
import { Headline_2, Headline_4 } from '../../styles/text.styles';

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
`;

export const Column = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

    li{
    font-size: 32px;
    margin-right: 23px;
    cursor: pointer;

    &::last-child{
        margin-right: 0;
    }
  }
`;

export const Name = styled(Headline_2)`
  margin: 0;
  padding: 0;
`;

export const Occupation = styled(Headline_4)`
  margin: 0;
  padding: 0;
`;

export const SocialsRow = styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
`