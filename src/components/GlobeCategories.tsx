import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Globe, Laptop, Plug, Plus, Smartphone, Zap } from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  {
    title: 'Strony i sklepy',
    icon: Globe,
    color: 'emerald' as const,
    items: [
      { name: 'Landing pages', desc: 'Strony sprzedażowe z wysoką konwersją' },
      { name: 'Strony firmowe', desc: 'Profesjonalna wizytówka Twojej firmy w sieci' },
      { name: 'Sklepy e-commerce', desc: 'Pełne rozwiązania z płatnościami i magazynem' },
      { name: 'Blogi i portale', desc: 'Strony z systemem zarządzania treścią' },
    ],
  },
  {
    title: 'Aplikacje webowe',
    icon: Laptop,
    color: 'cyan' as const,
    items: [
      { name: 'Systemy CRM', desc: 'Zarządzanie klientami i sprzedażą' },
      { name: 'Panele administracyjne', desc: 'Dashboardy do zarządzania danymi' },
      { name: 'Aplikacje SaaS', desc: 'Produkty software-as-a-service' },
      { name: 'Portale klientów', desc: 'Dedykowane strefy dla użytkowników' },
    ],
  },
  {
    title: 'Aplikacje mobilne',
    icon: Smartphone,
    color: 'teal' as const,
    items: [
      { name: 'PWA', desc: 'Progressive Web Apps działające offline' },
      { name: 'Aplikacje hybrydowe', desc: 'Jeden kod, wiele platform' },
      { name: 'Aplikacje wewnętrzne', desc: 'Narzędzia dla pracowników w terenie' },
      { name: 'Aplikacje dla klientów', desc: 'Mobilny dostęp do usług' },
    ],
  },
  {
    title: 'Narzędzia AI',
    icon: Bot,
    color: 'emerald' as const,
    items: [
      { name: 'Chatboty', desc: 'Inteligentni asystenci na stronie' },
      { name: 'Analiza dokumentów', desc: 'Automatyczne przetwarzanie plików' },
      { name: 'Generowanie treści', desc: 'Wsparcie AI w tworzeniu contentu' },
      { name: 'Custom AI tools', desc: 'Dedykowane narzędzia AI dla firmy' },
    ],
  },
  {
    title: 'Automatyzacja',
    icon: Zap,
    color: 'cyan' as const,
    items: [
      { name: 'Workflow automation', desc: 'Automatyczne procesy biznesowe' },
      { name: 'Email sequences', desc: 'Automatyczne sekwencje mailowe' },
      { name: 'Raportowanie', desc: 'Automatyczne generowanie raportów' },
      { name: 'Zadania cykliczne', desc: 'Scheduled tasks i cron jobs' },
    ],
  },
  {
    title: 'Integracje',
    icon: Plug,
    color: 'teal' as const,
    items: [
      { name: 'API integrations', desc: 'Łączenie zewnętrznych usług' },
      { name: 'Webhooks', desc: 'Real-time komunikacja między systemami' },
      { name: 'Data sync', desc: 'Synchronizacja danych między aplikacjami' },
      { name: 'Custom connectors', desc: 'Dedykowane łączniki systemów' },
    ],
  },
]

const colorMap = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    hex: '#34d399',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    hex: '#22d3ee',
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    text: 'text-teal-400',
    hex: '#2dd4bf',
  },
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Build an rgba() string from a hex colour + alpha 0‑1 */
const rgba = (hex: string, a: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

// ── Responsive orbit config (more compact) ────────────────────────────────────

function useOrbitConfig() {
  const [c, setC] = useState({ orbitRx: 260, orbitRy: 175, globeSize: 210, height: 530 })

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setC({ orbitRx: 110, orbitRy: 100, globeSize: 105, height: 430 })
      else if (w < 768) setC({ orbitRx: 155, orbitRy: 125, globeSize: 145, height: 470 })
      else if (w < 1024) setC({ orbitRx: 210, orbitRy: 150, globeSize: 180, height: 500 })
      else setC({ orbitRx: 260, orbitRy: 175, globeSize: 210, height: 530 })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return c
}

// ── Wireframe Globe (colour‑reactive) ─────────────────────────────────────────

function WireframeGlobe({
  size,
  colorHex = '#2dd4bf',
  expanded = false,
}: {
  size: number
  colorHex?: string
  expanded?: boolean
}) {
  const r = size / 2
  const longitudes = [0, 30, 60, 90, 120, 150]
  const latitudes = [-60, -30, 0, 30, 60]

  const ringAlpha = expanded ? 0.18 : 0.07
  const outerAlpha = expanded ? 0.4 : 0.18

  return (
    <motion.div
      animate={{ opacity: expanded ? 1 : 0.7, scale: expanded ? 1.55 : 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ width: size, height: size, perspective: 800 }}
      className="relative"
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border"
        animate={{ borderColor: rgba(colorHex, outerAlpha) }}
        transition={{ duration: 0.5 }}
      />

      {/* Tilt wrapper */}
      <div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(18deg)' }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: expanded ? 14 : 30, repeat: Infinity, ease: 'linear' }}
        >
          {longitudes.map((angle) => (
            <motion.div
              key={`m-${angle}`}
              className="absolute inset-0 rounded-full border"
              style={{ transform: `rotateY(${angle}deg)` }}
              animate={{ borderColor: rgba(colorHex, ringAlpha) }}
              transition={{ duration: 0.5 }}
            />
          ))}
          {latitudes.map((angle) => {
            const lr = r * Math.cos((angle * Math.PI) / 180)
            const z = r * Math.sin((angle * Math.PI) / 180)
            return (
              <motion.div
                key={`p-${angle}`}
                className="absolute rounded-full border"
                style={{
                  width: lr * 2,
                  height: lr * 2,
                  left: r - lr,
                  top: r - lr,
                  transform: `rotateX(90deg) translateZ(${z}px)`,
                }}
                animate={{ borderColor: rgba(colorHex, ringAlpha) }}
                transition={{ duration: 0.5 }}
              />
            )
          })}
        </motion.div>
      </div>

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="rounded-full blur-[3px]"
          animate={{
            width: expanded ? 12 : 6,
            height: expanded ? 12 : 6,
            backgroundColor: rgba(colorHex, expanded ? 0.7 : 0.4),
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function GlobeCategories() {
  const [selected, setSelected] = useState<number | null>(null)
  const { orbitRx, orbitRy, globeSize, height } = useOrbitConfig()
  const isExpanded = selected !== null

  const activeCat = selected !== null ? categories[selected] : null
  const activeHex = activeCat ? colorMap[activeCat.color].hex : '#2dd4bf'

  // Glow lingers briefly after close, then shrinks out smoothly
  const [glowActive, setGlowActive] = useState(false)
  const [glowHex, setGlowHex] = useState('#2dd4bf')

  useEffect(() => {
    if (isExpanded) {
      setGlowActive(true)
      setGlowHex(activeHex)
    } else {
      // Tiny delay so it doesn't shrink at the exact same instant as the content
      const t = setTimeout(() => {
        setGlowActive(false)
        setGlowHex('#2dd4bf')
      }, 150)
      return () => clearTimeout(t)
    }
  }, [isExpanded, activeHex])

  // Offset orbit by half a step (π/6) so no item sits at exact top/bottom
  const positions = categories.map((_, i) => {
    const a = (i / categories.length) * 2 * Math.PI - Math.PI / 2 + Math.PI / 6
    return { x: Math.cos(a) * orbitRx, y: Math.sin(a) * orbitRy }
  })

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      style={{ height }}
      onClick={() => isExpanded && setSelected(null)}
    >
      {/* ── Background glow — floods the page on selection, lingers on close */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="rounded-full"
          style={{ width: globeSize * 1.4, height: globeSize * 1.4, filter: 'blur(90px)' }}
          animate={{
            scale: glowActive ? 7 : [1, 1.15, 1],
            opacity: glowActive ? 1 : 0.45,
            backgroundColor: rgba(glowHex, glowActive ? 0.1 : 0.06),
          }}
          transition={{
            scale: {
              duration: glowActive ? 1.2 : 1.8,
              repeat: glowActive ? 0 : Infinity,
              ease: glowActive ? 'easeOut' : 'easeInOut',
            },
            opacity: { duration: glowActive ? 0.8 : 1.5 },
            backgroundColor: { duration: glowActive ? 0.5 : 1.2 },
          }}
        />
      </div>

      {/* ── Globe (expands + recolours on selection) ─────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <WireframeGlobe size={globeSize} colorHex={activeHex} expanded={isExpanded} />
      </div>

      {/* ── Expanded content (over the globe) ────────────────────────── */}
      <AnimatePresence>
        {selected !== null && (() => {
          const cat = categories[selected]
          const colors = colorMap[cat.color]
          const Icon = cat.icon
          return (
            <motion.div
              key={selected}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* X button */}
              <motion.div
                className="absolute top-2 right-2 sm:top-4 sm:right-4 pointer-events-auto z-30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected(null)
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700/80 border border-slate-600 flex items-center justify-center hover:bg-slate-600 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 rotate-45" />
                </button>
              </motion.div>

              {/* Content wrapper – clicks here don't close */}
              <div
                className="flex flex-col items-center pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Title */}
                <motion.div
                  className="flex items-center gap-2.5 mb-4 sm:mb-5"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{cat.title}</h3>
                </motion.div>

                {/* Items 2×2 grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-sm sm:max-w-md w-full">
                  {cat.items.map((item, j) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + j * 0.08,
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                      }}
                      className="p-2.5 sm:p-3.5 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50"
                    >
                      <span className="text-xs sm:text-sm text-white font-medium block mb-0.5">
                        {item.name}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-400 leading-tight">
                        {item.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })()}
      </AnimatePresence>

      {/* ── Orbit items ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {categories.map((cat, i) => {
          const pos = positions[i]
          const isSel = selected === i
          const isOther = isExpanded && !isSel
          const colors = colorMap[cat.color]

          return (
            <motion.div
              key={cat.title}
              className="absolute z-10"
              animate={{
                x: isSel ? 0 : isOther ? pos.x * 2.5 : pos.x,
                y: isSel ? 0 : isOther ? pos.y * 2.5 : pos.y,
                opacity: isSel ? 0 : isOther ? 0 : 1,
                scale: isSel ? 0 : isOther ? 0.3 : 1,
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 18 }}
              style={{ pointerEvents: isOther || isSel ? 'none' : 'auto' }}
            >
              {/* Bobbing */}
              <motion.div
                animate={!isExpanded ? { y: [0, -8, 0] } : { y: 0 }}
                transition={
                  !isExpanded
                    ? { duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }
                    : { duration: 0.3 }
                }
              >
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected(i)
                  }}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 backdrop-blur-sm border ${colors.border} ${colors.bg} cursor-pointer outline-none group`}
                  style={{ borderRadius: 14 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <cat.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.text}`} />
                    <div className="absolute -bottom-1 -right-2 w-3.5 h-3.5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                      <Plus className="w-2 h-2 text-teal-400" />
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-300 whitespace-nowrap">
                    {cat.title}
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
