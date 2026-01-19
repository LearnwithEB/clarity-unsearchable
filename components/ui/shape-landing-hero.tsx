"use client"

import React from "react"
import { motion } from "framer-motion"
import { Circle } from "lucide-react"

interface ElegantShapeProps {
  className?: string
  delay?: number
}

const ElegantShape: React.FC<ElegantShapeProps> = ({ className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: "600px",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4), transparent)",
        filter: "blur(40px)",
        transform: "rotate(-45deg)",
      }}
    />
  )
}

interface HeroGeometricProps {
  badge?: string
  title1?: string
  title2?: string
}

export const HeroGeometric: React.FC<HeroGeometricProps> = ({
  badge = "AI Literacy · Generational Wisdom",
  title1 = "Clarity and the",
  title2 = "Unsearchable",
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Geometric background layers */}
      <ElegantShape className="top-20 left-10" delay={0} />
      <ElegantShape className="top-40 right-20" delay={1} />
      <ElegantShape className="bottom-20 left-1/4" delay={2} />
      <ElegantShape className="bottom-40 right-1/3" delay={1.5} />
      <ElegantShape className="top-1/2 left-0" delay={0.5} />
      <ElegantShape className="top-1/3 right-0" delay={2.5} />

      {/* Soft indigo/rose glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-rose-900/20" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <Circle className="h-3 w-3 text-cyan-400" />
            <span className="text-xs font-medium text-white/80">{badge}</span>
          </motion.div>
        )}

        {/* Headings */}
        <div className="flex flex-col gap-2">
          {title1 && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title1}
            </motion.h1>
          )}
          {title2 && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title2}
            </motion.h1>
          )}
        </div>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl text-base text-white/70 md:text-lg"
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge technology.
        </motion.p>
      </div>
    </div>
  )
}
