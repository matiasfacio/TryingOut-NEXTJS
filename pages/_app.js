import Layout from "../components/Layout";
import "../styles/globals.css";
import ProductsContextProvider from '../lib/contexts/ProductsContext'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <ProductsContextProvider>
      <Component {...pageProps} />
      </ProductsContextProvider>
    </Layout>
  );
}

export default MyApp;


