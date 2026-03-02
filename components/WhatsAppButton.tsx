import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-200"
    >
      <MessageCircle size={20} aria-hidden="true" />
      WhatsApp
    </a>
  );
}
