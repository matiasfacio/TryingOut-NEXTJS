import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  max-width: 1200px;
  margin: 200px auto;
  min-height: 80vh;
  border-radius:10px;
  overflow: hidden;
  transition: all 500ms ease-in-out;

  &::before {
    position: absolute;
    content:${props => props.theme.image};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    transition: all 500ms ease-in-out;
    filter: grayscale(70%);
  }
  &::after {
    position: absolute;
    content: '${props => props.theme.text}';
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: black;
    width: 100%;
    text-align: center;
    padding-top: 10%;
    top: 0%;
    transition: all 500ms ease-in-out;
   
  }
  &:hover::before {
      transform: scale(1.1);
      filter: none;
    }
 
`

export default Section;