import styled, { css } from 'styled-components';
import { appColors } from '../../../constants/colors';
import { headline_4, body_2 } from '../../../styles/text.styles';

export const ProjectCardContainer = styled.div<{
  tall?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${appColors.white};
  border-radius: 10px;
  box-shadow: 10px 10px 13px -13px;
  padding: 15px;
  height: ${({ tall }) => (tall ? '366px' : '305px')};
`;

export const PCImage = styled.div<{
  imageUrl?: string;
}>`
  border-radius: 10px;
  width: 100%;
  min-height: 143px;
  height: 143px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
`;

const line_clamp = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PCDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${appColors.black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  .pc-title {
    background-color: transparent;
    ${headline_4};
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
  }

  .pc-summary {
    background-color: transparent;
    padding: 0;
    margin: 0;
    ${body_2};
    ${line_clamp}
  }
`;
