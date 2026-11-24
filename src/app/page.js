import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
