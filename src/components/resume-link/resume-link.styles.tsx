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
  bottom: 14px;
  right: 14px;

  .tool-tip {
    ${button};
    visibility: hidden;
    text-align: center;
    position: absolute;
    padding: 10px;
    width: 120px;
    transform: translate(-50%, -100%);
    top: -10px;
    left: -10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: white;

    &::after{
        content: '';
        position: absolute;
        border: 10px solid rgba(0, 0, 0, 0.7);
        transform: translateY(100%);
        bottom: 0;
        left: 65%;
        border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
    }
  }

  &:hover .tool-tip{
      visibility: visible;
  }
`;
