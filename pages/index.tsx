import Head from "next/head";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VyomGarud - UAV Systems</title>
        <meta
          name="description"
          content="Military-grade UAV solutions with precision engineering and advanced autonomy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}
