export const WHATSAPP_PHONE = '+5553984693364';
export const WHATSAPP_DISPLAY = '+55 53 98469-3364';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Quero iniciar uma jornada educacional com Base Educação para meu filho(a), com uma experiência de aprendizagem acolhedora em leitura, escrita e matemática. Podemos conversar?';

export const CONTACT_EMAIL = 'cclabdis@gmail.com';
export const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
