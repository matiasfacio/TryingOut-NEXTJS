import styled from 'styled-components'

const PostStyle = styled.div`
    max-width: 600px;
    margin-bottom: 100px;
    background-color: whitesmoke;
    transform: skew(-10deg);
    padding: 5px;
    &::before, ::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: gray;
        transform: translateY(-10px);
    }
`

export default PostStyle