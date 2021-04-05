import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  border-radius: 10px;
`;


export default Container;