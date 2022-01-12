import styled from "styled-components";

const MainHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  background-color: transparent;
  z-index: 2;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background-image: url("./hero.jpg");
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    z-index: -1;
    filter: opacity(0.8);
    opacity: 1;
    filter: grayscale(70%);
    transition: all 500ms ease-in-out;
  }
  &:hover::before {
    filter: none;
    transform: scale(1.1);
  }
  h1 {
    transform: translateX(0vw);
    padding: 30px;
    border: 10px #292929 solid;
  }
`;

export const Left = styled.div`
  padding: 20px;
`;

export default MainHeader;
