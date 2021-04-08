import styled from 'styled-components'

const PostStyle = styled.div`
    max-width: 300px;
    margin-bottom: 100px;
    background-color: whitesmoke;
    transform: skew(-10deg);
    padding: 5px;
    margin: 30px;
    h3 {
        text-transform: uppercase;
    }
    &::before, ::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: gray;
        transform: translateY(-10px);
    }
    &::after{
        transform: translate(-42%, 30px);
    }
`

export default PostStyle