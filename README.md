# 🎬 CineInfo

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Licença](https://img.shields.io/badge/license-MIT-blue)

Uma aplicação web moderna e responsiva para descobrir, explorar e organizar seus filmes favoritos. Este projeto foi construído do zero como um exercício prático para dominar os fundamentos e conceitos avançados do ecossistema React, partindo de uma base simples para uma aplicação completa.

## ✨ Features

O "CineInfo" está em constante evolução. Aqui está o roadmap de funcionalidades:

#### Implementadas
- [x] **Navegação de Filmes Populares:** Visualização em grid dos filmes mais populares do momento.
- [x] **Páginas de Detalhes:** Rota dinâmica para cada filme, exibindo informações detalhadas.
- [x] **Sistema de Favoritos:** Adicione e remova filmes de uma lista de favoritos persistente no navegador.
- [x] **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela.
- [x] **Tema Visual Moderno:** Tema escuro "cinema" com estilização profissional e coesa.
- [x] **Boas Práticas de Segurança:** Chaves de API gerenciadas através de variáveis de ambiente.

#### Planejadas
- [ ] **Busca Avançada:** Campo de busca com "debouncing" para pesquisar filmes por nome.
- [ ] **Filtros e Ordenação:** Filtrar filmes por gênero, ano, e ordenar por popularidade ou nota.
- [ ] **Paginação:** Carregar mais resultados de filmes.
- [ ] **Autenticação de Usuários:** Sistema de Login/Cadastro para salvar favoritos na nuvem.
- [ ] **Data Fetching Otimizado:** Migração para TanStack Query para caching e performance.
- [ ] **Notificações "Toast":** Feedbacks visuais para ações do usuário.
- [ ] **Backend e Banco de Dados:** API própria para gerenciar dados de usuários e listas.
- [ ] **Deploy:** Publicação da aplicação na web.

---

## 🛠️ Tecnologias e Ferramentas

Este projeto foi construído utilizando as seguintes tecnologias:

* **React:** Biblioteca principal para a construção da interface.
* **TypeScript:** Para um código mais seguro, escalável e com melhor autocompletar.
* **Vite:** Ferramenta de build extremamente rápida para o ambiente de desenvolvimento.
* **React Router:** Para gerenciamento de rotas e navegação (SPA).
* **Context API:** Para gerenciamento de estado global (sistema de favoritos).
* **CSS Modules:** Para estilização componentizada e livre de conflitos.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o CineInfo na sua máquina.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/TorugoMarega/cineinfo.git](https://github.com/TorugoMarega/cineinfo.git)
    cd cineinfo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    * Crie um arquivo chamado `.env.local` na raiz do projeto.
    * Adicione as seguintes variáveis, substituindo os valores pelos seus:
      ```env
      # .env.local - Exemplo
      VITE_API_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
      VITE_API_KEY=SUA_CHAVE_SECRETA_DA_API_AQUI
      ```
    * Você pode obter uma chave de API gratuitamente no site do [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api).

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.