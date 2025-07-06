"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { quotes } from "./quoteslist";
import ParticlesWrapper from "@/components/general/particlesWrapper";
import Loading from "./loading";

const QuotesCarousel = dynamic(() => import("./quotescarousel"), {
  ssr: false,
});

const categories = [
  { label: "Inspirational", value: "inspirational" },
  { label: "Funny", value: "funny" },
  { label: "Life", value: "life" },
  { label: "Success", value: "success" },
  { label: "Love", value: "love" },
];

export default function GenerateQuotes() {
  const [category, setCategory] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<typeof quotes>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setFilteredQuotes([]);

    setTimeout(() => {
      const matched = quotes.filter((q) => q.category === category);
      const shuffled = matched.sort(() => 0.5 - Math.random()).slice(0, 3);
      setFilteredQuotes(shuffled);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-hidden py-20 px-4 sm:px-8">
      <ParticlesWrapper />

      <div className="max-w-xl mx-auto space-y-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Quote Category</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !category && "text-muted-foreground"
                  )}
                >
                  {category
                    ? categories.find((c) => c.value === category)?.label
                    : "Select category"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search category..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((c) => (
                        <CommandItem
                          key={c.value}
                          value={c.label}
                          onSelect={() => setCategory(c.value)}
                        >
                          {c.label}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              c.value === category ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <Button type="submit" className="w-full" disabled={!category}>
            Generate Me Quotes
          </Button>
        </form>

        <div className="min-h-[200px] flex items-center justify-center">
          {isLoading ? (
            <Loading />
          ) : filteredQuotes.length > 0 ? (
            <QuotesCarousel quotes={filteredQuotes} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
