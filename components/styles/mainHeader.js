import styled, { keyframes } from "styled-components";

const bringHeroIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity: 1;
  }
`

const bringTitleIn = keyframes`
 0% {
    transform: translateX(-20vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

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
  &::before{
    content: "";
    position: absolute;
    background-image: url('./hero.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    z-index: -1;
    filter: opacity(0.8);
    opacity: 0;
    animation: ${bringHeroIn} 2s forwards;
    filter: grayscale(70%);
    transition: all 500ms ease-in-out; 
  }
  &:hover::before{
    filter: none;
    transform: scale(1.1);
  }
  h1 {
    transform: translateX(-100vw);
    animation: ${bringTitleIn} 1s forwards 1s;
  }
`;

export const Left = styled.div`
 border: 10px black solid;
 padding: 30px;
`

export default MainHeader;
