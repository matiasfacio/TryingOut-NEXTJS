import styled from 'styled-components';

export default function WeiterlessenButton({children}) {
    return (
        <Button>
            {children}
        </Button>
    )
}

const Button = styled.button`
    background-color: white;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px black solid;
    outline: none;
    font-weight: 500;
    font-size: 0.8rem;
    color: black;
    cursor: pointer;
    transform: skewX(-20deg);
    text-transform: capitalize;
    transition: all 500ms ease-in-out;
    &:hover {
        background-color: black;
        color: white;
        transform: scale(1.1) skewX(0deg);
    }
`
