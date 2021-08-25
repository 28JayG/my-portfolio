import styled from 'styled-components';
import { appColors } from '../../constants/colors';

export const BlogsContainer = styled.div`
  width: 100%;
  background-color: ${appColors.darkYellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  .b-title {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${appColors.darkYellow};
    text-align: center;
    width: 100%;

    @media screen and (min-width: 1025px) {
      text-align: left;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1025px) {
    background-color: transparent;
    overflow-y: scroll;
    width: 100%;
    display: block;
    padding: 0;
  }

  @media screen and (min-width: 1640px) {
    width: 85%;
  }

  @media screen and (min-width: 1720px) {
    width: 75%;
  }

  .blogs-list {
    padding: 0 15px;
  }
`;
