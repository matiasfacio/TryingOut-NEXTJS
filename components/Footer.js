import FooterContainer, {Email, Telephone} from "./styles/footerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <Email>Email: matiaspersonal@gmail.com</Email>
        <FontAwesomeIcon icon={faEnvelope} size={"2x"} color={"black"} />
      </div>
      <div>
        <Telephone>Telephone: 01774946117</Telephone>
        <FontAwesomeIcon icon={faPhoneSquareAlt} size={"2x"} color={"black"} />
      </div>
    </FooterContainer>
  );
}
