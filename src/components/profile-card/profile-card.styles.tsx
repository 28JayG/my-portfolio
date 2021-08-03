import styled from 'styled-components';
import dp from '../../assets/images/profile.png';
import { headline_3, headline_5 } from '../../styles/text.styles';

export const CardContainer = styled.div<{ color?: string }>`
  width: 50%;
  padding-left: 38px;
  width: 585px;
  height: 328px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.color};
  box-shadow: 10px 10px 14px -13px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(36px);
  background-image: linear-gradient(
    111.39deg,
    rgba(255, 255, 255, 0.3) 14.19%,
    rgba(255, 255, 255, 0.18) 100%
  );
`;

export const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  margin-right: 35px;
  background-color: transparent;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dp});
`;

export const Column = styled.div`
  display: flex;
  height: 180px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Name = styled.h2`
  ${headline_3}
  margin: 0;
  margin-bottom: 3px;
  padding: 0;
`;

export const Occupation = styled.h4`
  ${headline_5}
  margin: 0;
  padding: 0;
`;

export const SocialsRow = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0;
  margin-top: 35px;
  padding: 0;
  text-decoration: none;
  list-style-type: none;

  li {
    font-size: 24px;
    margin-right: 15px;
    cursor: pointer;
  }
`;
