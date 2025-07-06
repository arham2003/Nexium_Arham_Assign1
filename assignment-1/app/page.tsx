import HeroPage from "./(startpage)/hero/page";
import ParticlesWrapper from "@/components/general/particlesWrapper";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ParticlesWrapper />
      <HeroPage />
    </div>
  );
}
