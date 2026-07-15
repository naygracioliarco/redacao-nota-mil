# Roadmap — Rumo à Redação Nota 1000

Checklist vivo dos próximos passos. Itens concluídos devem ser marcados e evidenciados em `CHANGELOG_EVIDENCES.md`.

**Última atualização:** 2026-07-15

---

## 🏛️ Governança

- [x] Instalar fluxo D.N.E.E. (`.cursorrules`)
- [x] Publicar `docs/SDD.md` (visão + arquitetura presente)
- [x] Publicar `docs/ROADMAP.md`
- [x] Publicar `docs/CHANGELOG_EVIDENCES.md`
- [x] Publicar `docs/visao-projeto.html` (abas SDD / Roadmap / Changelog)

---

## 📝 Conteúdo e alinhamento pedagógico

- [x] Alinhar rubrica (`CriteriosAvaliacao`) ao gênero **dissertativo-argumentativo** (remover critérios/copy de e-mail)
- [ ] Unificar limites de linhas (proposta × folha final × rubrica)
- [ ] Substituir placeholders (Latin / “AAA” / textos stub) por conteúdo definitivo
- [ ] Definir URL real do tutorial e regenerar `public/images/qrCode.png`
- [ ] Atualizar textos BNCC abaixo do título (substituir lorem do mock)

---

## 🏗️ Arquitetura e manutenção

- [ ] Extrair conteúdo didático de `Book.tsx` para módulo(s) em `src/data/` (ou equivalente)
- [ ] Unificar geração de PDF (`RascunhoTexto` + `ProducaoTextoFinal`)
- [ ] Corrigir `@font-face` e incluir arquivos em `public/fonts/` (ou remover referências)
- [ ] Padronizar assets com `publicUrl()` (imagens, setas, download)
- [ ] Remover assets órfãos (teacher, capas extras não usadas)
- [ ] Limpar pastas vazias / docs defasados (`OPTIMIZATIONS.md`, nome `vite-react-typescript-starter`)

---

## ⚡ Performance e UX

- [ ] Throttle/debounce no scroll de `usePagination`
- [ ] Remover ou restringir `MutationObserver` no `document.body`
- [ ] Expor ação de limpar respostas (`clearAnswers`) na UI (opcional pedagógico)
- [ ] Revisar acessibilidade (alts de imagens de conteúdo, landmarks)

---

## 🧪 Qualidade e entrega

- [ ] Smoke tests mínimos (render + localStorage round-trip)
- [ ] GitHub Action: build + deploy Pages (ou PRs com typecheck/lint)
- [ ] Incluir `docs/` no ritual de release (SDD / Roadmap / Evidências)

---

## 🚀 Futuro (fora do escopo imediato)

- [ ] Backend / autenticação / turmas (se necessário)
- [ ] Visão professor / consolidação de respostas
- [ ] Sync multi-dispositivo
