import {  motion, useInView } from 'framer-motion'
import {  useEffect, useRef, useState } from 'react'
import type {Variants} from 'framer-motion';
import type {ReactNode} from 'react';

// Word-by-word animation
interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  wordDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function AnimatedText({
  text,
  className = '',
  once = true,
  delay = 0,
  wordDelay = 0.08,
  as: Component = 'p',
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <Component className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="inline"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}

// Character-by-character animation for headlines
interface AnimatedHeadlineProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  charDelay?: number
}

export function AnimatedHeadline({
  text,
  className = '',
  once = true,
  delay = 0,
  charDelay = 0.03,
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: charDelay,
        delayChildren: delay,
      },
    },
  }

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <h1 ref={ref} className={className}>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="inline-block"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  )
}

// Line reveal animation - reveals text line by line
interface LineRevealProps {
  children: ReactNode
  className?: string
  once?: boolean
  delay?: number
}

export function LineReveal({
  children,
  className = '',
  once = true,
  delay = 0,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Counter animation for numbers
interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
  suffix?: string
  once?: boolean
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  className = '',
  suffix = '',
  once = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.round(from + (to - from) * easeProgress)
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {count}
      </motion.span>
      {suffix}
    </span>
  )
}
