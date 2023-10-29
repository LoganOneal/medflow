"use client";

import Link from "next/link"
import Image from "next/image";

import { cn } from "@/lib/utils"

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
    </nav>
  )
}