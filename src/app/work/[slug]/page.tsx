import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import CaseStudy from "./CaseStudy";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — Hrihaan Bhutani`,
      description: project.subtitle,
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <SmoothScroll>
      <Nav />
      <CaseStudy project={project} />
    </SmoothScroll>
  );
}
