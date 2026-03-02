export const WHATSAPP_PHONE = '+5553984693364';
export const WHATSAPP_DISPLAY = '+55 53 98469-3364';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Tenho interesse em apoio para meu filho(a) até a 4ª série (leitura, escrita e matemática). Podemos conversar?';

export const CONTACT_EMAIL = 'cclabdis@gmail.com';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

export const AGENDAR_EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Agendar avaliação - Base Forte Bagé',
)}`;

type ContactPayload = {
  responsavel: string;
  crianca: string;
  serie: string;
  telefone: string;
  mensagem: string;
};

export function createScheduleEmailLink(payload: ContactPayload) {
  const body = [
    'Olá, gostaria de agendar uma avaliação.',
    '',
    `Nome do responsável: ${payload.responsavel}`,
    `Nome da criança: ${payload.crianca}`,
    `Série: ${payload.serie}`,
    `Telefone: ${payload.telefone}`,
    `Mensagem: ${payload.mensagem}`,
  ].join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    'Agendar avaliação - Base Forte Bagé',
  )}&body=${encodeURIComponent(body)}`;
}
