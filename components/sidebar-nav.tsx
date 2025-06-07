"use client"

import { usePathname, useRouter } from 'next/navigation'
import { CircuitBoard, Code2 } from 'lucide-react'
import Link from 'next/link'

export function SidebarNav() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    {
      icon: <CircuitBoard className="w-6 h-6" />,
      label: "Electronics Simulator",
      href: "/electronics",
      active: pathname === "/electronics"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "Software Simulator",
      href: "/software",
      active: pathname === "/software"
    }
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-background border-r border-border flex flex-col items-center py-8 z-40">
      {navItems.map((item) => (
        <Link
          key={item.href}
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
      ))}
    </div>
  )
}
