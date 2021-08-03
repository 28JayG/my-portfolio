import styled from 'styled-components';

export const AppWrapper = styled.section<{ color?: string }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: ${(props) => props.color};
  transition: background-color 200ms linear;
`;

export const StaticColumn = styled.div`
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 93px;
  padding-left: 54px;

  .nav-column {
    flex-grow: 1;
  }
`;

export const Routes = styled.div`
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 93px;
  padding-left: 54px;
`;
