import Layout from "../components/Layout";
import "../styles/globals.css";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";

function ErrorFallback({ error }) {
  return (
    <div>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <p>ops! Something went wrong:</p> <br />
      <pre>Please, go to home and reload the page.</pre>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}

export default MyApp;
