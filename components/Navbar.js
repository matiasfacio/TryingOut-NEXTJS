import Nav, { Logo, NavBarContainer} from "./styles/navBar";
import Link from "next/link";

function Navbar() {
  return (
    <NavBarContainer>
      <Logo>
          <Link href="/"><h2 style={{ color: "black" }}>_Style_&_Design</h2></Link>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link href="/#">Home</Link>
          </li>
          <li>
            <Link href="/sales">Sales</Link>
          </li>
          <li>
            <Link href="/forward">Forward</Link>
          </li>
          <li>
            <Link href="/posts">Blog</Link>
          </li>
        </ul>
      </Nav>
    </NavBarContainer>
  );
}

export default Navbar;
