# Sistema de Telemedicina — Engenharia Cognitiva em IHC

## Visão Geral

Este projeto é um protótipo de sistema de telemedicina desenvolvido para a disciplina DCC174 (Engenharia Cognitiva em IHC) da UFJF, por Felipe Lazzarini Cunha e Gabriel Campos Lima Alves.

O objetivo é facilitar a colaboração entre médicos generalistas, especialistas e estudantes de medicina, otimizando o registro e a resposta de dúvidas clínicas.

---

## Como Rodar o Projeto

1. **Pré-requisitos:**  
   - Docker instalado  
   - Dev container configurado (Ubuntu 24.04.2 LTS)

2. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd medcollab-connect
   ```

3. **Abra no VS Code e inicie o Dev Container:**  
   - Abra a pasta no VS Code  
   - Use a opção "Reabrir no Container"  
   - Aguarde a inicialização

4. **Instale as dependências (se necessário):**
   ```bash
   # Exemplo para Node.js
   npm install
   ```

5. **Rode o projeto:**
   ```bash
   # Exemplo para Node.js
   npm run dev
   ```

6. **Acesse no navegador:**  
   O endereço padrão é `http://localhost:3000` (ajuste conforme sua stack).

---

## Principais Funcionalidades

- **Registro de Dúvidas Clínicas:**  
  Médicos generalistas podem registrar dúvidas preenchendo formulário e anexando arquivos.
- **Colaboração na Resposta:**  
  Especialistas e estudantes recebem, analisam e respondem dúvidas de forma colaborativa.
- **Notificações e Feedback:**  
  Usuários são notificados sobre respostas e podem registrar feedback.

---

## Perfis de Usuário

- **Médico Generalista (UBS):**  
  Profissionais sobrecarregados que buscam respostas rápidas de especialistas.
- **Docente Especialista:**  
  Professores da Faculdade de Medicina da UFJF que supervisionam e respondem dúvidas clínicas.
- **Estudante de Medicina:**  
  Estagiários interessados em aprendizado prático com casos reais.

---

## Personas

- **Dra. Ana Souza:**  
  Médica generalista, 38 anos, busca respostas rápidas e seguras.
- **Dr. Ricardo Borges:**  
  Docente especialista, 55 anos, valoriza detalhes nos casos e acompanhamento dos estudantes.

---

## Metas de Design

- **Eficiência Cognitiva:**  
  Interfaces intuitivas para reduzir carga cognitiva.
- **Usabilidade:**  
  Fácil de usar, mesmo para quem tem pouca experiência técnica.
- **Comunicabilidade:**  
  Feedback claro sobre o estado do sistema (ex: "Enviando dúvida...").

---

## Cenários de Uso

1. **Registro de Dúvida Clínica:**  
   Dra. Ana preenche formulário e anexa arquivos.
2. **Colaboração na Resposta:**  
   Dr. Ricardo e estudantes analisam e respondem.
3. **Revisão da Resposta:**  
   Dra. Ana recebe notificação, lê a resposta e pode registrar feedback.

---

## Modelagem de Tarefas (HTA)

- **Registrar Dúvida Clínica:**  
  Login → Registrar Dúvida → Preencher Formulário → Anexar Arquivos → Enviar
- **Colaborar na Resposta:**  
  Login → Acessar Dúvidas → Selecionar Caso → Analisar Dados → Enviar Resposta
- **Revisar Resposta:**  
  Receber Notificação → Abrir Dúvida → Ler Orientação → Aplicar → (Opcional) Feedback

---

## Protótipos

- **Protótipo de alta fidelidade:**  
  Disponível neste repositório.
- **Wireframes e protótipos (baixa/média fidelidade):**  
  Disponíveis no Figma (link no repositório ou solicite aos autores).
- **Exemplo de tela:**  
  Tela "Novo Caso" com campos para especialidade, dados do paciente, descrição e anexos.

---

## Grupo

- Felipe Lazzarini Cunha - M:
- Gabriel Campos Lima Alves - M: 202176005

Disciplina DCC174 — UFJF  

