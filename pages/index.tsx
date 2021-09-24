import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";

interface HomeProps {}

export default function Home(props: HomeProps) {
  return <div>This is Home page</div>;
}
