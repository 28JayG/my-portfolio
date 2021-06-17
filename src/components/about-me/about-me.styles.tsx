import styled from 'styled-components';
import { body_1 } from '../../styles/text.styles';


export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
`;

export const ParagraphWrapper = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Description = styled.p`
  ${body_1}
  white-space: normal;
  text-align: justify;
  font-size: 32px;
  color: white;
  margin: 0;
  padding: 0;
`;
