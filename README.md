# CP6 - Lava Rápido

Projeto front-end desenvolvido com **React 18.3.1**, **Vite 5.4.1**, **Tailwind CSS 3.4.13** e **TypeScript 5.4.5**.

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 16+ instalado
- npm ou pnpm

### Passos

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```
   O projeto abrirá automaticamente em `http://localhost:5173/`

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Visualizar build:**
   ```bash
   npm run preview
   ```

## 📁 Estrutura do Projeto

```
cp6-lava-rapido/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── NewTicket.tsx
│   │   ├── TicketsList.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Componente principal com roteamento
│   ├── main.tsx         # Ponto de entrada
│   ├── index.css        # Estilos globais (Tailwind)
│   └── vite-env.d.ts    # Tipos do Vite
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── tsconfig.node.json   # Configuração TypeScript para Vite
├── vite.config.ts       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind CSS
└── postcss.config.js    # Configuração PostCSS (vazio)
```

## 🎨 Funcionalidades

- **Home:** Página de boas-vindas com links para criar e visualizar atendimentos
- **Novo Atendimento:** Formulário com React Hook Form para registrar novos serviços
- **Listagem de Atendimentos:** Tabela com atendimentos registrados
- **Página 404:** Página de erro para rotas não encontradas
- **Roteamento Completo:** Navegação entre páginas com React Router DOM
- **Layout Padrão:** Header e Footer visíveis em todas as páginas
- **Estilização:** Design responsivo com Tailwind CSS

## 👥 Participantes

| Nome                        | RM       |
|-----------------------------|-----------|
| **Fellipe Costa de Oliveira** | RM564673 |
| **Felype Ferreira Maschio**   | RM563009 |


## 🔧 Dependências

### Produção
- `react`: 18.3.1
- `react-dom`: 18.3.1
- `react-router-dom`: 6.26.2
- `react-hook-form`: 7.53.0

### Desenvolvimento
- `vite`: 5.4.1
- `@vitejs/plugin-react`: 4.3.1
- `typescript`: 5.4.5
- `tailwindcss`: 3.4.13
- `eslint`: 8.57.0

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📄 Licença

MIT
