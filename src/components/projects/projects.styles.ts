import styled from 'styled-components';
import { appColors } from '../../constants/colors';

export const ProjectsContainer = styled.div`
  overflow-y: scroll;
  width: 640px;

  .p-title {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${appColors.orange};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
