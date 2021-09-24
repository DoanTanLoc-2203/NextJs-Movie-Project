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
      </Head>
      <Header />
      <Navbar />
      {props.children}
    </>
  );
}
