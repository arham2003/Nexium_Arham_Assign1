"use client";

import React, { Suspense, useState, useTransition } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { quotes } from "./quoteslist";
import ParticlesWrapper from "@/components/general/particlesWrapper";

const QuotesCarousel = dynamic(() => import("./quotescarousel"), {
  ssr: false,
  loading: () => <></>,
});

const categories = [
  { label: "Inspirational", value: "inspirational" },
  { label: "Funny", value: "funny" },
  { label: "Life", value: "life" },
  { label: "Success", value: "success" },
  { label: "Love", value: "love" },
];

const FormSchema = z.object({
  category: z.string({ required_error: "Please select a category" }),
});

export default function GenerateQuotes() {
  const [filteredQuotes, setFilteredQuotes] = useState<typeof quotes>([]);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { category: "" },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      setFilteredQuotes([]);
      setTimeout(() => {
        const matched = quotes.filter((q) => q.category === data.category);
        const shuffled = matched.sort(() => 0.5 - Math.random()).slice(0, 3);
        setFilteredQuotes(shuffled);
      }, 1000);
    });
  };

  return (
    <div className=" min-h-screen overflow-hidden py-20 px-4 sm:px-8">
      <ParticlesWrapper />

      <div className="max-w-xl mx-auto space-y-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Quote Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? categories.find((c) => c.value === field.value)
                                ?.label
                            : "Select category"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search category..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {categories.map((c) => (
                              <CommandItem
                                key={c.value}
                                value={c.label}
                                onSelect={() =>
                                  form.setValue("category", c.value)
                                }
                              >
                                {c.label}
                                <Check
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    c.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Generate Me Quotes
            </Button>
          </form>
        </Form>

        <Suspense fallback={<Loading />}>
          {filteredQuotes.length > 0 && (
            <QuotesCarousel quotes={filteredQuotes} />
          )}
        </Suspense>
      </div>
    </div>
  );
}
