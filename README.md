# 🎬 Movies SPA

Uma Single Page Application (SPA) moderna para explorar filmes populares, criada com React e integrada à API do The Movie Database (TMDB).

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![React Router](https://img.shields.io/badge/React%20Router-7.9.5-red?logo=reactrouter)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Styled-blue?logo=css3)

## ✨ Características

- 🎭 **Navegação por categorias**: Popular, Top Rated, Upcoming
- 🔍 **Busca inteligente**: Encontre filmes por nome
- 📱 **Design responsivo**: Funciona em todos os dispositivos
- 🎨 **Interface moderna**: Glassmorphism e animações suaves
- 🚀 **Performance otimizada**: Hooks personalizados e componentes reutilizáveis
- 🌐 **Integração TMDB**: Dados atualizados em tempo real

## 🖥️ Demo

### Página Inicial
- Interface de boas-vindas com cards informativos
- Navegação intuitiva para exploração de filmes

### Página de Filmes
- Lista em grid responsivo
- Busca em tempo real
- Categorização por popularidade, avaliação e lançamento
- Cards interativos com hover effects

### Detalhes do Filme
- Informações completas: sinopse, avaliação, orçamento, duração
- Poster em alta qualidade
- Gêneros e produtoras como tags
- Layout profissional com glassmorphism

## 🚀 Começando

### Pré-requisitos

- Node.js 16.0 ou superior
- npm ou yarn
- Chave de API do TMDB ([obtenha aqui](https://www.themoviedb.org/settings/api))

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Benevanio/movies-spa-pos-grad.git
cd movies-spa
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o .env e adicione sua chave da TMDB API
REACT_APP_MOVIES_API_BEARER_TOKEN=seu_bearer_token_aqui
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

5. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.9.5** - Roteamento para Single Page Applications
- **CSS3** - Estilização com glassmorphism e animações

### Ferramentas de Desenvolvimento
- **Create React App** - Configuração e build tools
- **ES6+** - JavaScript moderno
- **Custom Hooks** - Lógica reutilizável
- **Responsive Design** - Mobile-first approach

### API Externa
- **TMDB API** - The Movie Database para dados de filmes

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.jsx       # Cabeçalho da aplicação
│   ├── LoadingSpinner.jsx # Componente de loading
│   └── ErrorMessage.jsx # Exibição de erros
├── hooks/               # Hooks personalizados
│   ├── useMovies.js     # Gerenciamento de filmes
│   ├── useSearch.js     # Funcionalidade de busca
│   ├── useMovieCategories.js # Categorias
│   ├── useMovieDetail.js # Detalhes do filme
│   └── useMovieUtils.js # Utilitários
├── services/            # Serviços de API
│   └── movies.service.jsx # Integração com TMDB
├── views/               # Páginas da aplicação
│   ├── Home.jsx         # Página inicial
│   ├── Movies.jsx       # Lista de filmes
│   ├── MovieDetail.jsx  # Detalhes do filme
│   └── RootLayout.jsx   # Layout principal
├── routes/              # Configuração de rotas
│   └── Routes.jsx       # Definição das rotas
└── styles/              # Arquivos CSS
    ├── *.css           # Estilos por componente
    └── index.css       # Estilos globais
```

## 🎯 Funcionalidades

### 🏠 Página Inicial
- Apresentação da aplicação
- Cards informativos sobre funcionalidades
- Call-to-action para explorar filmes

### 🎬 Exploração de Filmes
- **Categorias disponíveis:**
  - 🔥 Popular - Filmes em alta
  - ⭐ Top Rated - Melhor avaliados
  - 🎭 Upcoming - Em breve nos cinemas

### 🔍 Busca Inteligente
- Busca em tempo real
- Validação de entrada
- Resultados instantâneos
- Mensagens de estado (loading, erro, sem resultados)

### 📄 Detalhes do Filme
- **Informações completas:**
  - 📖 Sinopse detalhada
  - ⭐ Avaliação e número de votos
  - 📅 Data de lançamento
  - ⏱️ Duração formatada
  - 💰 Orçamento e receita
  - 🏷️ Gêneros
  - 🏢 Produtoras

## 🎨 Design System

### Cores
- **Gradiente principal**: #667eea → #764ba2
- **Glassmorphism**: rgba(255, 255, 255, 0.1)
- **Texto**: Branco com opacidades variadas
- **Acentos**: #ff6b6b para erros, #ffc107 para ratings

### Tipografia
- **Fonte principal**: Segoe UI, Tahoma, Geneva, Verdana
- **Hierarquia**: h1 (2.5rem) → h3 (1.3rem) → body (1rem)
- **Peso**: 300 (light) → 700 (bold)

### Animações
- **Transições**: 0.3s ease
- **Hover effects**: translateY(-2px to -5px)
- **Loading spinner**: Rotação contínua
- **Glassmorphism**: backdrop-filter: blur(10px)

## 📱 Responsividade

- **Desktop**: Grid completo e sidebars
- **Tablet**: Adaptação de layout e tamanhos
- **Mobile**: Stack vertical e navegação otimizada

**Breakpoints:**
- Desktop: > 1024px
- Tablet: 768px - 1024px  
- Mobile: < 768px

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm start          # Inicia o servidor de desenvolvimento

# Build
npm run build      # Cria build de produção

# Testes
npm test           # Executa testes em modo watch

# Eject (não recomendado)
npm run eject      # Ejeta configuração do CRA
```

## 🌍 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# TMDB API Bearer Token (obrigatório)
REACT_APP_MOVIES_API_BEARER_TOKEN=eyJhbGciOiJIUzI1NiJ9...

# Opcional: URL base da API (padrão: https://api.themoviedb.org/3)
REACT_APP_API_BASE_URL=https://api.themoviedb.org/3
```

## 🔧 Hooks Personalizados

A aplicação utiliza hooks personalizados para reduzir duplicação de código:

- **useMovies**: Gerenciamento de estado e API calls
- **useSearch**: Funcionalidade de busca  
- **useMovieCategories**: Categorização de filmes
- **useMovieDetail**: Detalhes específicos
- **useMovieUtils**: Funções utilitárias

[Ver documentação completa dos hooks](./HOOKS.md)

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Opções de Deploy
- **Vercel**: Conecte o repositório GitHub
- **Netlify**: Arraste a pasta build ou conecte via Git
- **GitHub Pages**: Configure GitHub Actions
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Benevanio**
- GitHub: [@Benevanio](https://github.com/Benevanio)
- LinkedIn: [Benevanio](https://linkedin.com/in/benevanio)

## 🙏 Agradecimentos

- [The Movie Database (TMDB)](https://www.themoviedb.org/) - Pela excelente API gratuita
- [Create React App](https://create-react-app.dev/) - Por facilitar a configuração inicial
- [React Router](https://reactrouter.com/) - Por uma navegação elegante
- Comunidade React - Por todo o suporte e recursos disponíveis

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

[🚀 Ver Demo](http://localhost:3000) | [📖 Documentação](./HOOKS.md) | [🐛 Reportar Bug](https://github.com/Benevanio/movies-spa-pos-grad/issues)

</div>
