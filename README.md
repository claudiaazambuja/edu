# Base Forte Bagé (Next.js + Tailwind)

Site front-end para divulgação de apoio educacional em Bagé/RS para crianças do **1º ao 4º ano**, com foco em **leitura, escrita e matemática**.

## Requisitos
- Node.js 18+
- npm 9+

## Como rodar
```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Estrutura
- `app/` páginas (App Router)
- `components/` componentes reutilizáveis
- `lib/constants.ts` constantes de WhatsApp

## WhatsApp
- Número (E.164): `+5553984693364`
- Exibição: `+55 53 98469-3364`
- Link base (wa.me):
  - `https://wa.me/5553984693364?text=<URL_ENCODED_MESSAGE>`

## Scripts
- `npm run dev` desenvolvimento
- `npm run build` build de produção
- `npm run start` iniciar build
- `npm run lint` lint
