import styled, { css } from 'styled-components';
import { appColors } from '../../../constants/colors';
import { headline_4, body_1 } from '../../../styles/text.styles';

export const BlogCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 10px 10px 13px -13px;
  max-width: 625px;
  padding: 20px;
  margin-bottom: 20px;
  height: min-content;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    transform: scale(1.04);
  }
`;

export const BImage = styled.div<{ imageUrl?: string }>`
  width: 140px;
  min-width: 140px;
  height: 140px;
  border-radius: 5px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: cover;
  margin-right: 30px;
`;

export const line_clamp = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BDetails = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: ${appColors.black};

  .bc-title {
    ${headline_4};
    ${line_clamp};
    text-align: left;
    margin-bottom: 10px;
  }

  .bc-summary {
    ${body_1};
    ${line_clamp};
    text-align: left;
  }
`;
