/* ==========================================================================
   Notas de Pesquisa: dados do mapa do site
   --------------------------------------------------------------------------
   Este arquivo é a fonte única de toda a estrutura do site. Ele alimenta:
     1. o mapa completo na página inicial;
     2. a trilha de localização ("Início › Parte › Tema") no topo de cada página;
     3. os menus suspensos (ex.: Fundamentos, na Fisiologia).

   Ao publicar um texto novo, acrescente um item { titulo, url } no tema
   correspondente. Todos os mapas se atualizam juntos.

   Campos:
     titulo    nome exibido
     pagina    página principal de cada parte do site
     ancora    endereço da seção do tema na página de listagem
     cor       cor do tema (a mesma do botão e do cabeçalho da seção)
     unidadeEntradas  nome dos itens que apontam para um trecho de página
                      (ex.: "mitos no catálogo"), usado na contagem do mapa
     menu      true = o tema ganha menu suspenso no menu de atalho
     subgrupos divisões internas de um tema (aparecem no menu suspenso)
     itens     textos do tema; url relativa à raiz do site
   ========================================================================== */

var SITE_MAPA = [
  {
    "id": "artigos",
    "titulo": "Artigos",
    "pagina": "index.html#artigos",
    "cor": "#2f4a3e",
    "descricao": "A pesquisa da Manuela, como autora ou coautora, traduzida em linguagem acessível. É a origem do site.",
    "temas": [
      {
        "titulo": "Exercício Físico",
        "ancora": "index.html#tema-ex",
        "cor": "#1f8f74",
        "itens": [
          {
            "titulo": "Motivos da desistência da prática de exercícios físicos nas academias de Porto Velho",
            "url": "artigos/desistencia-musculacao.html"
          },
          {
            "titulo": "Motivos de adesão e permanência no treinamento de força: um estudo de caso em um centro universitário de práticas esportivas na região Norte",
            "url": "artigos/treinamento-forca-servidor-universitario.html"
          }
        ]
      },
      {
        "titulo": "Educação Física",
        "ancora": "index.html#tema-ef",
        "cor": "#e2632f",
        "itens": [
          {
            "titulo": "Aula de educação física sem jogar bola? Impactos da pandemia na metodologia das aulas e na vida dos professores",
            "url": "artigos/aula-sem-jogar-bola.html"
          }
        ]
      },
      {
        "titulo": "Ensino Superior",
        "ancora": "index.html#tema-es",
        "cor": "#4c5fd0",
        "itens": [
          {
            "titulo": "Educação Física no Ensino Superior: impactos da Covid-19 na percepção dos gestores",
            "url": "artigos/impactos-covid-gestores.html"
          },
          {
            "titulo": "Precarização do ensino superior: papel do docente no ensino, pesquisa e extensão",
            "url": "artigos/precarizacao-ensino-superior.html"
          }
        ]
      },
      {
        "titulo": "Saúde Mental",
        "ancora": "index.html#tema-sm",
        "cor": "#8452c9",
        "itens": [
          {
            "titulo": "Contribuição da atividade física na melhora da saúde mental em estudantes do ensino superior",
            "url": "artigos/atividade-fisica-saude-mental.html"
          }
        ]
      },
      {
        "titulo": "Formação de Professores",
        "ancora": "index.html#tema-fp",
        "cor": "#b9791e",
        "itens": [
          {
            "titulo": "Planejamento das aulas de Educação Física na perspectiva dos acadêmicos do estágio curricular supervisionado",
            "url": "artigos/planejamento-aulas-estagio.html"
          }
        ]
      },
      {
        "titulo": "Envelhecimento",
        "ancora": "index.html#tema-env",
        "cor": "#c15c78",
        "itens": [
          {
            "titulo": "Motivos e barreiras que idosos enfrentam para adesão à prática de atividades físicas",
            "url": "artigos/barreiras-idosos-atividade-fisica.html"
          }
        ]
      },
      {
        "titulo": "Gestação",
        "ancora": "index.html#tema-ges",
        "cor": "#c94f8c",
        "itens": [
          {
            "titulo": "Os benefícios do treinamento resistido para gestante",
            "url": "artigos/treinamento-resistido-gestante.html"
          }
        ]
      },
      {
        "titulo": "Infância",
        "ancora": "index.html#tema-inf",
        "cor": "#6a8f1f",
        "itens": [
          {
            "titulo": "Excesso de peso em crianças de seis a nove anos em Porto Velho: o que mostram 800 medidas feitas nas escolas",
            "url": "artigos/excesso-peso-criancas-porto-velho.html"
          }
        ]
      }
    ]
  },
  {
    "id": "fisiologia",
    "titulo": "Fisiologia do Exercício",
    "pagina": "fisiologia.html",
    "cor": "#0e7490",
    "descricao": "Como o corpo responde e se adapta ao movimento. É a base que sustenta os mitos, os guias e boa parte dos artigos.",
    "temas": [
      {
        "titulo": "Fundamentos",
        "ancora": "fisiologia.html#tema-fundamentos",
        "cor": "#0e7490",
        "menu": true,
        "subgrupos": [
          {
            "titulo": "Visão integrada",
            "itens": [
              {
                "titulo": "O corpo em exercício funciona como um sistema integrado",
                "url": "fisiologia/corpo-sistema-integrado.html"
              },
              {
                "titulo": "O organismo em movimento: como o estresse do exercício se transforma em adaptação",
                "url": "fisiologia/organismo-em-movimento.html"
              }
            ]
          },
          {
            "titulo": "Metabolismo energético",
            "itens": [
              {
                "titulo": "Energia para o exercício: como o músculo produz ATP do primeiro segundo à última hora",
                "url": "fisiologia/energia-para-o-exercicio.html"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mitos",
    "titulo": "Mitos",
    "pagina": "mitos.html",
    "cor": "#a0522d",
    "unidadeEntradas": "mitos no catálogo",
    "descricao": "Crenças enraizadas sobre exercício e corpo, confrontadas com o que a pesquisa mostra, sempre com o fato em primeiro lugar.",
    "temas": [
      {
        "titulo": "Textos completos",
        "ancora": "mitos.html#tema-textos",
        "cor": "#a0522d",
        "itens": [
          {
            "titulo": "Ácido lático: como um combustível do corpo virou vilão da dor muscular",
            "url": "fisiologia/acido-latico-dor-muscular.html"
          },
          {
            "titulo": "Mitos comuns sobre exercício físico, o que a evidência realmente diz",
            "url": "guias/mitos-exercicio-fisico.html"
          }
        ]
      },
      {
        "titulo": "Metabolismo e energia",
        "ancora": "mitos.html#tema-metabolismo",
        "cor": "#8f7a1a",
        "itens": [
          {
            "titulo": "O ácido lático causa a dor do dia seguinte",
            "url": "mitos.html#mito-acido-latico-dor"
          },
          {
            "titulo": "O lactato é um resíduo do metabolismo",
            "url": "mitos.html#mito-lactato-residuo"
          },
          {
            "titulo": "Lactato no sangue é sinal de falta de oxigênio",
            "url": "mitos.html#mito-lactato-oxigenio"
          },
          {
            "titulo": "Os sistemas de energia funcionam um depois do outro",
            "url": "mitos.html#mito-sistemas-energia"
          },
          {
            "titulo": "Um tiro de 30 segundos é totalmente anaeróbio",
            "url": "mitos.html#mito-tiro-anaerobio"
          }
        ]
      },
      {
        "titulo": "Emagrecimento",
        "ancora": "mitos.html#tema-emagrecimento",
        "cor": "#2f7fb5",
        "itens": [
          {
            "titulo": "Treinar na “zona de queima de gordura” emagrece mais",
            "url": "mitos.html#mito-zona-queima"
          },
          {
            "titulo": "Suar mais significa queimar mais gordura",
            "url": "mitos.html#mito-suor"
          },
          {
            "titulo": "Treinar em jejum queima mais gordura",
            "url": "mitos.html#mito-jejum"
          }
        ]
      },
      {
        "titulo": "Treino e adaptação",
        "ancora": "mitos.html#tema-treino-adaptacao",
        "cor": "#c0392b",
        "itens": [
          {
            "titulo": "Sem dor, sem ganho",
            "url": "mitos.html#mito-sem-dor"
          },
          {
            "titulo": "Quanto mais treino, melhor",
            "url": "mitos.html#mito-mais-treino"
          },
          {
            "titulo": "Antioxidantes em doses altas sempre ajudam",
            "url": "mitos.html#mito-antioxidantes"
          },
          {
            "titulo": "Algumas pessoas simplesmente não respondem ao treino",
            "url": "mitos.html#mito-nao-respondedores"
          },
          {
            "titulo": "Musculação deixa o corpo feminino masculinizado",
            "url": "mitos.html#mito-masculinizar"
          }
        ]
      },
      {
        "titulo": "O corpo como sistema",
        "ancora": "mitos.html#tema-corpo-sistema",
        "cor": "#37474f",
        "itens": [
          {
            "titulo": "Cada sistema do corpo trabalha isolado",
            "url": "mitos.html#mito-sistemas-isolados"
          },
          {
            "titulo": "A fadiga acontece só no músculo",
            "url": "mitos.html#mito-fadiga-musculo"
          }
        ]
      }
    ]
  },
  {
    "id": "guias",
    "titulo": "Guias de Condicionamento Físico",
    "pagina": "guias.html",
    "cor": "#b5443b",
    "descricao": "Orientação prática, apoiada nas diretrizes da área, para começar a treinar ou treinar melhor.",
    "temas": [
      {
        "titulo": "Treino",
        "ancora": "guias.html#tema-treino",
        "cor": "#4a7c59",
        "itens": [
          {
            "titulo": "Treinamento de força para iniciantes: por onde começar",
            "url": "guias/treinamento-forca-iniciantes.html"
          },
          {
            "titulo": "Treino cardiorrespiratório para iniciantes: por onde começar",
            "url": "guias/treino-cardiorrespiratorio-iniciantes.html"
          },
          {
            "titulo": "Treinamento multicomponente para pessoas idosas: o que diz a ciência",
            "url": "guias/treinamento-multicomponente-idosos.html"
          },
          {
            "titulo": "HYROX: o que a ciência já sabe sobre esse novo formato de treino",
            "url": "guias/hyrox-o-que-diz-a-ciencia.html"
          }
        ]
      },
      {
        "titulo": "Aptidão física",
        "ancora": "guias.html#tema-aptidao",
        "cor": "#5c6f8a",
        "itens": [
          {
            "titulo": "Como avaliar sua própria aptidão física, sem equipamento de laboratório",
            "url": "guias/avaliacao-fisica-em-casa.html"
          }
        ]
      },
      {
        "titulo": "Mobilidade",
        "ancora": "guias.html#tema-mobilidade",
        "cor": "#7c6a9c",
        "itens": [
          {
            "titulo": "Mobilidade e flexibilidade: o componente esquecido do condicionamento físico",
            "url": "guias/mobilidade-flexibilidade.html"
          },
          {
            "titulo": "Pilates: o que as evidências mostram sobre seus benefícios reais",
            "url": "guias/pilates-evidencias-cientificas.html"
          }
        ]
      },
      {
        "titulo": "Vestuário",
        "ancora": "guias.html#tema-vestuario",
        "cor": "#c78a3d",
        "itens": [
          {
            "titulo": "Vestuário e proteção solar no exercício ao ar livre",
            "url": "guias/vestuario-protecao-solar.html"
          }
        ]
      },
      {
        "titulo": "Cuidados",
        "ancora": "guias.html#tema-cuidados",
        "cor": "#6b8e9e",
        "itens": [
          {
            "titulo": "Hidratação para o treino: o que diz a ciência",
            "url": "guias/hidratacao-treino.html"
          },
          {
            "titulo": "Sono e recuperação: o pilar invisível do treino",
            "url": "guias/sono-recuperacao.html"
          },
          {
            "titulo": "Exercício em calor e frio: cuidados baseados em evidência",
            "url": "guias/exercicio-calor-frio.html"
          },
          {
            "titulo": "Como usar um relógio de frequência cardíaca corretamente",
            "url": "guias/relogio-frequencia-cardiaca.html"
          },
          {
            "titulo": "Recuperação e terapias regenerativas: o que tem evidência e o que é promessa",
            "url": "guias/recuperacao-terapias-regenerativas.html"
          },
          {
            "titulo": "Manobra de Valsalva no treino de força: o que a evidência diz",
            "url": "guias/manobra-valsalva-treino-forca.html"
          }
        ]
      }
    ]
  },
  {
    "id": "tendencias",
    "titulo": "Últimas tendências",
    "pagina": "tendencias.html",
    "cor": "#2b6f8f",
    "descricao": "Congressos, mercado, grandes eventos, políticas públicas e análises: a área em movimento.",
    "temas": [
      {
        "titulo": "Congressos científicos",
        "ancora": "tendencias.html#tema-congressos",
        "cor": "#4a5d8f",
        "itens": [
          {
            "titulo": "ACSM Annual Meeting 2026: tecnologia e atividade física em pauta",
            "url": "artigos/acsm-annual-meeting-2026.html"
          },
          {
            "titulo": "Congresso FIEPS: atualização e internacionalização em Foz do Iguaçu",
            "url": "artigos/congresso-fieps.html"
          },
          {
            "titulo": "CBAFS: o congresso mais tradicional de atividade física e saúde do Brasil",
            "url": "artigos/cbafs-atividade-fisica-saude.html"
          },
          {
            "titulo": "ECSS 2026: o maior congresso europeu de ciência do esporte",
            "url": "artigos/ecss-2026-lausanne.html"
          }
        ]
      },
      {
        "titulo": "Mercado fitness",
        "ancora": "tendencias.html#tema-mercado",
        "cor": "#b5843b",
        "itens": [
          {
            "titulo": "ENAF: o maior encontro de mercado fitness do Brasil",
            "url": "artigos/enaf-mercado-fitness.html"
          },
          {
            "titulo": "Corrida em trilha: o Brasil no radar de um mercado de US$ 20 bilhões",
            "url": "artigos/corrida-trilha-brasil-2026.html"
          }
        ]
      },
      {
        "titulo": "Grandes eventos",
        "ancora": "tendencias.html#tema-eventos",
        "cor": "#a13d5c",
        "itens": [
          {
            "titulo": "Milano-Cortina 2026: a ciência por trás dos Jogos de Inverno",
            "url": "artigos/milano-cortina-2026-ciencia.html"
          }
        ]
      },
      {
        "titulo": "Políticas públicas",
        "ancora": "tendencias.html#tema-politicas",
        "cor": "#3d7a5c",
        "itens": [
          {
            "titulo": "Programa Academia da Saúde é reformulado após 15 anos",
            "url": "artigos/academia-da-saude-reformulacao-2026.html"
          }
        ]
      },
      {
        "titulo": "Opinião",
        "ancora": "tendencias.html#tema-opiniao",
        "cor": "#6e4557",
        "itens": [
          {
            "titulo": "Escolhido por último: como a exclusão nas aulas de Educação Física pode acompanhar a pessoa até a vida adulta",
            "url": "artigos/escolha-de-times-educacao-fisica.html"
          },
          {
            "titulo": "Orientação técnica no uso dos aparelhos: o que toda academia deveria garantir",
            "url": "artigos/orientacao-tecnica-academias.html"
          },
          {
            "titulo": "Buscamos dieta, não exercício, para emagrecer, e isso tem um custo",
            "url": "artigos/analise-dieta-versus-exercicio-emagrecimento.html"
          },
          {
            "titulo": "Menos da metade dos brasileiros se exercita o suficiente",
            "url": "artigos/analise-adesao-atividade-fisica-genero.html"
          }
        ]
      }
    ]
  },
  {
    "id": "quem-escreve",
    "titulo": "Quem escreve",
    "pagina": "sobre.html",
    "cor": "#8452c9",
    "descricao": "A autora do site e o percurso acadêmico que dá sustentação ao conteúdo.",
    "temas": [
      {
        "titulo": "A autora",
        "ancora": "sobre.html",
        "cor": "#8452c9",
        "itens": [
          {
            "titulo": "Sobre",
            "url": "sobre.html"
          },
          {
            "titulo": "Trajetória acadêmica",
            "url": "trajetoria-academica.html"
          }
        ]
      }
    ]
  }
];
