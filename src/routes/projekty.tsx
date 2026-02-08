import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import {
  SiN8N,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { GlobeCategories } from '../components/GlobeCategories'
import { GradientOrb } from '../components/ParallaxSection'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal'

export const Route = createFileRoute('/projekty')({
  component: RealizacjePage,
  head: () => ({
    meta: [
      {
        title: 'Co mogę stworzyć - Patryk Biegański | Full-Stack Developer',
      },
      {
        name: 'description',
        content:
          'Strony internetowe, aplikacje webowe, systemy CRM, narzędzia AI, automatyzacje i integracje. Zobacz co mogę zbudować dla Twojej firmy.',
      },
    ],
  }),
})

const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
  { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
]

function RealizacjePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <GradientOrb color="teal" size="lg" position={{ top: '10%', right: '-10%' }} speed={0.3} />
        <GradientOrb color="emerald" size="md" position={{ bottom: '20%', left: '-5%' }} speed={0.4} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Strona główna
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Co mogę <span className="gradient-text">stworzyć</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Od prostych stron po złożone systemy. Każde rozwiązanie dopasowuję 
              indywidualnie do potrzeb i budżetu klienta.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories – interactive globe */}
      <section className="py-12 sm:py-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              Usługi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Co mogę <span className="gradient-text">zbudować</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Kliknij kategorię, aby zobaczyć szczegóły
            </p>
          </ScrollReveal>

          <GlobeCategories />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              Technologie
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Narzędzia które <span className="gradient-text">wykorzystuję</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Nowoczesny stack technologiczny dopasowany do potrzeb projektu
            </p>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.div
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-medium transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{ '--brand-color': tech.color, '--brand-border': `${tech.color}80` } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${tech.color}80`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                  }}
                >
                  <tech.icon className="w-5 h-5 transition-colors" style={{ color: tech.color }} />
                  {tech.name}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              Proces
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Jak <span className="gradient-text">pracuję</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Rozmowa', desc: 'Poznaję Twój biznes i potrzeby' },
              { step: '02', title: 'Propozycja', desc: 'Przedstawiam rozwiązanie i wycenę' },
              { step: '03', title: 'Realizacja', desc: 'Buduję z regularnym feedbackiem' },
              { step: '04', title: 'Wdrożenie', desc: 'Uruchamiam i szkolę z obsługi' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-teal-400/20 mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <GradientOrb color="teal" size="lg" position={{ top: '0%', left: '20%' }} speed={0.3} />

        <div className="container mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Masz pomysł na <span className="gradient-text">projekt</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Opowiedz mi o swoich potrzebach. Wspólnie znajdziemy najlepsze rozwiązanie
              dla Twojego biznesu.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/kontakt" className="btn btn-primary text-lg px-10 py-4">
                Porozmawiajmy
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
