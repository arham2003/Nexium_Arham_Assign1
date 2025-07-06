"use client";

import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";

export default function ParticlesWrapper() {
  const { resolvedTheme } = useTheme();
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  return <Particles className="absolute inset-0 -z-10" color={particleColor} />;
}
