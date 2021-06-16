import styled from 'styled-components';
import { body_1 } from '../../styles/text.styles';

export const ParagraphWrapper = styled.div`
  width: 50%;
  height: 85%;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Description = styled.p`
  ${body_1}
  white-space: normal;
  font-size: 24px;
  color: white;
  margin: 0;
  padding: 0;
`;
