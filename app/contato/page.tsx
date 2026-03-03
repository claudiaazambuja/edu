import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato | Base Forte Bagé',
  description: 'Agende avaliação e fale com a equipe pelo WhatsApp para apoio do 1º ao 4º ano.',
  openGraph: {
    title: 'Contato | Base Forte Bagé',
    description: 'Formulário e WhatsApp para atendimento em Bagé/RS.',
  },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-ink dark:text-slate-100">Contato</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Preencha o formulário para agendar avaliação. O envio é feito automaticamente e nossa equipe retorna para você.
      </p>
      <ContactForm />
    </div>
  );
}
