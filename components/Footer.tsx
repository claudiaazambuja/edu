import Link from 'next/link';
import { AGENDAR_EMAIL_LINK, CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-rose-100 bg-rose-50/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-slate-700 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold text-ink">Base Forte Bagé</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Apoio educacional para crianças do 1º ao 4º ano com foco em leitura, escrita e matemática.
          </p>
          <p className="mt-3 font-semibold">Bagé/RS</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contato</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              WhatsApp:{' '}
              <a href={WHATSAPP_LINK} className="font-semibold text-primary hover:underline">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              E-mail:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Ações rápidas</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/servicos" className="font-semibold text-primary hover:underline">
              Conhecer serviços
            </Link>
            <a href={AGENDAR_EMAIL_LINK} className="font-semibold text-primary hover:underline">
              Agendar avaliação por e-mail
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-rose-100 py-4 text-center text-sm text-slate-600">
        Base forte hoje, autonomia amanhã.
      </div>
    </footer>
  );
}
