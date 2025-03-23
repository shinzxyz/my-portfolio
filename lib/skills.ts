/**
 * Skills Management System
 *
 * This file provides utilities for managing skills in the portfolio.
 * It makes it easy to add, categorize, and display skills.
 */

import { siteConfig } from "./config"

// Define skill categories
export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "design" | "tools" | "other"

// Define skill level
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert"

// Define skill interface
export interface Skill {
  name: string
  icon: string
  category: SkillCategory
  level?: SkillLevel
  description?: string
  url?: string
  featured?: boolean
  needsWhiteBackground?: boolean
}

// Helper functions to get skills from config
export const getTechStack = (): Skill[] => {
  return siteConfig.skills.techStack
}

export const getTools = (): Skill[] => {
  return siteConfig.skills.tools
}

// Function to get all skills
export const getAllSkills = (): Skill[] => {
  return [...siteConfig.skills.techStack, ...siteConfig.skills.tools]
}

// Function to add a new skill
export const addSkill = (skill: Skill) => {
  siteConfig.skills.techStack.push(skill)
}

