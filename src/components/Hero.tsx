"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FIRST = "HRIHAAN";
const LAST  = "BHUTANI";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

function SplitWord({ word, baseDelay }: { word: string; baseDelay: number }) {
  return (
    <span className="inline-block overflow-hidden leading-none" aria-label={word}>
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.75, delay: baseDelay + i * 0.04, ease: easeOutExpo }}
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function FadeUp({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.65, delay, ease: easeOutExpo }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width - 0.5);
      mouseY.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => { mouseX.set(0); mouseY.set(0); };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [mouseX, mouseY]);

  const firstDelay = 0.1;
  const lastDelay  = firstDelay + FIRST.length * 0.04 + 0.05;
  const afterDelay = lastDelay  + LAST.length  * 0.04 + 0.15;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex flex-col justify-end"
      style={{
        minHeight: "100svh",
        paddingBottom: "clamp(3rem, 7vw, 6rem)",
        perspective: "1200px",
      }}
    >
      {/* ── Portrait — right half, vertically centred in viewport ── */}
      <motion.div
        className="absolute hidden md:block"
        style={{
          right: "clamp(1.5rem, 5vw, 5rem)",
          top: "12%",
          transform: "translateY(-10%)",
          width: "clamp(280px, 26vw, 400px)",
          height: "70vh",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: firstDelay + 0.1, ease: easeOutExpo }}
      >
        <Image
          src="/hrihaan.png"
          alt="Hrihaan Bhutani"
          fill
          priority
          sizes="(max-width: 1440px) 26vw, 400px"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(8%) contrast(1.06)",
          }}
        />
        {/* Fade top + bottom edges into canvas */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, var(--bg) 0%, transparent 18%, transparent 72%, var(--bg) 100%)",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      <div className="container-ed">

        {/* ── Name ── */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="mb-6 md:mb-8 select-none"
        >
          <div className="text-hero" style={{ color: "var(--fg)" }}>
            <SplitWord word={FIRST} baseDelay={firstDelay} />
            <br />
            <SplitWord word={LAST}  baseDelay={lastDelay} />
          </div>
        </motion.div>

        {/* ── Rule ── */}
        <FadeUp delay={afterDelay}>
          <div className="w-full mb-8 md:mb-10" style={{ height: "1px", background: "var(--border-mid)" }} />
        </FadeUp>

        {/* ── Meta row ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left: identity */}
          <div className="flex flex-col gap-3 max-w-xl">
            <FadeUp delay={afterDelay + 0.05}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "var(--fg)", lineHeight: 1.4, fontWeight: 300 }}>
                Builder. Researcher. Student Board Trustee.
              </p>
            </FadeUp>
            <FadeUp delay={afterDelay + 0.12}>
              <p className="text-label" style={{ color: "var(--fg-muted)" }}>
                Emerald High School · Dublin, CA · Class of 2027
              </p>
            </FadeUp>
          </div>

          {/* Right: currently + contact */}
          <div className="flex flex-col gap-3 md:items-end">
            <FadeUp delay={afterDelay + 0.18}>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: "var(--accent)", opacity: 0.6 }} />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "var(--accent)" }} />
                </span>
                <span className="text-label" style={{ color: "var(--fg-muted)" }}>
                  Building Emerald Echo — EHS course intelligence
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={afterDelay + 0.24}>
              <a
                href="mailto:hribhu19@gmail.com"
                className="link-line link-accent"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 300, color: "var(--fg-muted)", letterSpacing: "0.02em" }}
              >
                hribhu19@gmail.com
              </a>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-[clamp(1.5rem,5vw,5rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: afterDelay + 0.5, duration: 0.6 }}
      >
        <span className="text-label" style={{ color: "var(--fg-subtle)" }}>Scroll ↓</span>
      </motion.div>
    </section>
  );
}
