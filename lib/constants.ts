export const WHATSAPP_PHONE = '+5553984693364';
export const WHATSAPP_DISPLAY = '+55 53 98469-3364';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Tenho interesse em apoio para meu filho(a) até a 4ª série (leitura, escrita e matemática). Podemos conversar?';

export const CONTACT_EMAIL = 'cclabdis@gmail.com';
export const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
