'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP_LINK } from '@/lib/constants';

const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-base2.png" alt="Logo Base Forte Bagé" className="h-10 w-10  object-cover" />
          <span className="text-lg font-bold text-primary">Base Educação</span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${pathname === link.href ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
