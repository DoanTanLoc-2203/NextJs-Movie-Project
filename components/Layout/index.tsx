import { Header } from "../Header";
import { Navbar } from "../Navbar";
import Head from "next/head";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Netflox</title>
        <link rel="icon" href="/netflix.png" />
        <meta
          name="description"
          content="This is a movie infomation website. Just fun!"></meta>
      </Head>
      <Header />
      <Navbar />
      {props.children}
    </>
  );
}
