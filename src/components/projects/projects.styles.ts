import styled from 'styled-components';
import { appColors } from '../../constants/colors';

export const ProjectsContainer = styled.div`
  width: 100%;
  /* background-color: ${appColors.orange}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  .p-title {
    position: sticky;
    top: -1px;
    z-index: 999;
    /* background-color: ${appColors.orange}; */
    background-color: ${appColors.hoverBlue};
    text-align: center;
    width: 100%;
    
    @media screen and (min-width: 1025px) {
      background-color: ${appColors.orange};
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
    padding: 0;
  }

  @media screen and (min-width: 1640px) {
    width: 85%;
  }

  @media screen and (min-width: 1720px) {
    width: 75%;
  }
`;
