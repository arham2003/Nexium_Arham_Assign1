"use client";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import CopyToClipboardButton from "@/components/general/copyClipboard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ClipboardCopy, ClipboardCopyIcon } from "lucide-react";

interface Quote {
  text: string;
  author: string;
}

export default function QuotesCarousel({ quotes }: { quotes: Quote[] }) {
  return (
    <Carousel className="w-full" orientation="vertical | horizontal">
      <CarouselContent className="grid grid-rows-1 sm:grid-rows-3 gap-6 pt-4">
        {quotes.map((quote, index) => (
          <CarouselItem
            key={index}
            className="bg-muted p-6 rounded-xl text-center"
          >
            <TypingAnimation className="text-lg italic leading-snug">
              {`“${quote.text}”`}
            </TypingAnimation>
            <p className="mt-3 text-sm text-muted-foreground">
              — {quote.author}
            </p>
            <CopyToClipboardButton text={quote.text}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
