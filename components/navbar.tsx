"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import { memo } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
]

export const Navbar = memo(function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 right-0 bg-black py-4 sm:py-2 landscape:top-0 portrait:bottom-0 z-50">
      <div className="container mx-auto px-4 sm:px-2">
        <div className="portrait:flex portrait:justify-around portrait:items-center">
          <div className="hidden landscape:block landscape:w-full landscape:fixed landscape:top-0 landscape:left-0 landscape:right-0 landscape:z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center backdrop-blur-md bg-black/70 rounded-full px-6 py-3 shadow-lg">
                <span className="text-yellow-400 text-xl font-semibold whitespace-nowrap">Raol Mukarrozi</span>

                <div className="hidden md:flex items-center justify-center gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-gray-300 hover:text-white text-sm font-medium relative px-2 py-1 transition-colors duration-200",
                        pathname === item.href &&
                          "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-yellow-400",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="md:hidden">
                    <div className="flex space-x-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "text-gray-300 hover:text-white text-xs font-medium relative px-2 py-1 transition-colors duration-200",
                            pathname === item.href &&
                              "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-yellow-400",
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="https://github.com/RaolM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="landscape:hidden flex justify-around items-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-white text-base font-medium relative px-4 py-2",
                  pathname === item.href && "text-yellow-400",
                )}
              >
                {item.name}
                {pathname === item.href && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
})

