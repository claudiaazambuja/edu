'use client';

import { useState } from 'react';
import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_LINK, createScheduleEmailLink } from '@/lib/constants';

type FormState = {
  responsavel: string;
  crianca: string;
  serie: string;
  telefone: string;
  mensagem: string;
};

const initialState: FormState = {
  responsavel: '',
  crianca: '',
  serie: '',
  telefone: '',
  mensagem: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.responsavel.trim()) nextErrors.responsavel = 'Informe o nome do responsável.';
    if (!form.crianca.trim()) nextErrors.crianca = 'Informe o nome da criança.';
    if (!form.serie) nextErrors.serie = 'Selecione a série.';
    if (!form.telefone.trim()) nextErrors.telefone = 'Informe um telefone para retorno.';
    if (!form.mensagem.trim()) nextErrors.mensagem = 'Escreva uma mensagem curta.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) {
      setSuccess(false);
      return;
    }

    const mailtoLink = createScheduleEmailLink(form);
    setSuccess(true);
    window.location.href = mailtoLink;
    setForm(initialState);
  }

  return (
    <form className="mt-8 space-y-5 rounded-2xl border border-rose-100 p-6" onSubmit={onSubmit} noValidate>
      {[
        { key: 'responsavel', label: 'Nome do responsável', type: 'text' },
        { key: 'crianca', label: 'Nome da criança', type: 'text' },
        { key: 'telefone', label: 'Telefone', type: 'tel' },
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
          />
          {errors[field.key as keyof FormState] ? <p className="mt-1 text-sm text-red-600">{errors[field.key as keyof FormState]}</p> : null}
        </div>
      ))}

      <div>
        <label htmlFor="serie" className="mb-1 block font-medium text-ink">Série (1º ao 4º ano)</label>
        <select
          id="serie"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-4 focus:ring-rose-100"
          value={form.serie}
          onChange={(e) => setForm((prev) => ({ ...prev, serie: e.target.value }))}
          aria-invalid={Boolean(errors.serie)}
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
        />
        {errors.mensagem ? <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p> : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="rounded-full bg-primary px-5 py-3 font-semibold text-white hover:bg-rose-700">
          Agendar avaliação por e-mail
        </button>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full border border-green-600 px-5 py-3 font-semibold text-green-700 hover:bg-green-50">
          Abrir WhatsApp
        </a>
      </div>

      <p className="text-sm text-slate-500">Mensagem padrão do WhatsApp: {WHATSAPP_DEFAULT_MESSAGE}</p>
      {success ? <p className="rounded-xl bg-rose-50 p-3 text-rose-700">Abrindo seu e-mail para envio da solicitação.</p> : null}
    </form>
  );
}
