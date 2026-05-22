import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Now from "@/components/Now";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Leadership />
        <Now />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
