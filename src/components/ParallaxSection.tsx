import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {  useRef } from 'react'
import type {ReactNode} from 'react';

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number // -1 to 1, negative = opposite direction
  offset?: [string, string] // viewport offset for scroll tracking
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  offset = ['start end', 'end start'],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  )
}

// Background parallax layer
interface ParallaxBackgroundProps {
  className?: string
  speed?: number
  children?: ReactNode
}

export function ParallaxBackground({
  className = '',
  speed = 0.3,
  children,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y }}
        className={`absolute inset-0 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Floating element with scroll-based movement
interface FloatingElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
}

export function FloatingElement({
  children,
  className = '',
  delay = 0,
  duration = 6,
  yOffset = 20,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// Gradient orb that moves with scroll
interface GradientOrbProps {
  color?: 'teal' | 'emerald' | 'cyan'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  position?: { top?: string; left?: string; right?: string; bottom?: string }
  speed?: number
  blur?: number
}

const orbSizes = {
  sm: 'w-32 h-32',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[500px] h-[500px]',
}

const orbColors = {
  teal: 'from-teal-500 to-cyan-500',
  emerald: 'from-emerald-500 to-teal-500',
  cyan: 'from-cyan-500 to-blue-500',
}

export function GradientOrb({
  color = 'teal',
  size = 'lg',
  position = { top: '10%', left: '10%' },
  speed = 0.5,
  blur = 80,
}: GradientOrbProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200])
  const x = useTransform(scrollYProgress, [0, 1], [0, speed * 50])

  return (
    <motion.div
      ref={ref}
      className={`absolute rounded-full bg-linear-to-br ${orbColors[color]} ${orbSizes[size]} pointer-events-none`}
      style={{
        ...position,
        filter: `blur(${blur}px)`,
        opacity: 0.4,
        x,
        y,
      }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Hero section with parallax scroll effect
interface ParallaxHeroProps {
  children: ReactNode
  className?: string
}

export function ParallaxHero({ children, className = '' }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
