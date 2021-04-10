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
  /* max-width: 300px; */
  margin-bottom: 100px;
  background-color: white;
  transform: translateX(100vw);
  padding: 5px;
  margin: 30px;
  animation: ${animatePost} 1s forwards 1500ms;
  h3 {
    text-transform: uppercase;
  }
`;

export default PostStyle;


