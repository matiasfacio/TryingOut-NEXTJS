import Layout from "../components/Layout";
import "../styles/globals.css";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";

function ErrorFallback({ error }) {
  return (
    <div>
      <p>ops! Something went wrong:</p> <br />
      <pre>{error.message}</pre>
      <pre>Please, reload this page.</pre>
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
