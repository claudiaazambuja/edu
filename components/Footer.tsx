import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-slate-700 sm:px-6 lg:px-8">
        <p className="font-semibold">Bagé/RS</p>
        <p>
          WhatsApp:{' '}
          <a href={WHATSAPP_LINK} className="font-semibold text-primary hover:underline">
            {WHATSAPP_DISPLAY}
          </a>
        </p>
        <p className="font-medium text-ink">Base forte hoje, autonomia amanhã.</p>
      </div>
    </footer>
  );
}
