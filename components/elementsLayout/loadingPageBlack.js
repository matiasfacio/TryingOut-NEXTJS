import styled, { keyframes } from 'styled-components';

const AnimateLoadingPage = keyframes`
    0% {
        transform: translateX(150vw);
    }

    50% {
        transform: translateX(-10vw)
    }

    100% {
        transform: translateX(-170vw)
    }
`

const LoadingPage = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 150vw;
    height: 100vh;
    background-color: chocolate;
    display: flex;
    padding-left: 50%;
    align-items: center;
    color: white;
    animation: ${AnimateLoadingPage} 2s forwards;
    h2 {
        font-size: 4rem;
    }
`

export default LoadingPage