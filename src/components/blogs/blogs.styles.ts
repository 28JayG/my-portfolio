import styled from 'styled-components';
import { appColors } from '../../constants/colors';

export const BlogsContainer = styled.div`
  overflow-y: scroll;
  width: 80%;

  .b-title {
    position: sticky;
    top: 0;
    z-index: 999;
    animation: opacity 200ms ease;

    @keyframes opacity {
      from {
        background-color: transparent;
      }

      to {
        background-color: ${appColors.darkYellow};
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .blogs-list {
    padding: 0 15px;
  }
`;
