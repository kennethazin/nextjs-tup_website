"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { InstagramIcon, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "What we do",
      description:
        "We host events, markets, and workshops, promoting sustainability and community.",
      items: [
        {
          title: "Events",
          href: "/events",
        },
        {
          title: "Markets",
          href: "/markets",
        },
        {
          title: "Corporate events & workshops",
          href: "/corporateevents",
        },
      ],
    },
    {
      title: "Updates",
      href: "/updates",
    },
    {
      title: "Our impact",
      href: "/impact",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 top-0 left-0 bg-background metropolitano">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex  ">
          <Link className="font-semibold pl-3 leading-3.5" href="/">
            <Image
              src="/tup_logo.png"
              alt="The Useless Project logo"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink>
                          <Button variant="ghost">{item.title}</Button>
                        </NavigationMenuLink>
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4 metropolitano">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base metropolitano">
                                {item.title}
                              </p>
                              <p className="text-muted-foreground text-sm ">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10 gap-2">
                              Join the community <InstagramIcon size={20} />
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <a className="flex justify-end w-full gap-4" href="/contact">
          <Button variant="ghost" className="hidden md:inline">
            Contact
          </Button>
        </a>
        <div className="flex w-12 shrink lg:hidden items-end justify-end ">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20  flex flex-col w-full   bg-background py-4">
              <div className="container mx-auto px-4 ">
                {navigationItems.map((item) => (
                  <div key={item.title} className="mb-6">
                    <div className="flex flex-col gap-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-lg">{item.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                        </Link>
                      ) : (
                        <p className="text-lg">{item.title}</p>
                      )}
                      {item.items &&
                        item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex justify-between items-center"
                          >
                            <span className="text-muted-foreground">
                              {subItem.title}
                            </span>
                            <MoveRight className="w-4 h-4 stroke-1" />
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header1 };
