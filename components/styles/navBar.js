import styled, { keyframes } from "styled-components";

const FadeInMenu = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100vw);
  }
  100% {
    opacity: 1;
    transform: translateX(0vw);
  }
`;

const Nav = styled.nav`
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100vw);
  transition: transform 5s ease-in-out 2s;
  transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
  animation: 800ms ${FadeInMenu} ease-out 1s forwards;
  z-index: 999;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      padding: 10px;
      color: #292929;
      position: relative;
      margin-right: 50px;
      text-transform: uppercase;
      &:hover {
        background-color: gray;
        color: white;
        border-radius: 10px;
      }
      &::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 100%;
        border-right: 2px gray dotted;
        transform: translate(500%, -20%) skew(-20deg);
      }
    }
  }
`;

export default Nav;

export const NavBarContainer = styled.div`
  width: 100vw;
  display: flex;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
`;

const bringInLogo = keyframes`
  0% {
    transform: skew(0deg);
  }
  100% {
    transform: skew(20deg);
  }
`;

export const Logo = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0px;
  left: 10px;
  background-color: #292929;
  cursor: pointer;
  transform: skew(20deg);
  animation: 1000ms ${bringInLogo} ease-in;
  text-transform: uppercase;
  h2 {
    color: white !important;
    padding: 3px 10px;
  }
`;
