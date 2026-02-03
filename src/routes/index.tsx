import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  Code,
  Linkedin,
  Mail,
  MessageSquare,
  Plug,
  Search,
  Settings,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal'
import { FloatingElement, GradientOrb } from '../components/ParallaxSection'
import { ServiceCard } from '../components/ServiceCard'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title:
          'Strony internetowe, aplikacje i automatyzacja dla firm | Patryk Biegański',
      },
      {
        name: 'description',
        content:
          'Potrzebujesz strony internetowej, aplikacji biznesowej lub automatyzacji procesów? Zbuduję rozwiązanie dopasowane do Twojej firmy.',
      },
    ],
  }),
})

// Pain points that resonate with potential clients
const painPoints = [
  {
    problem: 'Tracisz klientów na konkurencję?',
    solution: 'Strona, która sprzedaje i jest widoczna w Google',
    icon: TrendingUp,
  },
  {
    problem: 'Ręczna praca zabiera za dużo czasu?',
    solution: 'Automatyzacja powtarzalnych zadań',
    icon: Clock,
  },
  {
    problem: 'Twoje systemy nie rozmawiają ze sobą?',
    solution: 'Integracje łączące wszystko w całość',
    icon: Plug,
  },
  {
    problem: 'Potrzebujesz dedykowanego narzędzia?',
    solution: 'Aplikacja szyta na miarę Twoich potrzeb',
    icon: Code,
  },
]

// Showcase items - what I can create
const showcaseItems = [
  {
    title: 'Sklepy internetowe',
    description: 'E-commerce z płatnościami, magazynem i panelem admina',
    icon: '🛒',
  },
  {
    title: 'Panele analityczne',
    description: 'Dashboardy z wizualizacją danych w czasie rzeczywistym',
    icon: '📊',
  },
  {
    title: 'Aplikacje mobilne',
    description: 'PWA działające na każdym urządzeniu, również offline',
    icon: '📱',
  },
  {
    title: 'Systemy CRM',
    description: 'Zarządzanie klientami, sprzedażą i procesami',
    icon: '👥',
  },
  {
    title: 'Chatboty AI',
    description: 'Inteligentni asystenci dla Twojej strony lub firmy',
    icon: '🤖',
  },
  {
    title: 'Integracje API',
    description: 'Łączenie systemów i automatyzacja przepływu danych',
    icon: '🔗',
  },
  {
    title: 'Landing pages',
    description: 'Strony sprzedażowe zoptymalizowane pod konwersje',
    icon: '🎯',
  },
  {
    title: 'Automatyzacje',
    description: 'Workflow eliminujące ręczną, powtarzalną pracę',
    icon: '⚡',
  },
]

// Benefits/results
const benefits = [
  'Więcej klientów z internetu',
  'Mniej ręcznej pracy',
  'Szybsze procesy w firmie',
  'Przewaga nad konkurencją',
]

function HomePage() {
  return (
    <>
      {/* ==================== HERO SECTION - CLIENT FOCUSED ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background Orbs */}
        <GradientOrb color="teal" size="xl" position={{ top: '-10%', left: '-5%' }} speed={0.3} />
        <GradientOrb color="emerald" size="lg" position={{ bottom: '10%', right: '-5%' }} speed={0.5} />
        <GradientOrb color="cyan" size="md" position={{ top: '40%', right: '20%' }} speed={0.4} blur={100} />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Rozwiązania cyfrowe dla firm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Potrzebujesz strony,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            aplikacji lub
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text text-glow mb-8"
          >
            automatyzacji?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Zbuduję rozwiązanie dopasowane do Twojej firmy. 
            Od <span className="text-white">stron sprzedażowych</span> przez{' '}
            <span className="text-white">aplikacje biznesowe</span> po{' '}
            <span className="text-white">narzędzia AI</span> i <span className="text-white">integracje systemów</span>.
          </motion.p>

          {/* Quick benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {benefits.map((benefit) => (
              <span key={benefit} className="inline-flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                {benefit}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/kontakt" className="btn btn-primary">
                Bezpłatna wycena
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="#problemy" className="btn btn-outline">
                Zobacz jak mogę pomóc
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a href="#problemy" className="scroll-indicator">
            <span className="text-slate-500 text-sm mb-2">Scroll</span>
            <div className="scroll-indicator-mouse">
              <div className="scroll-indicator-wheel" />
            </div>
          </a>
        </motion.div>
      </section>

      {/* ==================== PAIN POINTS SECTION ==================== */}
      <section id="problemy" className="section bg-slate-800/50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rozpoznajesz <span className="gradient-text">któryś z tych problemów</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Każdy z nich mogę rozwiązać odpowiednim narzędziem
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.problem}</h3>
                    <p className="text-slate-400">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/kontakt" className="btn btn-primary">
                Opowiedz mi o swoim problemie
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="uslugi" className="section bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-teal-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              Usługi
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Co mogę dla Ciebie <span className="gradient-text">zrobić</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Kompleksowe rozwiązania cyfrowe dopasowane do potrzeb Twojej firmy
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              title="Strony internetowe"
              description="Strony, które sprzedają. Zoptymalizowane pod SEO, szybkie i widoczne w Google. Przyciągną klientów do Twojej firmy."
              icon={Search}
              features={[
                'Wysoka pozycja w Google',
                'Szybkie ładowanie',
                'Design pod konwersje',
                'Responsywność',
              ]}
              index={0}
              gradient="emerald"
            />
            <ServiceCard
              title="Aplikacje webowe"
              description="Dedykowane narzędzia dla Twojej firmy - CRM, dashboardy, systemy zarządzania. Dokładnie to, czego potrzebujesz."
              icon={Code}
              features={[
                'Szyte na miarę',
                'Łatwe w obsłudze',
                'Bezpieczne',
                'Skalowalne',
              ]}
              index={1}
              gradient="cyan"
            />
            <ServiceCard
              title="Aplikacje mobilne"
              description="Jedna aplikacja działająca na telefonach i komputerach. Bez kosztów osobnych wersji iOS i Android."
              icon={Smartphone}
              features={[
                'Działa offline',
                'Instalowalna',
                'Cross-platform',
                'Niższe koszty',
              ]}
              index={2}
              gradient="teal"
            />
            <ServiceCard
              title="Narzędzia AI"
              description="Chatboty odpowiadające klientom 24/7, automatyczna analiza dokumentów, inteligentne przetwarzanie danych."
              icon={Bot}
              features={[
                'Chatboty 24/7',
                'Analiza dokumentów',
                'Wsparcie sprzedaży',
                'Oszczędność czasu',
              ]}
              index={3}
              gradient="emerald"
            />
            <ServiceCard
              title="Automatyzacja"
              description="Koniec z ręczną pracą. Zautomatyzuję powtarzalne zadania, żebyś mógł skupić się na rozwoju firmy."
              icon={Settings}
              features={[
                'Automatyczne raporty',
                'Workflow',
                'Email sequences',
                'Integracje',
              ]}
              index={4}
              gradient="cyan"
            />
            <ServiceCard
              title="Integracje systemów"
              description="Połączę Twoje narzędzia w jeden ekosystem. Dane będą przepływać automatycznie między aplikacjami."
              icon={Plug}
              features={[
                'Łączenie systemów',
                'Sync danych',
                'Webhooks',
                'Custom API',
              ]}
              index={5}
              gradient="teal"
            />
          </div>
        </div>
      </section>

      {/* ==================== SHOWCASE SECTION ==================== */}
      <section id="realizacje" className="section bg-slate-800/50 relative overflow-hidden">
        {/* Background decoration */}
        <GradientOrb color="cyan" size="lg" position={{ top: '20%', left: '-10%' }} speed={0.2} blur={120} />
        
        <div className="container mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              Przykłady
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Co mogę <span className="gradient-text">zbudować</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Kilka przykładów rozwiązań, które tworzę dla firm
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-slate-400 mb-6">
              To tylko przykłady. Każdy projekt dostosowuję do konkretnych potrzeb.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== WHY ME SECTION (brief) ==================== */}
      <section className="section bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal variant="fadeRight">
              <div className="relative">
                <FloatingElement yOffset={15} duration={8}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                    <img
                      src="/PWD_39601.png"
                      alt="Patryk Biegański"
                      className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </FloatingElement>

                {/* Stats cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -left-4 bottom-8 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl"
                >
                  <div className="text-3xl font-bold text-teal-400">5+</div>
                  <div className="text-sm text-slate-400">lat w branży</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -right-4 top-8 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl"
                >
                  <div className="text-3xl font-bold text-emerald-400">AI</div>
                  <div className="text-sm text-slate-400">w każdym projekcie</div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
                  Dlaczego ja
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Jeden człowiek, <span className="gradient-text">pełna odpowiedzialność</span>
                </h2>
              </ScrollReveal>

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Nie jestem agencją z dziesiątkami pracowników. Pracujesz bezpośrednio ze mną - 
                    od pierwszej rozmowy po wdrożenie. Bez przekazywania projektu między działami.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Wykorzystuję <span className="text-white font-medium">najnowsze narzędzia AI</span>, 
                    żeby dostarczać rozwiązania szybciej i taniej niż tradycyjne firmy. 
                    Technologia pracuje dla Ciebie, nie przeciwko Twojemu budżetowi.
                  </p>
                </StaggerItem>
              </StaggerContainer>

              <ScrollReveal delay={0.3}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Bezpośredni kontakt', desc: 'Zawsze wiesz z kim rozmawiasz' },
                    { label: 'Szybka realizacja', desc: 'AI przyspiesza moją pracę' },
                    { label: 'Uczciwe ceny', desc: 'Bez marży agencyjnej' },
                    { label: 'Wsparcie po wdrożeniu', desc: 'Nie zostawiam Cię samego' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA SECTION ==================== */}
      <section className="section-full bg-slate-900 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <GradientOrb color="teal" size="xl" position={{ top: '10%', left: '10%' }} speed={0.4} />
          <GradientOrb color="emerald" size="lg" position={{ bottom: '20%', right: '10%' }} speed={0.3} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

        <div className="container mx-auto relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Gotowy na <span className="gradient-text">następny krok</span>?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Opisz krótko swój pomysł lub problem. Odpowiem w ciągu 24 godzin 
                z bezpłatną wyceną i propozycją rozwiązania.
              </p>
            </ScrollReveal>

            <StaggerContainer className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <StaggerItem>
                <motion.a
                  href="mailto:kontakt@patrykbieganski.pl"
                  className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-white font-medium">kontakt@patrykbieganski.pl</div>
                  </div>
                </motion.a>
              </StaggerItem>

              <StaggerItem>
                <motion.a
                  href="https://linkedin.com/in/patrykbieganski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-slate-400">LinkedIn</div>
                    <div className="text-white font-medium">Patryk Biegański</div>
                  </div>
                </motion.a>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/kontakt" className="btn btn-primary text-lg px-10 py-4">
                  Wyślij zapytanie
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <p className="text-slate-500 mt-6 text-sm">
                Bezpłatna wycena • Odpowiedź w 24h • Bez zobowiązań
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
