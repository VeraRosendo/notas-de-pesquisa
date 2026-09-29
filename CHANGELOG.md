## 2026-09-27
### Adicionado
- Conexão pessoal da Manu com o Congresso FIEPS (divulgadora oficial, edição 2021)
- Links cruzados com o site do Flávio Nanami (byline em "aula-sem-jogar-bola.html" e quadro de indicação em "treinamento-forca-iniciantes.html")
- 15 posts de Instagram (formato story) cobrindo os 9 artigos + 6 guias iniciais
- Novo guia "Treinamento multicomponente para pessoas idosas", baseado na revisão de literatura do pré-projeto de doutorado da Manu
- 9 novos guias: vestuário e proteção solar, hidratação, sono e recuperação, exercício em calor/frio, relógio de frequência cardíaca, recuperação e terapias regenerativas, HYROX, Pilates, manobra de Valsalva (total: 15 guias)
- 6 novas coberturas em Tendências: ECSS 2026, Milano-Cortina 2026 (ciência), reformulação do Programa Academia da Saúde, e 3 matérias de opinião/análise (personal trainer e supervisão em academias, dieta vs. exercício, adesão por gênero) — mais corrida em trilha no Brasil (total: 11 itens)
- Menu de atalho por tema em index.html (7 temas, cores já existentes), guias.html (6 temas novos) e tendencias.html (5 temas novos, incluindo "Opinião")
- Link "← Voltar ao menu" ao final de toda página individual de conteúdo, apontando para a âncora do tema de origem (regra permanente a partir de agora)
- Tag og:url em todas as 39 páginas HTML do site (estava ausente desde o início, causava falha na prévia de compartilhamento no WhatsApp/Facebook)

### Alterado
- index.html: corrigido link "Guias" que estava ausente do cabeçalho
- style.css: novas classes .quick-jump-row, .quick-jump-btn, .theme-heading, .back-to-menu
- Artigo sobre personal trainer reformulado (removido o ângulo de custo, mantida a proporção aluno-profissional como argumento central) e renomeado de analise-personal-trainer-custo-supervisao.html para orientacao-tecnica-academias.html, com título "Orientação técnica no uso dos aparelhos: o que toda academia deveria garantir"
- Ícone do guia de multicomponente para idosos corrigido (o desenho original formava acidentalmente o símbolo de Vênus)

### Corrigido
- Citações incompletas nos guias de Autoavaliação, Mitos e Mobilidade (referências específicas adicionadas)## 2026-09-27
### Adicionado
- Menu de atalho por tema em index.html, guias.html e tendencias.html (estilo "quick jump", inspirado no site CorpoVivo)
- Conteúdo reagrupado em seções temáticas coloridas:
  - index.html: pelas 7 categorias já existentes (Exercício Físico, Educação Física, Ensino Superior, Saúde Mental, Formação de Professores, Envelhecimento, Gestação)
  - guias.html: 6 novos temas (Treino, Aptidão física, Mitos, Mobilidade, Vestuário, Cuidados), cada um com cor própria
  - tendencias.html: 4 novos temas (Congressos científicos, Mercado fitness, Grandes eventos, Políticas públicas), cada um com cor própria

### Alterado
- style.css: novas classes .quick-jump-row, .quick-jump-btn e .theme-heading, reutilizadas nas três páginas# Changelog

Todas as mudanças relevantes deste site são registradas aqui, da mais recente para a mais antiga.

## [Não lançado]
- (mudanças em andamento entram aqui até serem publicadas)

## 2026-09-29
### Adicionado
- Mapa do site na página inicial (seção "Mapa do site", âncora #menu-topo): linha em seis partes, na ordem Artigos, Fisiologia do Exercício, Mitos, Guias, Últimas tendências e Quem escreve; cada parte abre para mostrar temas e textos, todos clicáveis. Substitui o antigo menu de atalho dos artigos
- Trilha de localização ("Início › Parte › Tema › Página") no topo de todas as páginas, no lugar do antigo link "← voltar"
- Mapa da página ("Nesta página") nas páginas de conteúdo com três ou mais seções, montado automaticamente a partir dos subtítulos, com atalho para as Referências
- Menu suspenso em "Fundamentos" (fisiologia.html), dividido em subgrupos (Visão integrada; Metabolismo energético); qualquer tema pode ganhar menu suspenso marcando `menu: true` nos dados
- Página mitos.html: reúne os 2 textos completos sobre mitos e um catálogo de 15 mitos em 4 temas (Metabolismo e energia; Emagrecimento; Treino e adaptação; O corpo como sistema), no formato do Debunking Handbook 2020 (fato primeiro, crença, por que convence, onde aprofundar), com 27 referências
- js/mapa-dados.js (fonte única da estrutura do site) e js/mapa.js (montagem do mapa, da trilha, do "Nesta página" e dos menus suspensos)
- Link "Mitos" e "Mapa do site" no cabeçalho de todas as páginas

### Alterado
- Cabeçalho: ordem dos links acompanha a sequência do mapa (Fisiologia, Mitos, Guias, Últimas tendências, Mapa do site)
- fisiologia.html: seção "Mito ou fato" retirada; o botão passou a se chamar "Mitos" e leva à nova página; Fundamentos ganhou subtítulos por subgrupo
- guias.html: tema "Mitos" retirado (o guia de mitos passou para a página Mitos)
- Textos de Fundamentos: box "Mito ou fato" renomeado para "Mitos", com link para a página Mitos; subtítulo "O que é mito" com âncora fixa (#o-que-e-mito)
- Ácido lático e Mitos comuns: trilha, rótulo e "Voltar ao menu" apontam para a página Mitos
- index.html: "↑ Voltar ao menu" passou a "↑ Voltar ao mapa"
- mitos.html: rodapé dos quadros de mito passou de "Para aprofundar" a "Este mito integra", com a parte do site indicada ao lado de cada texto (ex.: Fisiologia · Fundamentos)
- style.css: estilos do mapa, da trilha, do "Nesta página", do menu suspenso e da página Mitos

### Corrigido
- Guia "Mitos comuns": referências convertidas para lista completa com DOI; periódico de Vieira et al. (2016) corrigido (British Journal of Nutrition) e ano de Kraemer e Ratamess corrigido (2005)


## 2026-09-26
### Adicionado
- Página "Sobre" (sobre.html), com bio escrita em primeira pessoa
- Link para "Sobre" no nome, na home e no cabeçalho

### Alterado
- Crédito do rodapé atualizado para "Produção e Design: VR Travessias"

## 2026-09-15
### Adicionado
- 9º artigo: "Motivos de adesão e permanência no treinamento de força"
- Favicon e apple-touch-icon

---

## Como usar este arquivo

1. Toda vez que você (ou eu, numa sessão futura) publicar algo novo no site, some uma entrada no topo, com a data do dia.
2. Categorias mais comuns: **Adicionado** (algo novo), **Alterado** (algo que já existia e mudou), **Corrigido** (um erro consertado), **Removido** (algo tirado do ar).
3. Não precisa ser detalhado como um relatório técnico, uma linha por mudança já cumpre o papel.
4. No início de uma nova conversa comigo sobre este site, cole o conteúdo deste arquivo, ou simplesmente diga "olha o changelog no repositório", para eu me situar rápido sobre o que já existe.
## 2026-09-26
### Adicionado
- Novo pilar "Guias de Condicionamento Físico" (guias.html), com o primeiro guia: "Treinamento de força para iniciantes: por onde começar"
- Link "Guias" no cabeçalho de todas as páginas do site
- Nova cor de categoria "Guia" (terracota) no CSS
- Quadro de indicação profissional no guia de treinamento de força, apresentando Flávio Nanami (preparador físico, coautor de um dos artigos da Manu) como opção de acompanhamento individualizado, com link para flavionanami.com.br

### Alterado
- Nome de Flávio Yoshio Nanami, no artigo "Aula de educação física sem jogar bola?", agora é um link para o site dele
- sitemap.xml atualizado com as duas páginas novas (guias.html e o guia de treinamento de força)

### Corrigido
- Justificação de texto e hifenização automática (text-align: justify + hyphens: auto) aplicadas ao body-text, pendência desde a definição desse padrão para todos os sites
## 2026-09-26
### Adicionado
- 4 novos guias no pilar "Guias de Condicionamento Físico": "Treino cardiorrespiratório para iniciantes", "Como avaliar sua própria aptidão física, sem equipamento de laboratório", "Mitos comuns sobre exercício físico" e "Mobilidade e flexibilidade" (total: 5 guias)
- Quadro de indicação profissional no guia de treinamento de força, apresentando Flávio Nanami (preparador físico) como opção de acompanhamento individualizado, com link para flavionanami.com.br

### Alterado
- Nome de Flavio Yoshio Nanami, no artigo "Aula de educação física sem jogar bola?", agora é um link para o site dele (flavionanami.com.br)
- guias.html atualizado para listar os 5 guias
- sitemap.xml atualizado com as 4 páginas novas

### Corrigido
- Citações incompletas nos guias de Autoavaliação, Mitos e Mobilidade: adicionadas referências específicas (Jones, Rikli & Beam 1999; Schoenfeld & Contreras 2013; Kraemer & Ratamess 2004; Kay & Blazevich 2012) para reforçar o rigor do conteúdo publicado como referência
## 2026-09-27
### Adicionado
- 6º guia no pilar "Guias de Condicionamento Físico": "Treinamento multicomponente para pessoas idosas, o que diz a ciência", com base na revisão de literatura do pré-projeto de doutorado da Manu (PPGEF/UFES, 2024), que não seguiu adiante com o orientador
- guias.html e sitemap.xml atualizados
## 2026-09-27
### Adicionado
- 5 novos guias: vestuário e proteção solar, hidratação, sono e recuperação, exercício em calor/frio, uso de relógio de frequência cardíaca
- 3 novas coberturas em "Tendências": ECSS 2026, Milano-Cortina 2026 (ciência), reformulação do Programa Academia da Saúde
- guias.html, tendencias.html e sitemap.xml atualizados (23 páginas de conteúdo no total)

## 2026-09-27 (arquitetura)
### Adicionado
- Página "Trajetória acadêmica" (memorial crítico-reflexivo da Manu), com link na página Sobre
- Blocos "Leia também" com links cruzados recíprocos entre artigos e guias relacionados (11 páginas)
- Estilos globais .info-box, .see-also e de referências em css/style.css
- Pauta editorial no README, incluindo fisiologia do exercício como tema a desenvolver
### Alterado
- Artigo de opinião "Orientação técnica no uso dos aparelhos" reescrito (sem foco em personal trainer, referências ampliadas)
- Rodapé uniformizado em todo o site: "Produção, revisão e edição: Travessias · Desenvolvimento técnico: Claude (IA)"
- Títulos das abas: " — Notas de Pesquisa" substituído por " | Notas de Pesquisa"
### Removido
- guias/corrida-trilha-brasil-2026.html (cópia órfã de artigos/corrida-trilha-brasil-2026.html)

## 2026-09-28
### Adicionado
- Artigo de opinião "Escolhido por último" (Tendências, tema Opinião), sobre exclusão na escolha de times e atividade física na vida adulta
- Box "O que a pesquisa diz" na página Trajetória acadêmica, com link para o novo artigo
- Links "Leia também" recíprocos entre o novo artigo, a Trajetória e os artigos de Educação Física escolar
### Alterado
- Trajetória acadêmica: citação final trocada para Paulo Freire; retiradas a nota explicativa e a menção à expectativa de cursar o doutorado
- Resumo do artigo sobre orientação técnica em tendencias.html atualizado

## 2026-09-28 (revisão científica)
### Alterado
- Artigo "Escolhido por último" revisto com base em parecer externo e conferência das fontes: separação entre ensaio teórico e estudos empíricos, causalidade qualificada em todo o texto, nova seção "O olhar da psicologia do exercício" (clima motivacional, autodeterminação, afeto, memória reconstrutiva), box com cadeia hipotética, seção "Os limites da evidência" e proposta pedagógica ampliada; referências passam de 5 para 14
- Box da Trajetória e resumo em tendencias.html ajustados para "possível ponte"
- Botão "Trajetória acadêmica" no index, ao lado do Currículo Lattes (estilo .trajetoria-link em css/style.css)

## 2026-09-28 (Fisiologia)
### Adicionado
- Seção "Fisiologia do Exercício" (fisiologia.html), com link no menu de todas as páginas e categoria de cor própria (--c-fis)
- Primeiro texto: "O corpo em exercício funciona como um sistema integrado" (fisiologia/corpo-sistema-integrado.html), com diagrama, box de números, box "Mito ou fato" e 15 referências
- Foto do topo do index: saiu do círculo e passou a usar recorte sem fundo (img/manuela-recorte.webp, com PNG de reserva), com esfumado oval nos ombros, diretamente sobre as manchas coloridas

## 2026-09-28 (Fisiologia: Mito ou fato)
### Adicionado
- Texto "Ácido lático: como um combustível do corpo virou vilão da dor muscular" (fisiologia/acido-latico-dor-muscular.html), novo tema "Mito ou fato" em fisiologia.html, 12 referências
- Link para o novo texto no box de mitos e no "Leia também" de corpo-sistema-integrado.html

## 2026-09-28 (index)
### Alterado
- Topo do index sem foto, nome e bio: título, parágrafo voltado ao leitor e linha discreta de autoria com link para o novo bloco
- Novo bloco "Quem escreve" no fim do index (#quem-escreve), com foto recortada, nome, qualificação, bio e botões Lattes e Trajetória acadêmica

## 2026-09-28 (TCC)
### Adicionado
- Versão de divulgação do TCC da Manu: artigos/excesso-peso-criancas-porto-velho.html, com dados recalculados, comparação corrigida com a referência da OMS, tabelas e nota de revisão
- Novo tema "Infância" no index (cor --c-inf), estilo global de tabelas (.data-table)
- Link para o texto no box "Marcos da trajetória"

## 2026-09-29 (Fisiologia: Fundamentos)
### Adicionado
- Texto "O organismo em movimento: como o estresse do exercício se transforma em adaptação" (fisiologia/organismo-em-movimento.html): homeostase, estresse fisiológico, adaptação, fadiga × dano × recuperação, overreaching e overtraining; diagrama do ciclo do treino, tabela comparativa, box "Mito ou fato" e 16 referências
- Links "Leia também" nos dois textos anteriores de Fisiologia

- Texto "Energia para o exercício: como o músculo produz ATP do primeiro segundo à última hora" (fisiologia/energia-para-o-exercicio.html): ATP, fosfagênio, glicólise, oxidativo, aeróbio × anaeróbio e lactato; gráfico de contribuição por duração (Gastin e Suppiah, 2026), tabela dos três sistemas, box "Mito ou fato", 8 referências
