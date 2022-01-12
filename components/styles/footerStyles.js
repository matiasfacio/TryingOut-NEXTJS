import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #292929;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #292929;
  overflow: scroll;
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  border-top: 3px gray solid;
`;

export default FooterContainer;

export const FooterLeft = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterRight = styled(FooterLeft)`
  flex-direction: column;
  align-items: flex-end;
`;

export const Email = styled.div`
  color: white;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 300;
  display: block;
  line-height: 1.6;
`;

export const Telephone = styled(Email)``;
export const Impressum = styled(Email)``;
export const Address = styled(Email)``;
