"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Award, Music, Github, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type TabType = "projects" | "certificates" | "spotify-albums"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>("projects")

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      icon: Code2,
      available: true,
    },
    {
      id: "certificates",
      label: "Certificates (Soon)",
      icon: Award,
      available: false,
    },
    {
      id: "spotify-albums",
      label: "Spotify (Soon)",
      icon: Music,
      available: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Portfolio Showcase</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my journey through projects, certifications, and favorite music. Each section represents a part of
              who I am.
            </p>
          </motion.div>

          <div className="relative mb-12">
            <div className="bg-zinc-900 rounded-2xl" />

            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => (tab.available ? setActiveTab(tab.id as TabType) : null)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-xl transition-all duration-300 relative text-center h-full",
                    tab.available
                      ? activeTab === tab.id
                        ? "bg-zinc-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-zinc-800/50"
                      : "text-gray-500 bg-zinc-800/30 cursor-not-allowed",
                  )}
                >
                  <tab.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", !tab.available && "opacity-50")} />
                  <span className="text-xs sm:text-sm font-medium line-clamp-1">{tab.label}</span>
                  {activeTab === tab.id && tab.available && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full"></span>
                  )}
                  {!tab.available && (
                    <span className="absolute -top-1 -right-1 text-xs px-1.5 py-0.5 bg-yellow-400/20 text-yellow-400 rounded-full hidden sm:inline-block">
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {activeTab === "projects" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-white">My Projects</h3>

                  <div className="grid gap-8">
                    {/* Project Card - Now full width with larger image */}
                    <motion.div
                      className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-yellow-400/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-64 md:h-80 w-full">
                        <Image
                          src="https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/my-portofolio.jpg"
                          alt="Portfolio Project"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <h4 className="text-2xl font-bold text-white">Personal Portfolio</h4>
                          <div className="flex gap-2">
                            <Link
                              href="https://github.com/latesturl/my-portofolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 sm:p-2 bg-zinc-900/80 rounded-full hover:bg-yellow-400/20 active:bg-yellow-400/30 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                              style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                              <Github className="w-5 h-5 sm:w-5 sm:h-5" />
                              <span className="sr-only">GitHub Repository</span>
                            </Link>
                            <Link
                              href="https://github.com/latesturl/my-portofolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 sm:p-2 bg-zinc-900/80 rounded-full hover:bg-yellow-400/20 active:bg-yellow-400/30 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                              style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                              <ExternalLink className="w-5 h-5 sm:w-5 sm:h-5" />
                              <span className="sr-only">Live Demo</span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-gray-300 mb-4">
                          A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Next.js</span>
                          <span className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-xs">React</span>
                          <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs">
                            Tailwind CSS
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                            Framer Motion
                          </span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                            TypeScript
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Coming Soon Project */}
                    <motion.div
                      className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center p-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div>
                        <div className="w-16 h-16 bg-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Code2 className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">More Projects Coming Soon</h4>
                        <p className="text-gray-400">Stay tuned for upcoming projects.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Certificate content coming soon...</h3>
                </div>
              </div>
            )}

            {activeTab === "spotify-albums" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white">My Favorite Albums</h3>
                  <p className="text-gray-400 mb-4">Spotify album collection coming soon...</p>

                  <div className="flex items-center justify-center p-12">
                    <div className="text-center">
                      <Music className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                      <p className="text-gray-300">Stay tuned for my music collection!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

