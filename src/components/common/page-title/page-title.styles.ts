import styled from 'styled-components';
import { appColors } from '../../../constants/colors';
import { script_1, script_2, script_3 } from '../../../styles/text.styles';

export const Title = styled.h1`
  ${script_3}
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  color: ${appColors.white};
  padding-left: 5px;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    ${script_2}
  }
  
  @media screen and (min-width: 1025px) {
    ${script_1}
    text-align: left;
    margin-bottom: 30px;
  }
`;
