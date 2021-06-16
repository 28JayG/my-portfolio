import styled from 'styled-components';
import { headline_2 } from '../../styles/text.styles';

type folderStyleProps = {
  index: number;
  isOpen: boolean;
  bgColor: string;
};

export const FolderContainer = styled.div<folderStyleProps>`
  position: fixed;
  z-index: ${(props) => (props.isOpen ? 1 : props.index + 2)};
  width: 100%;
  height: 90vh;
  padding: 65px 110px;
  top: ${(props) => (props.isOpen ? '10%' : '100%')};
  left: ${(props) => (props.isOpen ? 0 : 200 * props.index)}px;
  transition: top 400ms ease-out, left 400ms ease-out;
  background-color: ${(props) => props.bgColor};
  color: white;

  &:hover {
    ${(props) => (!props.isOpen ? 'top: 98%' : null)};
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

export const Title = styled.h1`
  ${headline_2}
  margin: 0;
  padding: 0;
  margin-bottom: 45px;
`;
