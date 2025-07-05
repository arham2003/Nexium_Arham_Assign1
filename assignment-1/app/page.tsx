'use client'
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";
import HeroPage from "./(startpage)/hero/page";

export default function Home() {
  const { resolvedTheme } = useTheme();

  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Particles className="absolute inset-0 -z-10" color={particleColor} />
      <HeroPage />
    </div>
  );
}
