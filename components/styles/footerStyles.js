import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: whitesmoke;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    overflow: scroll;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 0.8rem;
    height: 70vh;
`

export default FooterContainer;

export const Email = styled.div`
    display: inline-block;
    padding: 0 10px;
    font-size: 1rem;
`

export const Telephone = styled(Email)`

`