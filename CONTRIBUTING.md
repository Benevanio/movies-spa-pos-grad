# 🔧 Guia de Contribuição - Movies SPA

Obrigado por considerar contribuir para o Movies SPA! Este guia irá ajudá-lo a entender como contribuir de forma efetiva para o projeto.

## 📋 Índice

- [🚀 Primeiros Passos](#-primeiros-passos)
- [🔀 Workflow de Contribuição](#-workflow-de-contribuição)
- [💻 Configuração de Desenvolvimento](#-configuração-de-desenvolvimento)
- [📝 Padrões de Código](#-padrões-de-código)
- [🧪 Testes](#-testes)
- [📤 Enviando Contribuições](#-enviando-contribuições)
- [🐛 Reportando Bugs](#-reportando-bugs)
- [💡 Sugerindo Melhorias](#-sugerindo-melhorias)

## 🚀 Primeiros Passos

### Tipos de Contribuições Bem-vindas
- 🐛 Correções de bugs
- ✨ Novas funcionalidades
- 📚 Melhorias na documentação
- 🎨 Aprimoramentos de UI/UX
- ⚡ Otimizações de performance
- 🔧 Refatoração de código
- 🧪 Adição de testes

### Antes de Começar
1. Leia este guia completamente
2. Verifique as [Issues existentes](https://github.com/Benevanio/movies-spa-pos-grad/issues)
3. Procure por Pull Requests relacionados
4. Entre em contato se tiver dúvidas

## 🔀 Workflow de Contribuição

### 1. Fork e Clone
```bash
# Fork o repositório no GitHub
# Clone seu fork localmente
git clone https://github.com/SEU_USERNAME/movies-spa-pos-grad.git
cd movies-spa

# Adicione o repositório original como upstream
git remote add upstream https://github.com/Benevanio/movies-spa-pos-grad.git
```

### 2. Configuração de Branch
```bash
# Sempre trabalhe a partir da branch main atualizada
git checkout main
git pull upstream main

# Crie uma nova branch para sua contribuição
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 3. Naming Convention para Branches
- `feature/` - Novas funcionalidades
- `fix/` - Correções de bugs
- `docs/` - Atualizações de documentação
- `refactor/` - Refatoração de código
- `test/` - Adição de testes
- `style/` - Mudanças de estilo/formatação

## 💻 Configuração de Desenvolvimento

### Pré-requisitos
- Node.js 16.0+
- npm ou yarn
- Git
- Editor de código (VS Code recomendado)

### Setup Inicial
```bash
# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações

# Inicie o servidor de desenvolvimento
npm start
```

### Extensões VS Code Recomendadas
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 📝 Padrões de Código

### JavaScript/JSX
- Use **ES6+** features
- Prefira **arrow functions** para componentes funcionais
- Use **destructuring** quando apropriado
- Mantenha funções pequenas e focadas

```jsx
// ✅ Bom
const MovieCard = ({ movie, onClick }) => {
  const { title, overview, vote_average } = movie;
  
  return (
    <div onClick={() => onClick(movie.id)}>
      <h3>{title}</h3>
      <p>{overview}</p>
      <span>{vote_average}</span>
    </div>
  );
};

// ❌ Evitar
function MovieCard(props) {
  return (
    <div onClick={() => props.onClick(props.movie.id)}>
      <h3>{props.movie.title}</h3>
      <p>{props.movie.overview}</p>
      <span>{props.movie.vote_average}</span>
    </div>
  );
}
```

### CSS
- Use **classes semânticas** e descritivas
- Prefira **flexbox/grid** para layouts
- Mantenha **media queries** organizadas
- Use **variáveis CSS** para valores reutilizáveis

```css
/* ✅ Bom */
.movie-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
}

/* ❌ Evitar */
.card1 {
  display: block;
  background: #fff;
  border: 1px solid #ccc;
}
```

### Hooks
- Use hooks personalizados para lógica reutilizável
- Mantenha hooks pequenos e focados
- Documente hooks complexos

```jsx
// ✅ Bom
const useMovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const search = useCallback(async (searchQuery) => {
    // lógica de busca
  }, []);
  
  return { query, setQuery, results, loading, search };
};
```

### Estrutura de Arquivos
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface básicos
│   └── feature/        # Componentes específicos de funcionalidades
├── hooks/              # Hooks personalizados
├── services/           # Lógica de API e serviços
├── utils/              # Funções utilitárias
├── constants/          # Constantes da aplicação
└── views/              # Componentes de página
```

## 🧪 Testes

### Executando Testes
```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm test -- --watch

# Executar testes com coverage
npm test -- --coverage
```

### Escrevendo Testes
```jsx
// __tests__/MovieCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../MovieCard';

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  overview: 'Test overview',
  vote_average: 8.5
};

describe('MovieCard', () => {
  test('renders movie information', () => {
    render(<MovieCard movie={mockMovie} />);
    
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('Test overview')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<MovieCard movie={mockMovie} onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Test Movie'));
    expect(handleClick).toHaveBeenCalledWith(1);
  });
});
```

## 📤 Enviando Contribuições

### Checklist Pré-Submit
- [ ] Código segue os padrões estabelecidos
- [ ] Testes passam (`npm test`)
- [ ] Build funciona (`npm run build`)
- [ ] Documentação atualizada se necessário
- [ ] Commit messages seguem convenção
- [ ] Branch atualizada com main

### Commit Messages
Use a [convenção conventional commits](https://www.conventionalcommits.org/):

```bash
# Tipos
feat: adiciona busca avançada de filmes
fix: corrige problema de loading infinito
docs: atualiza README com novas instruções
style: formata código com prettier
refactor: extrai hook useMovieSearch
test: adiciona testes para MovieCard
chore: atualiza dependências

# Formato
<tipo>(<escopo>): <descrição>

# Exemplos
feat(search): adiciona filtro por gênero
fix(api): trata erro de timeout na busca
docs(hooks): documenta useMovieDetail
```

### Pull Request
1. **Título claro**: Descreva o que foi alterado
2. **Descrição detalhada**: 
   - O que foi mudado?
   - Por que foi mudado?
   - Como testar?
3. **Screenshots**: Para mudanças de UI
4. **Breaking changes**: Destaque mudanças que quebram compatibilidade

**Template de PR:**
```markdown
## 📝 Descrição
Breve descrição das mudanças realizadas.

## 🔧 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Atualização de documentação

## 🧪 Como Testar
1. Passos para testar a mudança
2. Comportamento esperado

## 📷 Screenshots
(Se aplicável)

## ✅ Checklist
- [ ] Meu código segue as diretrizes do projeto
- [ ] Realizei uma auto-revisão do código
- [ ] Comentei código complexo
- [ ] Atualizei a documentação
- [ ] Meus commits seguem a convenção
- [ ] Testes passam localmente
```

## 🐛 Reportando Bugs

Use o [template de issue](https://github.com/Benevanio/movies-spa-pos-grad/issues/new?template=bug_report.md):

```markdown
## 🐛 Descrição do Bug
Descrição clara e concisa do problema.

## 📱 Ambiente
- OS: [macOS/Windows/Linux]
- Browser: [Chrome/Firefox/Safari]
- Versão: [versão da aplicação]
- Device: [Desktop/Mobile]

## 🔄 Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Faça scroll até '...'
4. Veja o erro

## ✅ Comportamento Esperado
O que deveria acontecer.

## 🔍 Comportamento Atual
O que realmente acontece.

## 📷 Screenshots
(Se aplicável)

## 📝 Informações Adicionais
Qualquer contexto adicional sobre o problema.
```

## 💡 Sugerindo Melhorias

Use o [template de feature request](https://github.com/Benevanio/movies-spa-pos-grad/issues/new?template=feature_request.md):

```markdown
## 💡 Resumo da Funcionalidade
Descrição clara da funcionalidade sugerida.

## 🎯 Problema/Motivação
Que problema esta funcionalidade resolve?

## 💭 Solução Sugerida
Como você gostaria que funcionasse?

## 🔄 Alternativas Consideradas
Outras abordagens que você considerou?

## 📋 Tarefas
- [ ] Tarefa 1
- [ ] Tarefa 2

## 📷 Mockups/Exemplos
(Se aplicável)
```

## 🏆 Reconhecimento

Contribuidores serão reconhecidos:
- No README principal
- No CHANGELOG
- Em releases especiais
- Na seção "Contributors" do GitHub

## 📞 Contato

- **Issues**: Para bugs e sugestões
- **Discussions**: Para perguntas gerais
- **Email**: Para questões privadas

---

**🙏 Obrigado por contribuir para o Movies SPA!** Sua colaboração ajuda a tornar este projeto melhor para toda a comunidade.