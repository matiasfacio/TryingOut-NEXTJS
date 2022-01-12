import styled, { keyframes } from "styled-components";

const animatePost = keyframes`
    0% {
        transform: translateX(100vw) 
    }
    100% {
        transform: translateX(0)
    }
`;

const PageAnimation = styled.div`
  transform: translateX(100vw);
  animation: ${animatePost} 500ms forwards;
`;

export default PageAnimation;

const animatePostUp = keyframes`
    0% {
        transform: translateY(-100vw) 
    }
    100% {
        transform: translateY(0vw)
    }
`;

export const PageAnimationUp = styled.div`
  transform: translateY(-100vw);
  animation: ${animatePostUp} 500ms forwards;
`;
