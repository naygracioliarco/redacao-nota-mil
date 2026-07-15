# Changelog — Evidências (D.N.E.E.)

Registro obrigatório no **topo** a cada entrega concluída.

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
