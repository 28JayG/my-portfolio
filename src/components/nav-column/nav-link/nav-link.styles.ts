import styled from 'styled-components';
import { headline_4 } from '../../../styles/text.styles';

export const LinkRow = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 23px;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  ${headline_4}
  
  &::last-child {
    margin-bottom: 0;
  }

  .nl-hyphen {
    width: 15px;
    height: 2px;
    margin-right: 17px;
    background-color: white;
  }
`;
