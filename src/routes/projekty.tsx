import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Bot,
  Code,
  Database,
  Globe,
  Laptop,
  MessageSquare,
  Plug,
  Settings,
  Smartphone,
  Zap,
} from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal'
import { GradientOrb } from '../components/ParallaxSection'

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

const categories = [
  {
    title: 'Strony i sklepy',
    icon: Globe,
    color: 'emerald',
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
    color: 'cyan',
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
    color: 'teal',
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
    color: 'emerald',
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
    color: 'cyan',
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
    color: 'teal',
    items: [
      { name: 'API integrations', desc: 'Łączenie zewnętrznych usług' },
      { name: 'Webhooks', desc: 'Real-time komunikacja między systemami' },
      { name: 'Data sync', desc: 'Synchronizacja danych między aplikacjami' },
      { name: 'Custom connectors', desc: 'Dedykowane łączniki systemów' },
    ],
  },
]

const techStack = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Settings },
  { name: 'Python', icon: Bot },
  { name: 'PostgreSQL', icon: Database },
  { name: 'OpenAI', icon: Bot },
  { name: 'n8n', icon: Zap },
  { name: 'TailwindCSS', icon: Laptop },
]

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    text: 'text-teal-400',
  },
}

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

      {/* Categories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses]
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <category.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4">{category.title}</h2>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex flex-col">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-sm text-slate-400">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
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
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-medium hover:border-teal-500/50 hover:text-teal-400 transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <tech.icon className="w-5 h-5" />
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
