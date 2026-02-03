import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { AnimatedText } from '../components/AnimatedText'

export const Route = createFileRoute('/regulamin')({
  component: RegulaminPage,
  head: () => ({
    meta: [
      {
        title: 'Regulamin - Patryk Biegański | Full-Stack Developer',
      },
      {
        name: 'description',
        content:
          'Regulamin usług programistycznych świadczonych przez Patryk Biegański.',
      },
    ],
  }),
})

function RegulaminPage() {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-slate-900">
        <div className="container mx-auto">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Strona główna
            </Link>
          </ScrollReveal>

          <AnimatedText
            text="Regulamin Usług"
            as="h1"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          />

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-400 mb-4">
              Zasady współpracy i świadczenia usług programistycznych
            </p>
            <p className="text-slate-500">Ostatnia aktualizacja: 1 stycznia 2025</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            {/* Introduction */}
            <ScrollReveal>
              <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Postanowienia ogólne</h2>
                <p className="text-slate-300 leading-relaxed">
                  Niniejszy Regulamin określa zasady świadczenia usług programistycznych
                  przez Patryk Biegański prowadzący działalność gospodarczą, w szczególności
                  usług związanych z tworzeniem stron internetowych, aplikacji webowych,
                  aplikacji mobilnych oraz automatyzacji procesów biznesowych.
                </p>
              </div>
            </ScrollReveal>

            {/* Definicje */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">1. Definicje</h2>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 mb-12">
                <ul className="space-y-3 text-slate-300">
                  <li><strong className="text-slate-200">Usługodawca:</strong> Patryk Biegański prowadzący działalność gospodarczą</li>
                  <li><strong className="text-slate-200">Klient:</strong> osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług</li>
                  <li><strong className="text-slate-200">Usługi:</strong> usługi programistyczne świadczone przez Usługodawcę</li>
                  <li><strong className="text-slate-200">Projekt:</strong> konkretne zadanie zlecone przez Klienta</li>
                  <li><strong className="text-slate-200">Wycena:</strong> dokument określający zakres prac i cenę za realizację projektu</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Zakres usług */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">2. Zakres usług</h2>
              <p className="mb-6 text-slate-300">Usługodawca świadczy następujące usługi:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">2.1. Strony internetowe</h3>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>Projektowanie i programowanie</li>
                    <li>Optymalizacja SEO</li>
                    <li>Responsywny design</li>
                    <li>Systemy zarządzania treścią</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">2.2. Aplikacje biznesowe</h3>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>Systemy CRM</li>
                    <li>Aplikacje zarządzania</li>
                    <li>Dashboardy analityczne</li>
                    <li>Integracje systemów</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">2.3. Aplikacje mobilne</h3>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>Progressive Web Apps</li>
                    <li>Aplikacje webowe</li>
                    <li>Cross-platform solutions</li>
                    <li>Optymalizacja mobilna</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-slate-500/10 border border-slate-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">2.4. Automatyzacja</h3>
                  <ul className="text-slate-400 space-y-1 text-sm">
                    <li>Automatyzacja procesów</li>
                    <li>Integracje API</li>
                    <li>Workflow biznesowe</li>
                    <li>Narzędzia analityczne</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Proces realizacji */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">3. Proces realizacji projektu</h2>

              <div className="space-y-4 mb-12">
                {[
                  { title: '3.1. Konsultacja wstępna', desc: 'Bezpłatna rozmowa o potrzebach, celach i oczekiwaniach Klienta' },
                  { title: '3.2. Przygotowanie wyceny', desc: 'Szczegółowy opis zakresu prac, harmonogram i cenę realizacji' },
                  { title: '3.3. Podpisanie umowy', desc: 'Formalne zawarcie umowy na podstawie zaakceptowanej wyceny' },
                  { title: '3.4. Realizacja projektu', desc: 'Wykonanie prac zgodnie z ustalonym harmonogramem i specyfikacją' },
                  { title: '3.5. Testy i odbiór', desc: 'Przeprowadzenie testów, ewentualne poprawki i formalny odbiór' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Warunki płatności */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">4. Warunki płatności</h2>
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-12">
                <h3 className="text-lg font-semibold text-white mb-4">4.1. Zasady ogólne</h3>
                <ul className="space-y-2 mb-6 text-slate-300">
                  <li>Ceny podane w wycenie są cenami brutto</li>
                  <li>Płatność następuje przelewem bankowym</li>
                  <li>Termin płatności: 14 dni od daty wystawienia faktury</li>
                  <li>W przypadku projektów długoterminowych możliwy podział na etapy</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-4">4.2. Zaliczka</h3>
                <p className="text-slate-400">
                  W przypadku projektów o wartości powyżej 5000 zł, Usługodawca może żądać
                  zaliczki w wysokości 50% wartości projektu przed rozpoczęciem prac.
                </p>
              </div>
            </ScrollReveal>

            {/* Gwarancja */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">5. Gwarancja i wsparcie techniczne</h2>
              <div className="space-y-4 mb-12">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-3">5.1. Gwarancja</h3>
                  <p className="text-slate-300 mb-3">
                    Usługodawca udziela 3-miesięcznej gwarancji na wykonane oprogramowanie,
                    obejmującej usunięcie błędów funkcjonalnych.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Gwarancja nie obejmuje problemów wynikających z modyfikacji dokonanych
                    przez Klienta lub problemy infrastruktury zewnętrznej.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-3">5.2. Wsparcie techniczne</h3>
                  <p className="text-slate-400">
                    Dodatkowe wsparcie techniczne po okresie gwarancyjnym jest świadczone
                    na podstawie osobnej umowy serwisowej.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Kontakt */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">6. Kontakt</h2>
              <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <p className="mb-4 text-slate-300">
                  W sprawach związanych z niniejszym regulaminem prosimy o kontakt:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <strong className="text-slate-200">E-mail:</strong>{' '}
                    <a href="mailto:kontakt@patrykbieganski.pl" className="text-teal-400 hover:text-teal-300">
                      kontakt@patrykbieganski.pl
                    </a>
                  </li>
                  <li>
                    <strong className="text-slate-200">Telefon:</strong>{' '}
                    <a href="tel:+48518935733" className="text-teal-400 hover:text-teal-300">
                      +48 518 935 733
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  Wszystkie zapytania dotyczące regulaminu będą rozpatrzone w ciągu 3 dni roboczych.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
