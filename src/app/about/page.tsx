import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hrihaan Bhutani — builder, researcher, and Student Board Trustee at Emerald High School in Dublin, CA. Class of 2027.",
};

export default function About() {
  return (
    <SmoothScroll>
      <Nav />
      <AboutPage />
    </SmoothScroll>
  );
}
