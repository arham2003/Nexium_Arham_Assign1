import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Github, BotSquare } from "@deemlol/next-icons";
import { ThemeProvider } from "./theme-provider";
import { Toggle } from "../ui/toggle";
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
            <BotSquare size={32} color="#000000" />
            <h1 className="text-3xl font-semibold ">
              Blue<span className="text-blue-500">Quotes</span>
            </h1>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
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
                              Quotes from GOAT 🐐 to make your day and life.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              <Button variant="ghost">Home</Button>
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              <Button variant="ghost">About</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl">
          <ModeToggle />
          <Button variant="default">
            <Link href="https://github.com/arham2003" target="_blank">
              <span>
                <Github size={36} color="#ffffff" />
              </span>
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </nav>
    </div>
  );
}
