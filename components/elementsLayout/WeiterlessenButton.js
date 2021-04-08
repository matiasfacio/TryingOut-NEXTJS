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
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 5px 5px 10px gray;
    outline: none;
    font-weight: 500;
    color: black;
`
