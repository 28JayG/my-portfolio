import styled from 'styled-components';
import { fonts } from '../../styles/text.styles';

export const AboutContainer = styled.section`
  width: 90%;

  @media screen and(min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1025px) {
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Paragraph = styled.p`
  font-family: ${fonts.body};
  font-size: 24px;
  color: white;
  margin: 0;
  margin-bottom: 40px;
`;
