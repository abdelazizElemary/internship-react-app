import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Internship App</title>
      </Head>

      <HomePage />
    </div>
  );
}
