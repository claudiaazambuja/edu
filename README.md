# Base Forte Bagé (Next.js + Tailwind)

Site front-end em PT-BR para Bagé/RS com foco no apoio de crianças do **1º ao 4º ano** em **leitura, escrita e matemática**.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Export estático (`output: "export"`) para GitHub Pages

## Rodando localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra `http://localhost:3000`.

## Build estático
```bash
npm run build
```
O build exportado será gerado em `out/`.

## WhatsApp (constantes)
- `WHATSAPP_PHONE="+5553984693364"`
- `WHATSAPP_DISPLAY="+55 53 98469-3364"`
- `WHATSAPP_DEFAULT_MESSAGE="Olá! Tenho interesse em apoio para meu filho(a) até a 4ª série (leitura, escrita e matemática). Podemos conversar?"`

Link final usado no site:
`https://wa.me/5553984693364?text=<URL_ENCODED_MESSAGE>`

## Publicação no GitHub Pages
O repositório já inclui workflow em `.github/workflows/deploy.yml` para publicar ao fazer push na branch `main`.

### Passo a passo no GitHub
1. Vá em **Settings > Pages** no repositório.
2. Em **Build and deployment**, selecione **Source: GitHub Actions**.
3. Faça push na `main`.
4. Aguarde o workflow **Deploy to GitHub Pages** concluir.

### NEXT_PUBLIC_BASE_PATH
Para GitHub Pages em projeto (ex.: `https://usuario.github.io/nome-repo/`), o app usa `NEXT_PUBLIC_BASE_PATH` para `basePath` e `assetPrefix`.

- No workflow, essa variável é definida automaticamente como:
  - `/NOME_DO_REPOSITORIO`
- Localmente, normalmente deixe vazio.
- Se quiser simular localmente com basePath:
  ```bash
  NEXT_PUBLIC_BASE_PATH=/nome-repo npm run build
  ```

### Exemplo de URL final
Se o usuário for `educa` e o repositório `base-forte-bage`, a URL será:
`https://educa.github.io/base-forte-bage/`

## Troubleshooting rápido
Se você estiver vendo a página da README (como no print), normalmente você está abrindo a URL do repositório no GitHub, e não a URL publicada do Pages.

- URL do repositório (mostra código/README):
  - `https://github.com/USUARIO/REPO`
- URL do site publicado (GitHub Pages):
  - `https://USUARIO.github.io/REPO/`
