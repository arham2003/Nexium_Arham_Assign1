import { Metadata } from "next";
import GenerateClient from "./GenerateClient";
import ParticlesWrapper from "@/components/general/particlesWrapper";

export const metadata: Metadata = {
  title: "Generate Quotes | BlueQuotes",
  description: "Generate Beautiful Quotes.",
};

export default function GeneratePage() {
  return (
    <div className="min-h-screen overflow-hidden py-20 px-4 sm:px-8">
      <ParticlesWrapper />
      <GenerateClient />
    </div>
  );
}
