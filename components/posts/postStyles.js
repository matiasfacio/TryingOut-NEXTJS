import styled, { keyframes } from "styled-components";

const animatePost = keyframes`
    0% {
        transform: translateX(100vw) 
    }
    100% {
        transform: translateX(0)
    }
`;

const PostStyle = styled.div`
  max-width: 300px;
  margin-bottom: 100px;
  background-color: whitesmoke;
  transform: translateX(100vw);
  padding: 5px;
  margin: 30px;
  animation: ${animatePost} 1s forwards 1500ms;
  h3 {
    text-transform: uppercase;
  }
  &::before,
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: gray;
    transform: translateY(-10px);
  }
  &::after {
    transform: translate(-42%, 30px);
  }
`;

export default PostStyle;


