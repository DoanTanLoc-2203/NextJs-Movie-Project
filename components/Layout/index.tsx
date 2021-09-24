import { Header } from "../Header";
import { Navbar } from "../Navbar";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Netflox</title>
      </Head>
      <Header />
      <Navbar />
      {props.children}
    </>
  );
}
