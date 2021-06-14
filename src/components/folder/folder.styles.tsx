import styled from 'styled-components';
import { headline_1 } from '../../styles/text.styles';

type folderStyleProps = {
  index: number;
  isOpen: boolean;
  bgColor: string;
};

export const FolderContainer = styled.div<folderStyleProps>`
  z-index: ${(props) => props.index + 1};
  position: absolute;
  width: 100%;
  height: 90vh;
  padding: 65px 110px;
  bottom: ${(props) => (props.isOpen ? 0 : '-90vh')};
  left: ${(props) => (props.isOpen ? 0 : 200 * props.index)}px;
  transition: bottom 400ms ease-out, left 400ms ease-out;
  background-color: ${(props) => props.bgColor};

  &:hover {
    ${(props) => (!props.isOpen ? 'bottom: -86vh' : null)};
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Flap = styled.div<folderStyleProps>`
  cursor: pointer;
  width: 10%;
  height: 45px;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  top: -42px;
  left: 43px;

  &::before {
    content: '';
    position: absolute;
    left: -44px;
    z-index: 10;
    border-bottom: 45px ${(props) => props.bgColor} solid;
    border-left: 45px transparent solid;
  }

  &::after {
    content: '';
    position: absolute;
    right: -44px;
    z-index: 10;
    border-bottom: 45px ${(props) => props.bgColor} solid;
    border-right: 45px transparent solid;
  }
`;

export const Title = styled.div`
  ${headline_1}
  margin: 0;
  padding: 0;
  margin-bottom: 45px;
`;
