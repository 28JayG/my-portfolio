import styled from 'styled-components';

export const AppWrapper = styled.section<{ color?: string }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
  background-color: ${(props) => props.color};
  transition: background-color 200ms ease;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    overflow: auto;
  }
`;

export const StaticColumn = styled.div`
  flex-basis: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 93px;
  width: 100%;
  height: auto;
  padding-left: 0;

  .nav-column {
    flex-grow: 1;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  @media screen and (min-width: 1025px) {
    width: auto;
    height: 100%;
    padding-left: 30px;
    flex-basis: 43%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 50%;
    padding-left: 54px;
  }
`;

export const Routes = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 93px;
  width: 100%;
  height: auto;
  align-items: center;
  padding-left: 0;

  @media screen and (min-width: 1025px) {
    height: 100%;
    padding-left: 30px;
    align-items: flex-start;
    flex-basis: 57%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 50%;
  }
`;
