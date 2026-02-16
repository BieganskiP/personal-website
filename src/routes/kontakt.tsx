import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
} from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal'
import { AnimatedHeadline } from '../components/AnimatedText'
import { GradientOrb } from '../components/ParallaxSection'

export const Route = createFileRoute('/kontakt')({
  component: KontaktPage,
  head: () => ({
    meta: [
      {
        title:
          'Kontakt - Patryk Biegański | Full-Stack Developer | Bezpłatna Konsultacja',
      },
      {
        name: 'description',
        content:
          'Skontaktuj się ze mną, aby omówić swój projekt. Bezpłatna konsultacja, odpowiedź w 24h.',
      },
    ],
  }),
})

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Najlepszy sposób na szczegółową dyskusję',
    value: 'pdbieganski@gmail.com',
    href: 'mailto:pdbieganski@gmail.com',
    color: 'teal',
  },
  {
    icon: Phone,
    title: 'Telefon',
    description: 'Szybka rozmowa o pilnych projektach',
    value: '+48 518 935 733',
    href: 'tel:+48518935733',
    color: 'emerald',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Profesjonalna sieć biznesowa',
    value: 'in/patrykbieganski',
    href: 'https://www.linkedin.com/in/patrykbieganski/',
    color: 'cyan',
  },
]

const faqs = [
  {
    question: 'Jak długo trwa realizacja projektu?',
    answer:
      'Zależy od złożoności. Proste strony: 2-4 tygodnie, aplikacje: 2-6 miesięcy. Dokładny harmonogram ustalamy podczas konsultacji.',
  },
  {
    question: 'Ile kosztują Twoje usługi?',
    answer:
      'Strony od 2,500 zł, aplikacje od 8,000 zł. Każdy projekt wyceniam indywidualnie. Wycena jest zawsze bezpłatna.',
  },
  {
    question: 'Czy oferujesz wsparcie po zakończeniu?',
    answer:
      'Tak! 3-miesięczna gwarancja w cenie. Oferuję też pakiety wsparcia technicznego i rozwoju aplikacji.',
  },
  {
    question: 'Jakie technologie używasz?',
    answer:
      'React, TypeScript, Node.js, Python, PostgreSQL. Dobór technologii zawsze dopasowuję do potrzeb projektu.',
  },
]

const colorClasses = {
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20 hover:border-teal-500/50',
    icon: 'text-teal-400',
    hover: 'group-hover:bg-teal-500/20',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    icon: 'text-emerald-400',
    hover: 'group-hover:bg-emerald-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    icon: 'text-cyan-400',
    hover: 'group-hover:bg-cyan-500/20',
  },
}

function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden min-h-[70vh] flex items-center">
        <GradientOrb color="teal" size="xl" position={{ top: '-20%', right: '-10%' }} speed={0.3} />
        <GradientOrb color="emerald" size="lg" position={{ bottom: '0%', left: '-10%' }} speed={0.4} />

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

          <div className="max-w-4xl">
            <AnimatedHeadline
              text="Porozmawiajmy"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            />

            <ScrollReveal delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-8">
                Masz pomysł na projekt? Chętnie go omówię i pomogę przekształcić w rzeczywistość.
                Pierwsza konsultacja jest <span className="text-teal-400 font-medium">bezpłatna</span>.
              </p>
            </ScrollReveal>

            <StaggerContainer className="flex flex-wrap gap-4">
              <StaggerItem>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Darmowa konsultacja</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Odpowiedź w 24h</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300">
                  <MessageSquare className="w-4 h-4 text-teal-400" />
                  <span>Bez zobowiązań</span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wybierz sposób <span className="gradient-text">kontaktu</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const colors = colorClasses[method.color as keyof typeof colorClasses]
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.title === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className={`group relative p-8 rounded-2xl bg-slate-800/50 border ${colors.border} transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-6 transition-colors`}
                  >
                    <method.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{method.description}</p>
                  <p className="text-white font-medium">{method.value}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Często zadawane <span className="gradient-text">pytania</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <GradientOrb color="teal" size="xl" position={{ top: '20%', left: '10%' }} speed={0.3} />
        <GradientOrb color="emerald" size="lg" position={{ bottom: '10%', right: '5%' }} speed={0.4} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="container mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Czekam na <span className="gradient-text">Twój projekt</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Napisz lub zadzwoń - chętnie omówię Twoje potrzeby i zaproponuję rozwiązanie dopasowane do Twoich celów.
            </p>
          </ScrollReveal>

          <StaggerContainer className="flex flex-col sm:flex-row gap-4 justify-center">
            <StaggerItem>
              <motion.a
                href="mailto:pdbieganski@gmail.com"
                className="btn btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Napisz email
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="tel:+48518935733"
                className="btn btn-outline text-lg px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń
              </motion.a>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal delay={0.4}>
            <p className="text-slate-500 mt-8">
              Zazwyczaj odpowiadam w ciągu 24 godzin
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
