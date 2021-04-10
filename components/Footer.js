import FooterContainer, {
  Email,
  Telephone,
  FooterLeft,
  FooterRight,
  Impressum,
  Address,
} from "./styles/footerStyles";


export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <Address>
          _Style_&_Design_ <br/>
          Stargarder Strasse 74 <br/>
          10437 <br/>
          Berlin <br/>
        </Address>
      </FooterLeft>
      <FooterRight>
        <Telephone>Telephone: 01774946117</Telephone>
        <Email>Email: matiaspersonal@gmail.com</Email>
        <Impressum>Impressum</Impressum>
      </FooterRight>
    </FooterContainer>
  );
}
