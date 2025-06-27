"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { CircuitBoard, Code2, Home, Sprout, Github } from "lucide-react";
import Link from "next/link";
import { AppLogo } from "./app-logo";

export function SidebarNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      icon: <CircuitBoard className="w-6 h-6" />,
      label: "Electronics Simulator",
      href: "/electronics",
      active: pathname === "/electronics",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "Software Simulator",
      href: "/software",
      active: pathname === "/software",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-background shadow-muted-foreground shadow-right shadow-sm shadown-inner flex flex-col items-center py-4 z-40">
      <div className="mb-6">
        <Link href="/" title="Nuru Playground">
          <div className="logo-pulse hover:animate-[logo-hover_1.5s_ease-in-out_infinite]">
            <AppLogo size={36} />
          </div>
        </Link>
      </div>
      
      {/* GitHub Link */}
      <div className="mb-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/teksafari/nuru-playground"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-md transition-colors hover:bg-muted text-muted-foreground hover:text-foreground"
          title="Nuru GitHub Repository"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>

      <div className="w-8 h-[0.1px] bg-muted-foreground mb-4 rounded-full"></div>

      {navItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link
            href={item.href}
            className={`flex flex-col items-center justify-center w-12 h-12 mb-4 rounded-md transition-colors ${
              item.active
                ? "bg-accent text-accent-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            }`}
            title={item.label}
          >
            {item.icon}
          </Link>
        </React.Fragment>
      ))}

      {/* Sprouting Tree Icon at Bottom */}
      <div className="mt-auto mb-4">
        <a
          target="_blank"
          href="https://teksafari.org"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all group"
          title="Garden"
        >
          <div className="relative">
            <Sprout className="w-7 h-7 text-[#00b4d8] z-10 group-hover:text-[#aac9cf] transition-colors" />
            <div className="absolute inset-0 bg-[#22c55e]/20 rounded-full blur-md sprout-pulse -z-10 group-hover:bg-[#22c55e]/30"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
