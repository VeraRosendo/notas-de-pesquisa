/* ==========================================================================
   Notas de Pesquisa: mapa do site, trilha de localização,
   mapa da página ("Nesta página") e menus suspensos.
   Os dados vêm de js/mapa-dados.js (carregado antes deste arquivo).
   ========================================================================== */
(function () {
  'use strict';

  if (typeof SITE_MAPA === 'undefined') return;

  /* ---------- Endereços ---------- */
  // A raiz do site é a pasta acima de /js/, onde este arquivo está.
  var script = document.currentScript || document.querySelector('script[src*="mapa.js"]');
  var RAIZ = new URL('../', script.src);

  function link(caminho) {
    return new URL(caminho, RAIZ).href;
  }

  function caminhoAtual() {
    var p = decodeURIComponent(location.href.split('#')[0].split('?')[0]);
    var r = decodeURIComponent(RAIZ.href);
    var rel = p.indexOf(r) === 0 ? p.slice(r.length) : p.replace(/^.*\//, '');
    return rel === '' ? 'index.html' : rel;
  }

  function semAncora(u) { return u.split('#')[0]; }

  function el(tag, attrs, filhos) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'texto') n.textContent = attrs[k];
        else if (k === 'estilo') n.setAttribute('style', attrs[k]);
        else n.setAttribute(k, attrs[k]);
      });
    }
    (filhos || []).forEach(function (f) { if (f) n.appendChild(f); });
    return n;
  }

  function itensDoTema(tema) {
    if (tema.itens) return tema.itens;
    var todos = [];
    (tema.subgrupos || []).forEach(function (g) { todos = todos.concat(g.itens); });
    return todos;
  }

  function contar(parte) {
    var n = 0;
    parte.temas.forEach(function (t) { n += itensDoTema(t).length; });
    return n;
  }

  // Itens que apontam para um trecho de página (ex.: um mito do catálogo)
  function contarEntradas(parte) {
    var n = 0;
    parte.temas.forEach(function (t) {
      itensDoTema(t).forEach(function (it) { if (it.url.indexOf('#') > -1) n++; });
    });
    return n;
  }

  /* ---------- 1. Mapa completo (página inicial) ---------- */
  function montarMapaCompleto(alvo) {
    var linha = el('ol', { class: 'mapa-linha' });

    SITE_MAPA.forEach(function (parte, i) {
      var nTemas = parte.temas.length;
      var nItens = contar(parte);
      var nEntradas = contarEntradas(parte);
      var nTextos = nItens - nEntradas;

      var resumo;
      if (nEntradas > 0 && parte.unidadeEntradas) {
        resumo = 'Ver os ' + nTemas + ' temas: ' + nTextos + (nTextos === 1 ? ' texto' : ' textos') +
          ' e ' + nEntradas + ' ' + parte.unidadeEntradas;
      } else {
        resumo = 'Ver ' + (nTemas > 1 ? 'os ' + nTemas + ' temas e ' : '') + (nItens === 1 ? 'o texto' : 'os ' + nItens + ' textos');
      }

      var detalhes = el('details', { class: 'mapa-detalhes' });
      detalhes.appendChild(el('summary', { texto: resumo }));

      var grade = el('div', { class: 'mapa-temas' });
      parte.temas.forEach(function (tema) {
        var bloco = el('div', { class: 'mapa-tema', estilo: '--cor-tema:' + tema.cor });
        bloco.appendChild(el('a', { class: 'mapa-tema-titulo', href: link(tema.ancora), texto: tema.titulo }));

        var grupos = tema.subgrupos || [{ itens: tema.itens }];
        grupos.forEach(function (g) {
          if (g.titulo) bloco.appendChild(el('p', { class: 'mapa-subgrupo', texto: g.titulo }));
          var lista = el('ul');
          g.itens.forEach(function (it) {
            lista.appendChild(el('li', null, [el('a', { href: link(it.url), texto: it.titulo })]));
          });
          bloco.appendChild(lista);
        });
        grade.appendChild(bloco);
      });
      detalhes.appendChild(grade);

      var estacao = el('li', { class: 'mapa-estacao', id: 'mapa-' + parte.id, estilo: '--cor:' + parte.cor }, [
        el('span', { class: 'mapa-num', 'aria-hidden': 'true', texto: String(i + 1) }),
        el('div', { class: 'mapa-corpo' }, [
          el('h3', { class: 'mapa-titulo' }, [el('a', { href: link(parte.pagina), texto: parte.titulo })]),
          el('p', { class: 'mapa-desc', texto: parte.descricao }),
          detalhes
        ])
      ]);
      linha.appendChild(estacao);
    });

    alvo.innerHTML = '';
    alvo.appendChild(linha);
  }

  /* ---------- 2. Trilha de localização ---------- */
  function localizar(caminho) {
    for (var i = 0; i < SITE_MAPA.length; i++) {
      var parte = SITE_MAPA[i];
      if (semAncora(parte.pagina) === caminho && caminho !== 'index.html') {
        return { parte: parte };
      }
      for (var j = 0; j < parte.temas.length; j++) {
        var tema = parte.temas[j];
        var itens = itensDoTema(tema);
        for (var k = 0; k < itens.length; k++) {
          if (itens[k].url.indexOf('#') === -1 && itens[k].url === caminho) {
            return { parte: parte, tema: tema, item: itens[k] };
          }
        }
      }
    }
    return null;
  }

  function montarTrilha() {
    var caminho = caminhoAtual();
    if (caminho === 'index.html') return;
    var achado = localizar(caminho);
    if (!achado) return;

    var ol = el('ol');
    function passo(texto, href) {
      var li = el('li');
      if (href) li.appendChild(el('a', { href: href, texto: texto }));
      else li.appendChild(el('span', { 'aria-current': 'page', texto: texto }));
      ol.appendChild(li);
    }

    passo('Início', link('index.html'));
    if (achado.item) {
      passo(achado.parte.titulo, link(achado.parte.pagina));
      if (semAncora(achado.tema.ancora) !== semAncora(achado.parte.pagina) || achado.tema.ancora.indexOf('#') > -1) {
        passo(achado.tema.titulo, link(achado.tema.ancora));
      }
      // O título da página já aparece logo abaixo, no h1; a trilha termina no tema.
    } else {
      passo(achado.parte.titulo, null);
    }

    var nav = el('nav', { class: 'trilha', 'aria-label': 'Você está em' }, [ol]);
    var voltar = document.querySelector('.article-head .back-link');
    var cabeca = document.querySelector('.article-head');
    if (voltar) voltar.replaceWith(nav);
    else if (cabeca) cabeca.insertBefore(nav, cabeca.firstChild);
  }

  /* ---------- 3. Mapa da página ("Nesta página") ---------- */
  function slug(t) {
    return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
  }

  function montarMapaDaPagina() {
    if (document.querySelector('section.index')) return; // páginas de listagem já têm o menu de atalho
    var corpo = document.querySelector('.body-text');
    if (!corpo) return;

    var titulos = Array.prototype.filter.call(corpo.querySelectorAll('h3'), function (h) {
      return !h.closest('.info-box') && !h.closest('.see-also');
    });
    if (titulos.length < 3) return;

    var ol = el('ol');
    titulos.forEach(function (h) {
      if (!h.id) h.id = slug(h.textContent);
      ol.appendChild(el('li', null, [el('a', { href: '#' + h.id, texto: h.textContent.trim() })]));
    });

    var refs = corpo.querySelector('.full-paper');
    if (refs) {
      if (!refs.id) refs.id = 'referencias';
      ol.appendChild(el('li', { class: 'mapa-pagina-refs' }, [el('a', { href: '#' + refs.id, texto: 'Referências' })]));
    }

    var nav = el('nav', { class: 'mapa-pagina', 'aria-label': 'Nesta página' }, [
      el('p', { class: 'mapa-pagina-titulo', texto: 'Nesta página' }),
      ol
    ]);

    var abstract = document.querySelector('.abstract');
    if (abstract) abstract.appendChild(nav);
    else corpo.insertBefore(nav, corpo.firstChild);
  }

  /* ---------- 4. Menus suspensos no menu de atalho ---------- */
  function acharTema(chave) {
    var partes = chave.split(':');
    for (var i = 0; i < SITE_MAPA.length; i++) {
      if (SITE_MAPA[i].id !== partes[0]) continue;
      for (var j = 0; j < SITE_MAPA[i].temas.length; j++) {
        var t = SITE_MAPA[i].temas[j];
        if (t.ancora.split('#')[1] === 'tema-' + partes[1]) return t;
      }
    }
    return null;
  }

  var abertos = [];

  function fecharTodos(excepto) {
    abertos.forEach(function (m) {
      if (m === excepto) return;
      m.botao.setAttribute('aria-expanded', 'false');
      m.painel.hidden = true;
    });
  }

  function montarMenus() {
    var gatilhos = document.querySelectorAll('[data-menu]');
    Array.prototype.forEach.call(gatilhos, function (a, idx) {
      var tema = acharTema(a.getAttribute('data-menu'));
      if (!tema) return;

      var idPainel = 'menu-suspenso-' + idx;
      var botao = el('button', {
        type: 'button', class: a.className + ' qj-botao',
        'aria-expanded': 'false', 'aria-controls': idPainel,
        estilo: a.getAttribute('style') || ''
      });
      botao.appendChild(document.createTextNode(a.textContent.trim()));
      botao.appendChild(el('span', { class: 'qj-seta', 'aria-hidden': 'true' }));

      var painel = el('div', { class: 'qj-painel', id: idPainel });
      painel.hidden = true;
      painel.appendChild(el('a', { class: 'qj-todos', href: link(tema.ancora), texto: 'Ver todos em ' + tema.titulo }));

      var grupos = tema.subgrupos || [{ itens: tema.itens }];
      grupos.forEach(function (g) {
        if (g.titulo) painel.appendChild(el('p', { class: 'qj-grupo', texto: g.titulo }));
        var ul = el('ul');
        g.itens.forEach(function (it) {
          ul.appendChild(el('li', null, [el('a', { href: link(it.url), texto: it.titulo })]));
        });
        painel.appendChild(ul);
      });

      var caixa = el('div', { class: 'qj-suspenso' }, [botao, painel]);
      a.replaceWith(caixa);

      var menu = { botao: botao, painel: painel, caixa: caixa };
      abertos.push(menu);

      botao.addEventListener('click', function () {
        var aberto = botao.getAttribute('aria-expanded') === 'true';
        fecharTodos(menu);
        botao.setAttribute('aria-expanded', String(!aberto));
        painel.hidden = aberto;
      });
    });

    document.addEventListener('click', function (e) {
      abertos.forEach(function (m) {
        if (!m.caixa.contains(e.target)) {
          m.botao.setAttribute('aria-expanded', 'false');
          m.painel.hidden = true;
        }
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      abertos.forEach(function (m) {
        if (m.botao.getAttribute('aria-expanded') === 'true') {
          m.botao.setAttribute('aria-expanded', 'false');
          m.painel.hidden = true;
          m.botao.focus();
        }
      });
    });
  }

  /* ---------- Início ---------- */
  function iniciar() {
    var alvo = document.getElementById('mapa-site-linha');
    if (alvo) montarMapaCompleto(alvo);
    montarTrilha();
    montarMapaDaPagina();
    montarMenus();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
