# Rumo à Redação Nota 1000

Aplicação web interativa para produção textual no Ensino Médio, desenvolvida com React e TypeScript. O material conduz o aluno na redação de um **e-mail** com proposta contextualizada, espaço para rascunho, folha de redação pautada, autoavaliação por critérios e download em PDF.

## Tecnologias

- **React 18** — Interface do usuário
- **TypeScript** — Tipagem estática
- **Vite** — Build tool e servidor de desenvolvimento
- **Tailwind CSS** — Estilização responsiva
- **jsPDF** — Geração de PDF do rascunho e da redação final
- **localStorage** — Persistência de textos, respostas e posição de scroll

## Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar tipos TypeScript
npm run typecheck
```

Acesse `http://localhost:5173` após iniciar o servidor de desenvolvimento.

## Estrutura do projeto

```
src/
├── components/
│   ├── Book.tsx              # Página principal do livro digital
│   ├── Chapter.tsx           # Container de conteúdo (props opcionais)
│   ├── Header.tsx            # Cabeçalho com capa e título
│   ├── Footer.tsx            # Rodapé institucional
│   ├── Pagination.tsx        # Indicador de página no fluxo de leitura
│   ├── RascunhoTexto.tsx     # Área de rascunho com folha pautada
│   ├── ProducaoTextoFinal.tsx # Folha de redação final (15–20 linhas)
│   ├── FolhaPautada.tsx      # Textarea pautada com contador de linhas
│   ├── GradeCorrecao.tsx     # Título da seção de correção
│   ├── CriteriosAvaliacao.tsx # Rubrica de avaliação (notas 0, 1 e 2)
│   └── DownloadButton.tsx    # Botão de download em PDF
├── hooks/
│   ├── useUserAnswers.ts     # Respostas da rubrica no localStorage
│   ├── usePagination.ts      # Detecção da página visível no scroll
│   └── useScrollPosition.ts  # Restauração da posição de scroll
├── lib/
│   └── publicUrl.ts          # Caminhos de assets da pasta public
├── types/
│   └── questions.ts          # Tipo UserAnswers
├── utils/
│   └── storage.ts            # Leitura/gravação no localStorage
├── App.tsx
├── main.tsx
└── index.css
```

## Funcionalidades

### Proposta de produção textual
- Enunciado com três opções de e-mail (prefeitura, jornal local ou colegas)
- Orientação de extensão: entre **15 e 20 linhas**
- Assinatura obrigatória: *Equipe de Bem-Estar Comunitário da Rumo à Redação Nota 1000*

### Rascunho (`RascunhoTexto`)
- Folha pautada com numeração de linhas
- Contador de linhas em tempo real
- Salvamento automático no `localStorage` (por `instanceId`)
- Download do rascunho em PDF

### Folha de redação (`ProducaoTextoFinal`)
- Folha pautada com contador de linhas
- Indicação visual quando o texto está abaixo, dentro ou acima da meta (15–20 linhas)
- Salvamento automático e download em PDF

### Grade de correção (`CriteriosAvaliacao`)
- Rubrica com 5 critérios e níveis **0**, **1** e **2**
- Autoavaliação com seleção de pontuação por critério
- Respostas salvas automaticamente

Critérios avaliados:
1. Atendimento às exigências
2. Adequação ao gênero
3. Desenvolvimento do tema
4. Adequação da linguagem
5. Recursos coesivos

### Navegação
- Paginação visual ao longo do conteúdo (páginas 1 a 4)
- A página 1 fica colada ao cabeçalho
- Botão flutuante para voltar ao topo após a página 4
- Posição de scroll restaurada ao recarregar

## Componentes principais

| Componente | Descrição |
|---|---|
| `Book.tsx` | Orquestra todo o fluxo da atividade |
| `FolhaPautada.tsx` | Folha pautada reutilizável com contagem de linhas |
| `RascunhoTexto.tsx` | Rascunho configurável (`instanceId`, título e nome do PDF) |
| `ProducaoTextoFinal.tsx` | Versão final da redação com meta de linhas |
| `CriteriosAvaliacao.tsx` | Tabela rubrica 0/1/2 por critério |

## Hooks customizados

### `useUserAnswers()`
```tsx
const { userAnswers, handleAnswerChange } = useUserAnswers();
```
Gerencia e persiste as pontuações selecionadas na rubrica.

### `usePagination()`
```tsx
const { currentPage, scrollToTop } = usePagination();
```
Detecta a página visível com base nos elementos `[data-page]` e oferece retorno ao topo.

### `useScrollPosition()`
```tsx
useScrollPosition();
```
Salva e restaura a posição de scroll entre sessões.

## Scripts disponíveis

```bash
npm run dev        # Desenvolvimento com hot reload
npm run build      # Build para produção
npm run preview    # Preview do build
npm run typecheck  # Verificação de tipos
npm run lint       # ESLint
npm run deploy     # Publica em gh-pages (pasta dist)
```

## Personalização

### Cores principais
- **Roxo (header)**: `#80298F`
- **Azul escuro**: `#0E3B5D`
- **Magenta**: `#BF3154`
- **Paginação**: `#fcefff`

### Fontes
- **Títulos**: HWT Artz (`public/fonts/`)
- **Corpo**: Ubuntu (Google Fonts)

### Adicionar nova instância de rascunho
```tsx
<RascunhoTexto
  instanceId="meuRascunho"
  title="RASCUNHO"
  pdfTitle="RASCUNHO"
  pdfFileName="rascunho.pdf"
/>
```

### Configurar rubrica de avaliação
```tsx
<CriteriosAvaliacao
  instanceId="producao_final"
  criterios={[
    {
      id: 'criterio_exemplo',
      nome: 'Nome do critério',
      niveis: {
        0: 'Descrição nota 0',
        1: 'Descrição nota 1',
        2: 'Descrição nota 2',
      },
    },
  ]}
  userAnswers={userAnswers}
  onAnswerChange={handleAnswerChange}
/>
```

## Licença

Este projeto é de uso educacional e faz parte de material didático da Companhia Brasileira de Educação e Sistemas de Ensino S.A.
