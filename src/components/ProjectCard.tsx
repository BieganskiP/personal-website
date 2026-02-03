import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tags?: Array<string>
  liveUrl?: string
  githubUrl?: string
  index?: number
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  tags = [],
  liveUrl,
  githubUrl,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-6xl font-bold text-slate-600">
                {title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          />

          {/* Links overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-slate-900 hover:bg-teal-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-400 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Bento grid project card - larger, more visual
interface BentoProjectCardProps {
  title: string
  description: string
  image?: string
  tags?: Array<string>
  liveUrl?: string
  size?: 'normal' | 'large' | 'tall' | 'wide'
  index?: number
}

const sizeClasses = {
  normal: '',
  large: 'md:col-span-2 md:row-span-2',
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
}

export function BentoProjectCard({
  title,
  description,
  image,
  tags = [],
  liveUrl,
  size = 'normal',
  index = 0,
}: BentoProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative ${sizeClasses[size]}`}
    >
      <a
        href={liveUrl || '#'}
        target={liveUrl ? '_blank' : undefined}
        rel={liveUrl ? 'noopener noreferrer' : undefined}
        className="block h-full"
      >
        <div className="relative h-full min-h-[250px] overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-500">
          {/* Background Image */}
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-800" />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-slate-300 text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </p>

            {/* Arrow indicator */}
            <motion.div
              className="mt-4 flex items-center gap-2 text-teal-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span>Zobacz projekt</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  )
}
