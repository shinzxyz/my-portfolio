"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import { memo } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
]

// Morphing animation variants
const buttonVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    scale: 1,
    borderRadius: "4px",
  },
  hover: {
    backgroundColor: "rgba(250, 204, 21, 0.1)",
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    backgroundColor: "rgba(250, 204, 21, 0.2)",
    borderRadius: "8px",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
}

// More dramatic animation for mobile
const mobileButtonVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    scale: 1,
    borderRadius: "4px",
  },
  hover: {
    backgroundColor: "rgba(250, 204, 21, 0.15)",
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.9,
    backgroundColor: "rgba(250, 204, 21, 0.25)",
    borderRadius: "12px",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
}

export const Navbar = memo(function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 right-0 bg-black py-4 sm:py-2 landscape:top-0 portrait:bottom-0 z-50">
      <div className="container mx-auto px-4 sm:px-2">
        <div className="portrait:flex portrait:justify-around portrait:items-center">
          <div className="hidden landscape:block landscape:w-full landscape:fixed landscape:top-0 landscape:left-0 landscape:right-0 landscape:z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center backdrop-blur-md bg-black/70 rounded-full px-6 py-3 shadow-lg">
                <motion.span
                  className="text-yellow-400 text-xl font-semibold whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {siteConfig.name}
                </motion.span>

                <div className="hidden md:flex items-center justify-center gap-8">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="px-2 py-1 rounded-md"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "text-gray-300 hover:text-white text-sm font-medium relative",
                          pathname === item.href && "text-white",
                        )}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <motion.span
                            className="absolute left-0 right-0 -bottom-1 h-0.5 bg-yellow-400"
                            layoutId="underline"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="md:hidden">
                    <div className="flex space-x-4">
                      {navItems.map((item) => (
                        <motion.div
                          key={item.name}
                          variants={buttonVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                          className="px-2 py-1 rounded-md"
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "text-gray-300 hover:text-white text-xs font-medium relative",
                              pathname === item.href && "text-white",
                            )}
                          >
                            {item.name}
                            {pathname === item.href && (
                              <motion.span
                                className="absolute left-0 right-0 -bottom-1 h-0.5 bg-yellow-400"
                                layoutId="underline-small"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="landscape:hidden flex justify-around items-center w-full">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={mobileButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-4 py-2 rounded-md"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-white text-base font-medium relative",
                    pathname === item.href && "text-yellow-400",
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                      layoutId="underline-mobile"
                      initial={{ scaleX: 0.5, opacity: 0.5 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
})

