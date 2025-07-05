import { BorderBeam } from "@/components/magicui/border-beam";
import { Particles } from "@/components/magicui/particles";
import { ShineBorder } from "@/components/magicui/shine-border";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
function HeroPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
      <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center sm:mb-10 lg:mb-20">
        <div className="text-center capitalize bg-muted px-4 py-1.5 text-lg font-medium absolute rounded-full">
          <span>Introducing Blue Quotes ✨</span>
          <ShineBorder
            borderWidth={2}
            duration={10}
            shineColor={["#3b82f6", "#6366f1"]}
          />
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">
          Infusing Wisdom into Your Every Mood
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Popular Quotes for all categories from books, people, and authors.
        </p>
        <BorderBeam size={250} />
        <div className="space-x-4">
          <Link href="/generate">
            <PulsatingButton>Get Started</PulsatingButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
