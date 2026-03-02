const faqItems = [
  {
    question: 'Meu filho(a) precisa estar com nota baixa para entrar?',
    answer: 'Não. Atendemos crianças com dificuldade e também quem precisa de reforço para avançar com confiança.',
  },
  {
    question: 'Como vocês montam o plano de estudos?',
    answer: 'Começamos com uma avaliação diagnóstica e montamos um plano por série com metas simples e acompanháveis.',
  },
  {
    question: 'As aulas são individuais ou em grupo?',
    answer: 'Temos os dois formatos: individual e pequenos grupos, sempre respeitando o ritmo da criança.',
  },
  {
    question: 'Como a família acompanha o progresso?',
    answer: 'Enviamos devolutivas frequentes com orientações práticas para a rotina em casa.',
  },
  {
    question: 'Vocês atendem somente alfabetização?',
    answer: 'Não. Trabalhamos leitura, escrita e matemática para o 1º ao 4º ano.',
  },
  {
    question: 'Quanto tempo leva para ver evolução?',
    answer: 'Cada criança tem seu ritmo. O foco é evolução consistente, sem promessas milagrosas.',
  },
];

export function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqItems.map((item) => (
        <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-semibold text-ink">{item.question}</summary>
          <p className="mt-3 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
