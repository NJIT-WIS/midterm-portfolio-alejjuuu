import { ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  title = "Alejandro Velasquez Resume 2023",
}: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        {/* Google Fonts */}
        {/* The Inter font is automatically included through the `next/font` */}

        {/* Remixicon Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        {/* AOS Animation Library */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        {/* Main CSS */}
        {/*<link href="assets/css/main.css" rel="stylesheet" />*/}
      </Head>
      {/* Your other components and content can go here */}
      <div className={inter.className}>{children}</div>{" "}
    </>
  );
}
