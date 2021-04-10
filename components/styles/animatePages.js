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
  animation: ${animatePost} 1s forwards 1500ms;
`

export default PageAnimation;