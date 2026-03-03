'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CONTACT_FORM_ENDPOINT, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_LINK } from '@/lib/constants';

type FormState = {
  responsavel: string;
  crianca: string;
  serie: string;
  telefone: string;
  email: string;
  mensagem: string;
};

const initialState: FormState = {
  responsavel: '',
  crianca: '',
  serie: '',
  telefone: '',
  email: '',
  mensagem: '',
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.responsavel.trim()) nextErrors.responsavel = 'Informe o nome do responsável.';
    if (!form.crianca.trim()) nextErrors.crianca = 'Informe o nome da criança.';
    if (!form.serie) nextErrors.serie = 'Selecione a série.';

    const phoneDigits = form.telefone.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      nextErrors.telefone = 'Informe telefone com DDD + 9 dígitos.';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Informe um e-mail válido ou deixe em branco.';
    }

    if (!form.mensagem.trim()) nextErrors.mensagem = 'Escreva uma mensagem curta.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    try {
      setSending(true);
      setSubmitError('');
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Novo agendamento de avaliação - Base Forte Bagé',
          responsavel: form.responsavel,
          crianca: form.crianca,
          serie: form.serie,
          telefone: form.telefone,
          email: form.email || 'Não informado',
          mensagem: form.mensagem,
        }),
      });

      if (!response.ok) throw new Error('Falha ao enviar');
      setForm(initialState);
      setShowSuccessPopup(true);
    } catch {
      setSubmitError('Não foi possível enviar agora. Tente novamente em instantes ou use o WhatsApp.');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form className="mt-8 space-y-5 rounded-2xl border border-rose-100 p-6" onSubmit={onSubmit} noValidate>
        {[
          { key: 'responsavel', label: 'Nome do responsável', type: 'text' },
          { key: 'crianca', label: 'Nome da criança', type: 'text' },
        ].map((field) => (
          <div key={field.key}>
            <label htmlFor={field.key} className="mb-1 block font-medium text-ink">{field.label}</label>
            <input
              id={field.key}
              type={field.type}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-4 focus:ring-rose-100"
              value={form[field.key as keyof FormState]}
              onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
              aria-invalid={Boolean(errors[field.key as keyof FormState])}
              disabled={sending}
            />
            {errors[field.key as keyof FormState] ? <p className="mt-1 text-sm text-red-600">{errors[field.key as keyof FormState]}</p> : null}
          </div>
        ))}

        <div>
          <label htmlFor="telefone" className="mb-1 block font-medium text-ink">Telefone (DDD + 9 dígitos)</label>
          <input
            id="telefone"
            type="tel"
            inputMode="numeric"
            placeholder="(53) 91234-5678"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-4 focus:ring-rose-100"
            value={form.telefone}
            onChange={(e) => setForm((prev) => ({ ...prev, telefone: formatPhone(e.target.value) }))}
            aria-invalid={Boolean(errors.telefone)}
            disabled={sending}
          />
          {errors.telefone ? <p className="mt-1 text-sm text-red-600">{errors.telefone}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-medium text-ink">E-mail (opcional)</label>
          <input
            id="email"
            type="email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-4 focus:ring-rose-100"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            aria-invalid={Boolean(errors.email)}
            disabled={sending}
          />
          {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="serie" className="mb-1 block font-medium text-ink">Série (1º ao 4º ano)</label>
          <select
            id="serie"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-4 focus:ring-rose-100"
            value={form.serie}
            onChange={(e) => setForm((prev) => ({ ...prev, serie: e.target.value }))}
            aria-invalid={Boolean(errors.serie)}
            disabled={sending}
          >
            <option value="">Selecione</option>
            <option>1º ano</option>
            <option>2º ano</option>
            <option>3º ano</option>
            <option>4º ano</option>
          </select>
          {errors.serie ? <p className="mt-1 text-sm text-red-600">{errors.serie}</p> : null}
        </div>

        <div>
          <label htmlFor="mensagem" className="mb-1 block font-medium text-ink">Mensagem</label>
          <textarea
            id="mensagem"
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-4 focus:ring-rose-100"
            value={form.mensagem}
            onChange={(e) => setForm((prev) => ({ ...prev, mensagem: e.target.value }))}
            aria-invalid={Boolean(errors.mensagem)}
            disabled={sending}
          />
          {errors.mensagem ? <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p> : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="submit" disabled={sending} className="rounded-full bg-primary px-5 py-3 font-semibold text-white hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-70">
            {sending ? 'Enviando...' : 'Agendar avaliação'}
          </button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full border border-green-600 px-5 py-3 font-semibold text-green-700 hover:bg-green-50">
            Abrir WhatsApp
          </a>
        </div>

        <p className="text-sm text-slate-500">Mensagem padrão do WhatsApp: {WHATSAPP_DEFAULT_MESSAGE}</p>
        {submitError ? <p className="rounded-xl bg-red-50 p-3 text-red-700">{submitError}</p> : null}
      </form>

      {showSuccessPopup ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal="true" aria-label="Mensagem de sucesso no agendamento">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Solicitação enviada</p>
            <h3 className="mt-2 text-2xl font-extrabold text-ink">Obrigada pelo contato.</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Esse é o primeiro passo para construirmos uma base educacional forte e uma experiência de aprendizagem agradável para sua criança. A solicitação foi enviada com sucesso e em breve retornaremos.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowSuccessPopup(false);
                  router.push('/');
                }}
                className="rounded-full bg-primary px-5 py-3 font-semibold text-white hover:bg-rose-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
