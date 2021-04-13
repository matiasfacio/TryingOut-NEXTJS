import styled from 'styled-components'

const DisplaySales = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    row-gap: 20px;
    column-gap: 30px;
    margin: 100px auto;
    h1 {
        display: block;
        width: 100%;
        padding-left: 2em;
    }
    span {
        color: red;
    }
`

export default DisplaySales;