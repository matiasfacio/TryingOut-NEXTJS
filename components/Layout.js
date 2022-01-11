import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./styles/mainContainer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
