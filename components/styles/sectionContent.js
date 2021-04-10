import styled from 'styled-components'

const SectionContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  background-image: ${props => props.props.image};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  display: flex;
  ::after {
    content: '${props => props.props.text}';
    position: absolute;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 600;
    transform: translate(50%, 250%);
  }
  
`
export default SectionContent