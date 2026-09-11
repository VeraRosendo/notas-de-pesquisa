# Blog da Manu — Pesquisa

Site estático simples (HTML/CSS puro, sem build), pronto para publicar no GitHub + Vercel.

## Estrutura

```
index.html              → página inicial
artigos/*.html           → cada artigo
style.css                → estilo compartilhado
```

## Como publicar (GitHub + Vercel, sem domínio .br)

### 1. Criar o repositório no GitHub
1. Acesse github.com e crie um novo repositório (ex: `manu-blog`), público ou privado.
2. Envie estes arquivos para o repositório. O jeito mais simples, sem usar linha de comando:
   - Na página do repositório vazio, clique em "uploading an existing file"
   - Arraste a pasta `manu-blog` inteira (ou os arquivos e a pasta `artigos`)
   - Confirme o commit

### 2. Conectar ao Vercel
1. Acesse vercel.com e faça login (pode usar a conta do GitHub)
2. Clique em "Add New" → "Project"
3. Selecione o repositório `manu-blog`
4. O Vercel detecta automaticamente que é um site estático — não precisa mudar nenhuma configuração de build
5. Clique em "Deploy"

Em cerca de 1 minuto o site estará no ar em um endereço como `manu-blog.vercel.app`. Esse domínio gratuito do Vercel não usa `.br`, como combinado.

### 3. Publicar novos artigos depois
Para adicionar um novo artigo:
1. Duplique um dos arquivos em `artigos/` como modelo
2. Ajuste título, autoria, DOI e texto
3. Adicione uma nova entrada em `index.html`, na seção `<section class="index">`
4. Envie os arquivos atualizados para o GitHub (upload direto ou `git push`) — o Vercel republica o site automaticamente a cada atualização do repositório
