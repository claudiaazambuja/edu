import type { Metadata } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import { WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Serviços | Base Forte Bagé',
  description: 'Conheça os formatos de reforço escolar para crianças do 1º ao 4º ano em Bagé/RS.',
  openGraph: {
    title: 'Serviços | Base Forte Bagé',
    description: 'Reforço individual, pequenos grupos e plano semanal por série.',
  },
};

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle title="Serviços" subtitle="Formatos flexíveis para atender o que seu filho(a) precisa hoje." />

      <section className="grid gap-4 md:grid-cols-2">
        {['Reforço individual', 'Pequenos grupos', 'Plano semanal de estudos', 'Acompanhamento com devolutivas para pais/responsáveis'].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 p-5 font-semibold text-slate-700">{item}</div>
        ))}
      </section>

      <section className="mt-12 overflow-x-auto">
        <SectionTitle title="Comparativo simples" />
        <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4">Formato</th>
              <th className="p-4">Indicado quando</th>
              <th className="p-4">Acompanhamento</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td className="p-4">Individual</td><td className="p-4">Precisa de foco total em lacunas específicas</td><td className="p-4">Devolutiva frequente</td></tr>
            <tr className="border-t"><td className="p-4">Pequeno grupo</td><td className="p-4">Aprende bem com interação e rotina</td><td className="p-4">Relatórios por etapa</td></tr>
            <tr className="border-t"><td className="p-4">Plano semanal</td><td className="p-4">Família quer organizar estudos em casa</td><td className="p-4">Orientações práticas</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-12 rounded-2xl bg-rose-50 p-6">
        <SectionTitle title="Indicado para" />
        <ul className="space-y-2 text-slate-700">
          <li>• Está no 2º ano e ainda está firmando a alfabetização</li>
          <li>• No 4º ano, mas tem insegurança em contas e problemas</li>
          <li>• Dificuldade com ortografia e produção de texto</li>
        </ul>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-white hover:bg-rose-700">
          Quero um plano por série
        </a>
      </section>
    </div>
  );
}
