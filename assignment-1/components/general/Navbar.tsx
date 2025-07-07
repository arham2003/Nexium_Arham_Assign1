import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Github, BotSquare } from "@deemlol/next-icons";
import { ModeToggle } from "./modeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
export async function Navbar() {
  return (
    <div>
      <nav className="relative z-10 py-5 flex items-center justify-between bg-transparent rounded px-10">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <BotSquare size={32} color="#2B7FFF" />
            <h1 className="text-3xl font-semibold ">
              Blue<span className="text-blue-500">Quotes</span>
            </h1>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent px-4 py-3 min-w-[40px] min-h-[40px]">
                    Getting started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px]">
                      <li className="row">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/generate"
                          >
                            <BotSquare size={24} color="#000000" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              BlueQuotes
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Not just quotes. It's your daily reboot. Brought
                              to you by real legends 🐐.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="ghost"
              asChild
              className="min-w-[40px] min-h-[40px] px-4 py-3"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="min-w-[40px] min-h-[40px] px-4 py-3"
            >
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl">
          <ModeToggle />

          <Link
            href="https://github.com/arham2003"
            target="_blank"
            className="min-w-[32px] min-h-[32px] inline-flex items-center justify-center rounded-md px-3 py-2 bg-primary text-white hover:bg-primary/90 transition"
            aria-label="Visit Arham's GitHub profile"
          >
            <Github size={22} color="#ffffff" />
            <span className="sr-only">{`Arham’s GitHub`}</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </nav>
    </div>
  );
}
