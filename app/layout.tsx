import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://basefortebage.local'),
  title: 'Base Forte Bagé | Leitura, Escrita e Matemática até a 4ª série',
  description:
    'Projeto educacional em Bagé/RS para crianças do 1º ao 4º ano com foco em leitura, escrita e matemática.',
  openGraph: {
    title: 'Base Forte Bagé',
    description:
      'Fortalecer a base da educação com leitura, cálculo e escrita para um futuro com mais autonomia.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
