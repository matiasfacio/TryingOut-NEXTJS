import styled from "styled-components";

const LoadingPage = styled.div`
  position: absolute;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 100vh;
  background-color: #292929;
  display: flex;
  padding-left: 50%;
  align-items: center;
  color: white;
  h2 {
    font-size: 4rem;
  }
`;

export default LoadingPage;
