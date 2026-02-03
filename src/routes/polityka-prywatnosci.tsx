import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'
import { AnimatedText } from '../components/AnimatedText'

export const Route = createFileRoute('/polityka-prywatnosci')({
  component: PolitykaPrywatnosciPage,
  head: () => ({
    meta: [
      {
        title: 'Polityka Prywatności - Patryk Biegański | Full-Stack Developer',
      },
      {
        name: 'description',
        content:
          'Polityka prywatności określająca zasady przetwarzania danych osobowych.',
      },
    ],
  }),
})

function PolitykaPrywatnosciPage() {
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
            text="Polityka Prywatności"
            as="h1"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          />

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-400 mb-4">
              Dbam o Twoją prywatność i bezpieczeństwo danych
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
                <h2 className="text-2xl font-bold text-white mb-4">Wprowadzenie</h2>
                <p className="text-slate-300 leading-relaxed">
                  Niniejsza Polityka Prywatności określa, w jaki sposób Patryk
                  Biegański prowadzący działalność gospodarczą zbiera, wykorzystuje,
                  przechowuje i chroni dane osobowe użytkowników strony internetowej
                  patrykbieganski.pl oraz klientów korzystających z usług
                  programistycznych.
                </p>
              </div>
            </ScrollReveal>

            {/* Administrator danych */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">
                1. Administrator danych osobowych
              </h2>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 mb-12">
                <p className="mb-4 text-slate-300">
                  <strong className="text-white">Administratorem danych osobowych jest:</strong>
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li><strong className="text-slate-200">Imię i nazwisko:</strong> Patryk Biegański</li>
                  <li><strong className="text-slate-200">Adres e-mail:</strong> kontakt@patrykbieganski.pl</li>
                  <li><strong className="text-slate-200">Telefon:</strong> +48 518 935 733</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Rodzaje zbieranych danych */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">
                2. Rodzaje zbieranych danych osobowych
              </h2>
              <p className="mb-6 text-slate-300">
                W ramach świadczonych usług możemy zbierać następujące kategorie danych osobowych:
              </p>

              <div className="space-y-6 mb-12">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">2.1. Dane kontaktowe</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Imię i nazwisko</li>
                    <li>Adres e-mail</li>
                    <li>Numer telefonu</li>
                    <li>Nazwa firmy (jeśli dotyczy)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">2.2. Dane techniczne</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Adres IP</li>
                    <li>Typ przeglądarki internetowej</li>
                    <li>System operacyjny</li>
                    <li>Czas wizyty na stronie</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Cele przetwarzania */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">
                3. Cele i podstawy prawne przetwarzania danych
              </h2>

              <div className="space-y-4 mb-12">
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">3.1. Wykonanie umowy</h3>
                  <p className="mb-2 text-slate-300"><strong className="text-slate-200">Cel:</strong> Realizacja usług programistycznych, komunikacja z klientami</p>
                  <p className="text-slate-400"><strong className="text-slate-300">Podstawa prawna:</strong> Art. 6 ust. 1 lit. b RODO</p>
                </div>

                <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">3.2. Marketing bezpośredni</h3>
                  <p className="mb-2 text-slate-300"><strong className="text-slate-200">Cel:</strong> Przesyłanie informacji o oferowanych usługach</p>
                  <p className="text-slate-400"><strong className="text-slate-300">Podstawa prawna:</strong> Art. 6 ust. 1 lit. f RODO (uzasadniony interes)</p>
                </div>

                <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">3.3. Analityka strony</h3>
                  <p className="mb-2 text-slate-300"><strong className="text-slate-200">Cel:</strong> Analiza ruchu na stronie, optymalizacja funkcjonalności</p>
                  <p className="text-slate-400"><strong className="text-slate-300">Podstawa prawna:</strong> Art. 6 ust. 1 lit. f RODO (uzasadniony interes)</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Okres przechowywania */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">
                4. Okres przechowywania danych
              </h2>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 mb-12">
                <ul className="space-y-3 text-slate-300">
                  <li><strong className="text-slate-200">Dane klientów:</strong> przez okres realizacji umowy + 3 lata</li>
                  <li><strong className="text-slate-200">Dane marketingowe:</strong> do momentu wycofania zgody lub zgłoszenia sprzeciwu</li>
                  <li><strong className="text-slate-200">Dane analityczne:</strong> maksymalnie 26 miesięcy</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Prawa użytkowników */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">
                5. Prawa osób, których dane dotyczą
              </h2>
              <p className="mb-6 text-slate-300">Zgodnie z RODO przysługują Ci następujące prawa:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { title: 'Prawo dostępu', desc: 'Możesz zażądać informacji o przetwarzanych danych' },
                  { title: 'Prawo sprostowania', desc: 'Możesz żądać poprawienia nieprawidłowych danych' },
                  { title: 'Prawo usunięcia', desc: 'Możesz zażądać usunięcia swoich danych' },
                  { title: 'Prawo ograniczenia', desc: 'Możesz ograniczyć przetwarzanie danych' },
                  { title: 'Prawo przenoszenia', desc: 'Możesz otrzymać dane w formacie umożliwiającym przeniesienie' },
                  { title: 'Prawo sprzeciwu', desc: 'Możesz wnieść sprzeciw wobec przetwarzania' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Kontakt */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-6">
                6. Kontakt w sprawach ochrony danych
              </h2>
              <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <p className="mb-4 text-slate-300">
                  W przypadku pytań dotyczących przetwarzania danych osobowych lub chęci
                  skorzystania z przysługujących praw, prosimy o kontakt:
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
                  Masz również prawo do wniesienia skargi do Prezesa Urzędu Ochrony
                  Danych Osobowych w przypadku, gdy uznasz, że przetwarzanie Twoich
                  danych osobowych narusza przepisy RODO.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
