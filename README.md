<p align="center">
  <a href="https://www.ufjf.br" rel="noopener" target="_blank">
    <img width="261" height="148" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Logo_da_UFJF.png/640px-Logo_da_UFJF.png" alt="Logo UFJF" />
  </a>
  
</p>

<h1 align="center">MedCollab Connect</h1>
<p align="center">Sistema de Telemedicina — Engenharia Cognitiva em IHC (DCC174/UFJF)</p>

<div align="center">

  <!-- Status -->
  <a href="#"><img alt="Status" src="https://img.shields.io/badge/status-active-success.svg"></a>
  <!-- Deploy -->
  <a href="https://medcollab-connect.vercel.app" target="_blank"><img alt="Deploy" src="https://img.shields.io/badge/deploy-Vercel-000?logo=vercel"></a>
  <!-- Tech badges -->
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn/ui-%20-111827" />

</div>

---

## 📝 Sumário
- [Sobre](#about)
- [Informações iniciais](#getting_started)
- [Deploy](#deployment)
- [Utilização](#usage)
- [Tecnologias](#built_using)
- [Autores](#authors)
- [Menções](#acknowledgement)

## 🧐 Sobre <a name = "about"></a>
Plataforma web para colaboração entre médicos generalistas, especialistas e estudantes. O foco é reduzir a carga cognitiva no registro, triagem e resposta de dúvidas clínicas, apoiando decisões com uma interface clara e responsiva.

Principais objetivos:
- Facilitar o registro de casos/dúvidas com anexos;
- Promover colaboração ágil entre especialistas e estudantes;
- Fornecer feedback e acompanhamento de respostas.

## 🏁 Informações iniciais <a name = "getting_started"></a>
Pré-requisitos:
- Node.js 18+ (Vite 5)
- Gerenciador de pacotes (npm, pnpm ou bun)

Clonar e instalar:
```bash
git clone <url-do-repositorio>
cd medcollab-connect

# com npm
npm install
# ou pnpm
# pnpm install
# ou bun
# bun install
```

Ambiente de desenvolvimento (porta 8080):
```bash
npm run dev
# Abra: http://localhost:8080
```

Build e preview local (preview na porta 4173):
```bash
npm run build
npm run preview
# Abra: http://localhost:4173
```

Lint (opcional):
```bash
npm run lint
```

> Dica: O projeto possui configuração de Dev Container (Ubuntu 24.04.2 LTS). Abrir no VS Code e “Reabrir no Container” garante ambiente consistente.

## 🚀 Deploy <a name = "deployment"></a>
Produção (Vercel):

👉 https://medcollab-connect.vercel.app/

Deploy local rápido:
```bash
# Build de produção
npm run build

# Servir build localmente
npm run preview
```

## 🎈 Utilização <a name="usage"></a>
Fluxos principais da UI:
- Registrar novo caso: página “Novo Caso” com especialidade, dados do paciente, descrição e anexos;
- Acompanhar casos: “Dashboard” com filtros e status (pendente/atendido/devolvido);
- Detalhar e responder: “Detalhes do Caso” para análise e envio de orientação;
- Perfil e preferências: “Perfil” para dados do usuário e tema (claro/escuro);
- Acesso: “Login” e “Cadastro”.

## ⛏️ Tecnologias <a name = "built_using"></a>
- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [React Router](https://reactrouter.com/) para navegação
- [TanStack Query](https://tanstack.com/query/latest) para dados/estado server
- [Zod](https://zod.dev/) e [React Hook Form](https://react-hook-form.com/) para formulários/validação
- [Recharts](https://recharts.org/) e [date-fns](https://date-fns.org/)
- [Lucide Icons](https://lucide.dev/) e [sonner](https://sonner.emilkowal.ski/) para toasts

## ✍️ Autores <a name = "authors"></a>
- Felipe Lazzarini Cunha — M: 201876040 — DCC174/UFJF
- Gabriel Campos Lima Alves ([@CamposCodes](https://github.com/CamposCodes)) — M: 202176005 — DCC174/UFJF

## 🎉 Menções <a name = "acknowledgement"></a>
- Disciplina DCC174 — Engenharia Cognitiva em IHC (UFJF)
- Agradecimentos à comunidade shadcn/ui e Radix pelos componentes acessíveis

