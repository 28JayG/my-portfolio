import styled from 'styled-components';
import { headline_2 } from '../../../styles/text.styles';

export type titleProps = {
  fill?: string;
  stroke?: string;
};

export const Title = styled.h1<titleProps>`
  ${headline_2}
  font-size: 200px;
  margin: 0;
  padding: 0;
  -webkit-text-fill-color: ${({ fill }) => fill ?? 'transparent'};
  -webkit-text-stroke-color: ${({ stroke }) => stroke ?? 'transparent'};
  -webkit-text-stroke-width: 2px;
`;
