# Cifra de César
Projeto apresentado à Laboratória-Brasil. A partir da situação problema proposta, criar uma aplicação que permita criptografar e descriptografar mensagens.

![](src/web.jpeg)

## Índice

* [1. Prefácio](#1-prefácio)
* [2. O problema](#)
* [3. Solução](#)
* [4. Interface do usuário](#)  
* [5. Considerações técnicas](#7-considerações-técnicas)


****
<!--## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.-->

## 1. Prefácio

No âmbito institucional e corporativo, Compliance é o conjunto de disciplinas a fim de cumprir e se fazer cumprir as normas legais e regulamentares, as políticas e as diretrizes estabelecidas para o negócio e para as atividades de uma instituição ou empresa, bem como evitar, detectar e tratar quaisquer desvios ou inconformidades que possam ocorrer.

## 2. O problema

A empresa Lorem Ipsum, inseriu o programa Compliance, onde seus colaboradores tem a orientação de notificar os eventos adversos e não-conformes. Em contrapartida, houveram exposições de profissionais que relataram eventos no Canal.

## 3. Solução

Após a análise do problema, para fins de evitar constrangimentos, manter o bem-estar e preservar a identidade do profissional que utilizou o meio, observou-se a necessidade de uma cifra individual.
Foi criada uma aplicação web com a Criptografia de César como ferramenta para garantir a comunicação segura.

<!--O que eu tenho que fazer exatamente? Neste projeto você criará a primeira
aplicação web do _bootcamp_. Nela o usuário poderá cifrar e decrifrar um texto
indicando a chave de deslocamento (_offset_).

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

* Mensagens secretas para alguma pessoa.
* Ferramenta de mensagens internas de uma organização em uma zona de conflito.
* Cifrar cartões de crédito.
* Criar senhas seguras para email.-->

<!--## 3. Objetivos de aprendizagem

Neste projeto foi construído uma aplicação web que interaje com o usuário através do navegador, .

Neste projeto você aprenderá a construir uma aplicação web que interaja com o
usuário através do navegador e a lógica para essa interação. Em outras palavras,
você aprenderá:

* Desenhar elementos de formulário em uma tela usando **HTML** e **CSS**.
* Permitir o usuário interagir com elementos do DOM e fazer com que a aplicação
  responda (cifrar/decifrar) quando ocorrer os **eventos de DOM**.
* Manipular _strings_ (cadeias de texto).
* Usar **controle de fluxo** (laços, condicionais, ...).
* Atualizar a tela com os resultados (**manipular o DOM**).
* **Implementar funções** dada uma descrição de comportamento.
* Verificar a sua implementação com **provas unitárias**.
* Entender as **necessidades do usuário** e propor soluções.
* Organizar o seu tempo e priorizar tarefas em um ambiente de **alta
  incerteza**.-->

<!--## 4. Considerações gerais

* Este projeto deve ser resolvido individualmente.
* O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.
* Tempo para completar: tempo referência 2 semanas.

## 5. Critérios de aceitação mínimos do projeto

Use o alfabeto simples (somente maiúsculas e sem ç):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definição do produto

No README.md, escreva como você definiu seu usuário e qual foi o processo para
definir o produto final a nível de expriência e interface.

* Quem são os principais usuário do produto?
* Quais são os objetivos do usuário em relação com o produto?
* Como você acredita que o produto está resolvendo os problemas do usuário? -->

## 4. Interface do usuário (UI)

A interface deve permitir ao usuário:

* Após receber do seu gestor a chave(_offset_) indicando quantas posições de deslocamento de caracteres deseja para cifrar;
* Inserir seu último sobrenome no primeiro campo _"Insira o nome / criptografia"_;
* Quando necessário, o Gestor, utilizará o Botão _descriptografar_, com a mesma chave que enviou a seu(s) colaborador(es), afim de contatar o relator para apuração dos dados notificados no Canal Compliance;
* Esta chave poderá ser alterada pelo Gestor com regularidade, obedecendo o Protocolo de Segurança Institucional.

<!--A interface permite ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.-->

<!--### Scripts / Arquivos

* `README.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve estar
  _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve conter
  dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se você **terminou** tudo
e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar
mais sobre os objetivos de aprendizagem do projeto.

A descrição geral deste projeto não menciona o que aconteceria com letras
minúsculas ou outros caracteres (como espaço, pontuação, ç, ...). O
_boilerplate_ inclui alguns testes (comentados) que vocês podem usar como ponto
de partida para implementar o suporte para esses casos.

Também não foi mencionado o que aconteceria com _offset_ negativo. Como parte da
hacker edition te convidamos a explorar esse caso sozinha.-->

## 5. Considerações técnicas

A lógica do projeto foi baseada na Cifra de César - uma das técnicas mais antigas para codificar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituída por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto, criando assim mensagens criptografadas. Em uma troca de 1 posição, A se tornaria B, B se tornaria C e assim consecutivamente.
O projeto foi implementado inteiramente em JavaScript(ES6), HTML5 e CSS.

![](src/ceasar.png)

![](src/diagrama.jpeg)


<!--Você não deve usar a _pseudo-variable_ `this`.

Os testes unitários devem cubrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ inclui testes de exemplo, como ponto de partida.

Para começar esse projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida assim
como toda a configuração de dependências e testes de exemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomandações padrão tanto para o
`eslint` quanto `htmlhint`.

## 9. Guias, dicas e leituras complementares

### Primeiros passos

1. Antes de mais nada, se assegure de ter um bom :pencil: editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um :shell: UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like", como
   GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa Windows você pode usar o [Git
   bash](https://git-scm.com/download/win), embora seja recomendado que você
   teste :penguin: GNU/Linux.
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   _mentores_ compartilharão com você um _link_ para um repositório privado e te
   darão acesso a este repositório.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   o _fork_ para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os :traffic_light: testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! :rocket:

### Recursos extras

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática usada
pela Cifra de César e algumas coisas mais que deve saber para resolver o seu
projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de
César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Desenho da experiência do usuário (User Experience Design):

* Ideação
* Prototipagem
* Teste e iteração

Desenvolvimento Front-end:

* Valores
* Tipos
* Variáveis
* Controle de fluxo
* Testes unitários
* [Aprenda mais sobre
  `charCodeAt()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [Aprenda mais sobre
  `String.fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [Aprenda mais sobre
  `ASCII`](https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm)
* [Documentação do NPM](https://docs.npmjs.com/)

Ferramentas:

* GitHub y GitHub Pages.

Organização do trabalho:

* [Agilidade](https://www.youtube.com/watch?v=vozsjbh4noU)
* [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=IKZHPjCQ2m8)
* [Scrum em detalhes](https://www.youtube.com/watch?v=mt2hM4yrPn0). Não
  esperamos que você faça tudo isso neste projeto. Iremos aprofundando nesses
  conceitos ao longo do _bootcamp_.
* [Guia em espanhol para a
  cifra](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)

## 10. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [ ] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [ ] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [ ] Usar VanillaJS.
* [ ] **Não** usar `this`.
* [ ] Implementar `cipher.encode`.
* [ ] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [ ] Passar as provas unitárias.
* [ ] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [ ] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [ ] Interface que permita escrever um texto para ser cifrado.
* [ ] Interface que mostre o resultado da cifra corretamente.
* [ ] Interface que permita escrever um texto para ser decifrado.
* [ ] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.-->
