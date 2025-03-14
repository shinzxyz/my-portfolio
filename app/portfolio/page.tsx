"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Award, Music, Github, ExternalLink, Play, Pause } from "lucide-react"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

type TabType = "projects" | "certificates" | "spotify-albums"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>("projects")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      icon: Code2,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: Award,
    },
    {
      id: "spotify-albums",
      label: "Spotify Albums",
      icon: Music,
    },
  ]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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

            <div className="relative flex justify-around items-center p-4 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={cn(
                    "flex flex-col items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-zinc-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-zinc-800/50",
                  )}
                >
                  <tab.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-64 md:h-80 w-full">
                        <Image
                          src="https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/my-portofolio.jpg"
                          alt="Portfolio Project"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <h4 className="text-2xl font-bold text-white">Personal Portfolio</h4>
                          <div className="flex gap-2">
                            <Link
                              href="https://github.com/latesturl/my-portofolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-zinc-900/80 rounded-full hover:bg-yellow-400/20 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                              <span className="sr-only">GitHub Repository</span>
                            </Link>
                            <Link
                              href="https://github.com/latesturl/my-portofolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-zinc-900/80 rounded-full hover:bg-yellow-400/20 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
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
                      transition={{ duration: 0.5, delay: 0.3 }}
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
                  <h3 className="text-xl font-semibold mb-6 text-white">Now Playing</h3>

                  {/* Ultra Minimal Spotify Album */}
                  <div className="flex flex-col items-center max-w-xs mx-auto">
                    {/* Album Art with Play Button Overlay */}
                    <div className="relative w-full aspect-square mb-4 cursor-pointer group" onClick={togglePlayPause}>
                      <Image
                        src="https://i.scdn.co/image/ab67616d00001e0209df81649cd175b209c2c711"
                        alt="EXCITE Album Cover"
                        fill
                        className="rounded-md object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center">
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-black" />
                          ) : (
                            <Play className="w-5 h-5 text-black ml-0.5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Song Info */}
                    <div className="text-center mb-3">
                      <h2 className="text-xl font-bold">EXCITE</h2>
                      <p className="text-gray-400 text-sm">Daichi Miura</p>
                    </div>

                    {/* Audio Element (Hidden) */}
                    <audio ref={audioRef} src="https://files.catbox.moe/boes1b.mp3" preload="auto" />

                    {/* Minimal Time Display */}
                    <div className="text-xs text-gray-400 mb-3">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={togglePlayPause}
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        isPlaying
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-green-500 text-black hover:bg-green-400",
                      )}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
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

