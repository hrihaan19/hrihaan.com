import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import ResumePage from "./ResumePage";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Hrihaan Bhutani is a builder, researcher, and student board trustee at Emerald High School in Dublin, CA. Class of 2027.",
};

export default function Resume() {
  return (
    <SmoothScroll>
      <Nav />
      <ResumePage />
    </SmoothScroll>
  );
}
