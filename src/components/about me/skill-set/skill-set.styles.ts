import styled from 'styled-components';
import { appColors } from '../../../constants/colors';
import { fonts } from '../../../styles/text.styles';

export const SkillSetContainer = styled.div`
  width: 100%;
  height: auto;
  color: white;
  padding-bottom: 30px;

  p {
    font-family: ${fonts.script};
    font-size: 36px;
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const SkillLevel = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  position: relative;

  .level {
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    height: 10px;
    background-color: ${appColors.white};
    animation: increaseWidth 500ms ease-in;

    @keyframes increaseWidth {
      from {
        width: 0%;
      }
    }
  }
`;
