"use client";

import { ReactNode, useEffect, useRef } from "react";

type DepthProps = {
  children: ReactNode;
  className?: string;
};

function shouldReduceDepth() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touchDevice = window.matchMedia("(pointer: coarse)").matches;
  const saveData = "connection" in navigator && Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
  const lowPowerDevice = (navigator.hardwareConcurrency || 4) <= 2;

  return reducedMotion || touchDevice || saveData || lowPowerDevice;
}

export function TiltCard({ children, className = "" }: DepthProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const activeRef = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || shouldReduceDepth()) return;

    const reset = () => {
      activeRef.current = false;
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--lift", "0px");
    };

    const update = () => {
      frameRef.current = null;
      if (!activeRef.current) return;
      const rect = card.getBoundingClientRect();
      const x = ((pointerRef.current.x - rect.left) / rect.width - 0.5) * 2;
      const y = ((pointerRef.current.y - rect.top) / rect.height - 0.5) * 2;
      card.style.setProperty("--tilt-x", `${(y * -3).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 3).toFixed(2)}deg`);
      card.style.setProperty("--lift", "6px");
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      activeRef.current = true;
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(update);
    };

    card.addEventListener("pointermove", onPointerMove, { passive: true });
    card.addEventListener("pointerleave", reset, { passive: true });

    return () => {
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerleave", reset);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      reset();
    };
  }, []);

  return <div ref={cardRef} className={`depth-card ${className}`}>{children}</div>;
}

export function HeroDepth() {
  const layerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || shouldReduceDepth()) return;

    const update = () => {
      frameRef.current = null;
      const x = pointerRef.current.x * 10;
      const y = pointerRef.current.y * 8;
      layer.style.setProperty("--hero-x", `${x.toFixed(2)}px`);
      layer.style.setProperty("--hero-y", `${y.toFixed(2)}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      };
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div ref={layerRef} aria-hidden="true" className="hero-depth pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-depth-grid absolute inset-0" />
      <div className="hero-depth-plane hero-depth-plane-one" />
      <div className="hero-depth-plane hero-depth-plane-two" />
      <div className="hero-depth-orb hero-depth-orb-one" />
      <div className="hero-depth-orb hero-depth-orb-two" />
    </div>
  );
}
