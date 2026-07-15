# Changelog — Evidências (D.N.E.E.)

Registro obrigatório no **topo** a cada entrega concluída.

---

## 2026-07-15 — TermoGlossario (definição de “prosa”)

### Antes
- ❌ Palavra “prosa” só destacada em cor, sem acesso ao significado
- ❌ Sem componente reutilizável de glossário inline

### Depois
- ✅ `src/components/TermoGlossario.tsx` (termo + significado via props)
- ✅ Popover pequeno ao clicar; fecha com X, clique fora ou Esc
- ✅ Uso em `Book.tsx` na palavra “prosa”
- ✅ `docs/SDD.md` atualizado

### Decisão
Popover discreto (não modal de tela cheia) para não interromper a leitura; API por props para reaproveitar em outros termos do material.

---

## 2026-07-15 — Componente GabaritoOnlineBanner

### Antes
- ❌ Placeholder vazio em `Book.tsx` onde deveria haver a faixa **GABARITO ONLINE**
- ❌ Sem componente reutilizável desse padrão visual

### Depois
- ✅ `src/components/GabaritoOnlineBanner.tsx` (título, itens com `prefix`/`text`, QR, cores opcionais, `href`)
- ✅ Visual alinhado ao material (roxo + QR em caixa branca com borda cyan)
- ✅ Textos placeholder do print por enquanto; QR usa `qrCode.png` + `TUTORIAL_URL`
- ✅ `docs/SDD.md` atualizado

### Decisão
Extrair a faixa como componente de props (como o checklist) para reuso; manter copy Latin temporária até o conteúdo definitivo do gabarito.

---

## 2026-07-15 — Componente ChecklistAutoavaliacao (persistente)

### Antes
- ❌ Placeholder vazio em `Book.tsx` onde deveria haver checklist de autoavaliação
- ❌ Sem componente reutilizável de checklist para outros projetos/materiais

### Depois
- ✅ `src/components/ChecklistAutoavaliacao.tsx` com props `title`, `subtitle`, `items`, `instanceId`, cores opcionais
- ✅ Visual inspirado no material (ícone lápis + faixa jagged + checkboxes)
- ✅ Estado das checks em `book_answers` (`${instanceId}_${item.id}` → boolean) via `useUserAnswers`
- ✅ Uso em `Book.tsx` com os 6 itens do print (C1/C4)
- ✅ `docs/SDD.md` atualizado

### Decisão
Expor textos só por props para reuso entre livros; persistir checks no mesmo store da rubrica (opção A) para o estudante não perder o progresso ao recarregar.

---

## 2026-07-15 — Rubrica alinhada ao dissertativo-argumentativo

### Antes
- ❌ Descritores da grade citavam **e-mail**, assinatura “Equipe de Bem-Estar…” e “opção escolhida” (A/B/C)
- ❌ Autoavaliação desalinhada do gênero atual do livro digital
- ⚠️ `docs/SDD.md` registrava vestígios de e-mail na rubrica como risco conhecido

### Depois
- ✅ Array `criterios` em `Book.tsx` reescrito para dissertativo-argumentativo (tese, argumentos, conclusão, tema da proposta)
- ✅ Removidas menções a e-mail / assinatura de equipe / opções A–C
- ✅ Mantidos os mesmos `id`s dos critérios (não invalida chaves já salvas em `book_answers`)
- ✅ Extensão ainda referenciada como **15–20 linhas** (unificação completa fica no próximo item do Roadmap)
- ✅ `docs/SDD.md` e `docs/ROADMAP.md` atualizados

### Decisão
Corrigir primeiro o **conteúdo pedagógico da rubrica** sem mudar a UI de `CriteriosAvaliacao` nem os IDs, para preservar notas locais. Limites de linha permanecem 15–20 nesta entrega; a unificação proposta × folha × rubrica é a próxima tarefa do Roadmap.

---

## 2026-07-15 — Inicialização da governança D.N.E.E.

### Antes
- ❌ Sem `.cursorrules` nem fluxo formal Discovery → Spec → Evidência
- ❌ Sem `docs/SDD.md`, `docs/ROADMAP.md` ou trilha de evidências
- ❌ Sem painel único para ler a documentação do projeto

### Depois
- ✅ `.cursorrules` com fluxo D.N.E.E. (Descobrir, Nortear, Especificar, Evidenciar)
- ✅ `docs/SDD.md` descrevendo visão e arquitetura **presente**
- ✅ `docs/ROADMAP.md` com checkboxes de próximos passos
- ✅ `docs/CHANGELOG_EVIDENCES.md` (este arquivo) iniciado
- ✅ `docs/visao-projeto.html` com 3 abas (SDD / Roadmap / Changelog), Tailwind + marked.js + Mermaid

### Decisão
Adotar D.N.E.E. como contrato de trabalho entre time e agente: toda feature passa por mini-Discovery no chat; implementação alinhada ao SDD/Roadmap; evidência escrita ao concluir. Isso reduz drift entre código e documentação e cria histórico auditável das decisões.
