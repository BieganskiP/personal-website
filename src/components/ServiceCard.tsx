import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features?: Array<string>
  index?: number
  gradient?: 'teal' | 'emerald' | 'cyan' | 'purple'
}

const gradients = {
  teal: 'from-teal-500 to-cyan-500',
  emerald: 'from-emerald-500 to-teal-500',
  cyan: 'from-cyan-500 to-blue-500',
  purple: 'from-purple-500 to-pink-500',
}

const iconBg = {
  teal: 'bg-teal-500/10 group-hover:bg-teal-500/20',
  emerald: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
  cyan: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
  purple: 'bg-purple-500/10 group-hover:bg-purple-500/20',
}

const iconColors = {
  teal: 'text-teal-400',
  emerald: 'text-emerald-400',
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features = [],
  index = 0,
  gradient = 'teal',
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div className="card card-glow h-full flex flex-col">
        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl ${iconBg[gradient]} flex items-center justify-center mb-6 transition-all duration-300`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className={`w-7 h-7 ${iconColors[gradient]}`} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed grow">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15 + 0.3 + i * 0.1,
                }}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${gradients[gradient]}`} />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Hover gradient border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${gradients[gradient]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
      </div>
    </motion.div>
  )
}

// Compact service card for horizontal layouts
interface ServiceCardCompactProps {
  title: string
  description: string
  icon: LucideIcon
  gradient?: 'teal' | 'emerald' | 'cyan' | 'purple'
}

export function ServiceCardCompact({
  title,
  description,
  icon: Icon,
  gradient = 'teal',
}: ServiceCardCompactProps) {
  return (
    <motion.div
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
      whileHover={{ x: 10 }}
    >
      <div className={`w-12 h-12 rounded-lg ${iconBg[gradient]} flex items-center justify-center shrink-0 transition-all duration-300`}>
        <Icon className={`w-6 h-6 ${iconColors[gradient]}`} />
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
