"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/config"
import { getAllSkills, getTechStack, getTools, type Skill } from "@/lib/skills"

// Animation variants for tab buttons
const tabButtonVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    scale: 1,
    borderRadius: "0.5rem",
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
    scale: 0.95,
    backgroundColor: "rgba(250, 204, 21, 0.25)",
    borderRadius: "0.75rem",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  active: {
    backgroundColor: "rgba(250, 204, 21, 0.2)",
    color: "rgb(250, 204, 21)",
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  inactive: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgb(156, 163, 175)",
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

type TabType = "tech" | "tools" | "all"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>("tech")

  // Get skills from the skills database
  const techStack = getTechStack()
  const tools = getTools()
  const allSkills = getAllSkills()

  // Function to get the current skills based on active tab
  const getCurrentSkills = (): Skill[] => {
    switch (activeTab) {
      case "tech":
        return techStack
      case "tools":
        return tools
      case "all":
        return allSkills
      default:
        return techStack
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-3xl mx-auto">
          <motion.div className="bg-zinc-900/50 rounded-lg p-6 mb-8" {...fadeInUp}>
            <motion.h1
              className="text-2xl font-bold mb-6 inline-block relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              About Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </motion.h1>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Optimized glowing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 blur-md opacity-50" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300" />
                <div className="relative w-32 h-32">
                  <Image
                    src={siteConfig.media.profileImage || "/placeholder.svg"}
                    alt="My Profile"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-black object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <div className="flex-1">
                <p className="text-gray-300 mb-4">
                  Hi everyone! I'm a passionate web developer with expertise in both front-end and back-end development.
                  With several years of experience in web development, I specialize in creating responsive and
                  user-friendly applications.
                </p>
                <p className="text-gray-300">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. My goal is to
                  build websites that not only function flawlessly but also provide an engaging user experience.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6 mb-8"
            {...fadeInUp}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-6 inline-block relative">
              Skills
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h2>

            <div className="flex gap-4 mb-6">
              <motion.button
                onClick={() => setActiveTab("tech")}
                variants={tabButtonVariants}
                initial="initial"
                whileHover={activeTab !== "tech" ? "hover" : undefined}
                whileTap={activeTab !== "tech" ? "tap" : undefined}
                animate={activeTab === "tech" ? "active" : "inactive"}
                className="px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden"
              >
                Tech Stack
                {activeTab === "tech" && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    layoutId="tabIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("tools")}
                variants={tabButtonVariants}
                initial="initial"
                whileHover={activeTab !== "tools" ? "hover" : undefined}
                whileTap={activeTab !== "tools" ? "tap" : undefined}
                animate={activeTab === "tools" ? "active" : "inactive"}
                className="px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden"
              >
                Tools
                {activeTab === "tools" && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    layoutId="tabIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("all")}
                variants={tabButtonVariants}
                initial="initial"
                whileHover={activeTab !== "all" ? "hover" : undefined}
                whileTap={activeTab !== "all" ? "tap" : undefined}
                animate={activeTab === "all" ? "active" : "inactive"}
                className="px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden"
              >
                All Skills
                {activeTab === "all" && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    layoutId="tabIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: { staggerChildren: 0.03 },
                },
              }}
              key={activeTab} // Re-render when tab changes
            >
              {getCurrentSkills().map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-lg border border-yellow-400 hover:border-yellow-400/50 transition-colors bg-zinc-900/50"
                  variants={fadeInUp}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(250, 204, 21, 0.1), 0 4px 6px -2px rgba(250, 204, 21, 0.05)",
                  }}
                >
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className={cn(
                        "object-contain",
                        // Apply white background to logos that need it
                        skill.needsWhiteBackground && "bg-white rounded-full p-1",
                      )}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span
                        className={cn(
                          "text-xs",
                          skill.level === "beginner" && "text-blue-400",
                          skill.level === "intermediate" && "text-green-400",
                          skill.level === "advanced" && "text-yellow-400",
                          skill.level === "expert" && "text-purple-400",
                        )}
                      >
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </span>
                    )}
                    {skill.description && <p className="text-xs text-gray-400 mt-1">{skill.description}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6"
            {...fadeInUp}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 inline-block relative">
              Contact Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.social.email}`} className="text-yellow-400 hover:underline">
                    {siteConfig.social.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">{siteConfig.location}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Available for</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {siteConfig.roles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

