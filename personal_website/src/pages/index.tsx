import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import WebsiteHeader from "@/components/WebsiteHeader";
import BottomContainer from "@/components/BottomContainer";
import ContactMe from "@/components/ContactMe";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="../styles/styles.css" />
        <link rel="icon" href="../../public/favicon.ico" />{" "}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oxygen&family=Play&family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />
        <title>Jakob Faarbæk Gregersen</title>
      </Head>
      <div className={styles.body}>
        <WebsiteHeader />
        <div className="middle-container">
          <Profile />
          <hr />
          <Skills />
          <hr />
          <ContactMe />
        </div>
      </div>
      <BottomContainer />
    </>
  );
}
