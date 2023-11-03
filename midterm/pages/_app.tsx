import { AppProps } from "next/app";
import Layout from "./layout"; // If you are using a layout component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
