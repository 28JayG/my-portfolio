import styled from 'styled-components';
import { button } from '../../styles/text.styles';

export const ResumeIcon = styled.a.attrs((props) => ({
  href: props.href,
  target: props.target,
}))`
  font-size: 40px;
  opacity: 0.6;
  color: white;
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 0;
  background-color: white;
  padding: 5px;

  @media screen and (min-width: 1025px) {
    background-color: transparent;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    left: 48px;
  }

  .tool-tip {
    ${button};
    z-index: 0;
    visibility: hidden;
    text-align: right;
    position: absolute;
    padding: 10px;
    width: 120px;
    transform: translate(-50%, -100%);
    top: -10px;
    left: 120%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: white;

    &::after {
      content: '';
      position: absolute;
      border: 10px solid rgba(0, 0, 0, 0.7);
      transform: translateY(100%);
      bottom: 0;
      left: 19%;
      border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
    }
  }

  &:hover .tool-tip {
    visibility: visible;
  }
`;
