import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SparklesText } from "@/components/magicui/sparkles-text";
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

        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-20 text-wrap">
          <SparklesText>Infusing Wisdom into Your Every Mood</SparklesText>
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Popular Quotes for all categories from books, people, and authors.
        </p>
        <div className="space-x-4">
          <Link href="/generate">
            <PulsatingButton>Get Started</PulsatingButton>
          </Link>
        </div>
      </div>

      <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto">
        <div className="hidden dark:block lg:max-w-[1000px] rounded-[inherit] border object-contain shadow-lg overflow-hidden md:overflow-auto lg:overflow-auto">
          <Image
            src="/darkoutput.jpg"
            alt="Hero Image (dark)"
            width={1000}
            height={600}
            className="rounded-[inherit] object-contain"
            priority
          />
        </div>

        {/* Light mode image */}
        <div className="block dark:hidden lg:max-w-[1000px] rounded-[inherit] border object-contain shadow-lg overflow-hidden md:overflow-auto lg:overflow-auto">
          <Image
            src="/lightoutput.jpg"
            alt="Hero Image (light)"
            width={1000}
            height={600} // adjust height as needed
            className="rounded-[inherit] object-contain"
            priority
          />
        </div>
        <BorderBeam size={250} />
      </div>
    </section>
  );
}

export default HeroPage;
