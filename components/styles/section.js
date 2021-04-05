import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  margin: 200px auto;
  min-height: 80vh;
  border-radius:10px;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`

export default Section;