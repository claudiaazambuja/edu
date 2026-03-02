import type { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import { SeriesPills } from '@/components/SeriesPills';
import { AGENDAR_EMAIL_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sobre | Base Forte Bagé',
  description: 'Conheça a missão, metodologia e participação da família no apoio escolar do 1º ao 4º ano.',
  openGraph: {
    title: 'Sobre | Base Forte Bagé',
    description: 'Missão e metodologia para fortalecer leitura, escrita e matemática até a 4ª série.',
  },
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle title="Sobre o projeto" subtitle="Fortalecer a base até a 4ª série para aumentar a autonomia da criança." />
      <SeriesPills />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-ink">Missão</h2>
          <p className="mt-3 text-slate-600">
            Ajudar seu filho(a) a consolidar leitura, escrita e matemática com acompanhamento acolhedor e metas reais.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-ink">Para quem é</h2>
          <p className="mt-3 text-slate-600">
            Crianças do 1º ao 4º ano com dificuldades de aprendizagem ou que precisam de reforço para avançar com segurança.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <SectionTitle title="Metodologia" />
        <ul className="space-y-3 text-slate-700">
          <li>• Atividades lúdicas + prática guiada</li>
          <li>• Rotina de leitura com textos adequados à série</li>
          <li>• Escrita com modelos e revisões simples</li>
          <li>• Matemática com material visual e resolução de problemas</li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-6">
        <SectionTitle title="Como a família participa" />
        <ul className="space-y-2 text-slate-700">
          <li>• Recebe orientações simples para apoiar em casa sem sobrecarregar.</li>
          <li>• Acompanha devolutivas sobre avanços e pontos de atenção.</li>
          <li>• Ajuda a manter uma rotina leve de estudo semanal.</li>
        </ul>
        <a href={AGENDAR_EMAIL_LINK} className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-white hover:bg-rose-700">
          Agendar avaliação por e-mail
        </a>
      </section>
    </div>
  );
}
