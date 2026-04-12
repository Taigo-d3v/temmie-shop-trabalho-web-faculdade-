# Tem Shop — Projeto de Desenvolvimento de Software WEB

## Arquitetura e justificativa

Este projeto usa React com TypeScript e Vite para manter um fluxo leve de desenvolvimento e build rápido. A arquitetura busca separar responsabilidades em componentes claros e reutilizáveis:

- `App.tsx`: componente raiz. Gerencia o estado global da loja, a navegação por teclado e a ligação entre os componentes principais.
- `Dashboard`: componente local em `App.tsx` responsável por exibir o saldo atual de ouro (`G`) e a contagem de itens comprados.
- `TemmieDialog`: componente em `src/components/TemmieDialog.tsx` responsável por apresentar a imagem do Temmie e renderizar falas específicas de acordo com o último item comprado.
- `Shop` / item list: componente em `src/components/Shop.tsx` que mostra os produtos disponíveis e responde aos cliques de compra. Ele atua como a lista de itens do jogo.

A separação acima mantém o `App` como controlador do estado e as demais peças como elementos de exibição, aumentando a clareza e facilitando futuras extensões.

## Navegação por teclado

A navegação por teclado foi integrada via `useEffect` em `App.tsx`, escutando `keydown` no `window`:

- `ArrowDown` e `ArrowUp`: movem o foco entre os itens da lista incrementando ou decrementando `selectedIndex`.
- `Z`: dispara `handlePurchase` para o item atualmente focado, simulando a ação de compra.
- `X`: limpa o foco e faz com que nenhum item esteja selecionado.

Essa lógica é mantida em estado React, de modo que o componente é sempre renderizado de acordo com `selectedIndex` e o visual se atualiza automaticamente.

## Bootstrap e estilo do jogo

O Bootstrap via CDN foi usado para estruturar o layout responsivo com o sistema de grid:

- `main` ocupa 9 colunas em desktop e 12 em mobile.
- `aside` ocupa 3 colunas em desktop e 12 em mobile.

Por cima do Bootstrap, criamos um `styles.css` externo para forçar um estilo escuro, tipografia pixelada (`VT323`) e aparência inspirada em Undertale. Isso permite combinar a responsividade do Bootstrap com o estilo visual do jogo.

## Componentes principais

- `App.tsx`: controlador de fluxo. Mantém o estado do inventário e o índice selecionado.
- `Dashboard`: computa e mostra o saldo e quantidade de itens.
- `TemmieDialog`: renderiza a imagem do Temmie e adapta a fala conforme o item comprado.
- `Shop` (ItemList): lista os produtos, exibe o cursor de seleção e permite comprar itens.

## Conclusão

A arquitetura foi escolhida para manter o React como camada de estado e renderização, enquanto o Bootstrap cuida da estrutura responsiva. O componente `TemmieDialog` adiciona personalidade ao projeto sem misturar lógica de negócios, e a navegação por teclado foi integrada de forma reativa, preservando a experiência esperada para um jogo inspirado em Undertale.
