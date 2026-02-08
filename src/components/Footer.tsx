import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/patrykbieganski/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/patrykbieganski',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:kontakt@patrykbieganski.pl',
      icon: Mail,
    },
  ]

  const navLinks = [
    { name: 'Start', href: '/' },
    { name: 'Realizacje', href: '/projekty' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="gradient-text">PB</span>
                <span className="text-slate-300 font-normal ml-2">Patryk Biegański</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Full-Stack Developer tworzący strony, aplikacje, narzędzia AI 
              i automatyzacje. Pomogę zdigitalizować Twój biznes.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
              Nawigacja
            </p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
              Kontakt
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kontakt@patrykbieganski.pl"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  kontakt@patrykbieganski.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48518935733"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  +48 518 935 733
                </a>
              </li>
              <li className="text-slate-400">Wałbrzych, Polska</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Patryk Biegański. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <Link
              to="/polityka-prywatnosci"
              className="text-slate-400 hover:text-slate-300 text-sm transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/regulamin"
              className="text-slate-400 hover:text-slate-300 text-sm transition-colors"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
