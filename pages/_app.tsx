// pages/_app.tsx

import "../styless/globals.css";
import Layout from "./layout"; // If you are using a layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
