import Link from 'next/link';
import { BookOpenText, Calculator, CheckCircle2, PenSquare } from 'lucide-react';
import { Card } from '@/components/Card';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SectionTitle } from '@/components/SectionTitle';
import { SeriesPills } from '@/components/SeriesPills';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 p-8 md:p-12">
        <SeriesPills />
        <h1 className="mt-5 text-3xl font-extrabold leading-tight text-ink dark:text-slate-100 sm:text-5xl">
          Leitura, escrita e matemática
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Apoio individual e em pequenos grupos em Bagé/RS para crianças do 1º ao 4º ano.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-5 py-3 font-semibold text-white hover:bg-[#7f4486] focus:outline-none focus:ring-4 focus:ring-rose-200">
            Falar no WhatsApp
          </a>
          <Link href="/contato" className="rounded-full border border-rose-100 bg-white/95 px-5 py-3 font-semibold text-slate-800 hover:bg-rose-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
            Agendar avaliação
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <Card title="Leitura" icon={<BookOpenText aria-hidden="true" />}>
          <p>Alfabetização, fluência e compreensão com atividades claras e progressivas.</p>
        </Card>
        <Card title="Escrita" icon={<PenSquare aria-hidden="true" />}>
          <p>Ortografia, construção de frases, pequenos textos e organização de ideias.</p>
        </Card>
        <Card title="Matemática" icon={<Calculator aria-hidden="true" />}>
          <p>Contas básicas, resolução de problemas e raciocínio lógico para o dia a dia.</p>
        </Card>
      </section>

      <section className="mt-14">
        <SectionTitle title="O que seu filho(a) vai desenvolver (1º ao 4º ano)" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Leitura', ['Reconhecer sons e palavras com segurança', 'Ler em voz alta com mais confiança', 'Compreender textos curtos']],
            ['Escrita', ['Escrever frases completas', 'Organizar pequenos textos', 'Revisar erros comuns com apoio']],
            ['Matemática', ['Dominar adição, subtração, multiplicação e divisão', 'Interpretar problemas simples', 'Melhorar atenção e estratégia']],
          ].map(([area, items]) => (
            <Card key={area as string} title={area as string}>
              <ul className="space-y-2">
                {(items as string[]).map((item) => (
                  <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 text-mint" size={16} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle title="Como funciona" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            '1) Avaliação diagnóstica',
            '2) Plano de estudos por série (1º, 2º, 3º, 4º)',
            '3) Acompanhamento com devolutivas para a família',
          ].map((step) => (
            <div key={step} className="rounded-2xl bg-rose-100/70 p-5 font-semibold text-slate-700 dark:bg-slate-800/95 dark:text-slate-100">{step}</div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle title="Resultados esperados (realistas)" subtitle="Sem promessas milagrosas: foco em evolução consistente e autonomia." />
        <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
          {[
            'Mais confiança para ler em voz alta',
            'Melhor compreensão do que lê',
            'Escrita mais organizada (frases e pequenos textos)',
            'Mais segurança nas quatro operações e problemas simples',
            'Rotina de estudos mais tranquila em casa',
          ].map((item) => (
            <li key={item} className="rounded-xl border border-rose-100 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-800/95 dark:text-slate-200">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <SectionTitle title="Perguntas frequentes" />
        <FAQAccordion />
      </section>

      <section className="mt-14 rounded-2xl bg-primary p-8 text-white">
        <h2 className="text-2xl font-bold">Vamos construir uma Base Educação juntos?</h2>
        <p className="mt-2 max-w-2xl text-rose-50">
          Seu filho(a) pode avançar com leitura, escrita e matemática com um plano feito para a série dele(a).
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contato" className="rounded-full bg-white px-5 py-3 font-semibold text-primary hover:bg-rose-50">Agendar avaliação</Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full border border-white px-5 py-3 font-semibold text-white hover:bg-[#7f4486]">Quero um plano por série</a>
        </div>
      </section>
    </div>
  );
}
