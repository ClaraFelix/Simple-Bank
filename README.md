# Projeto Simple Bank
Teste para desenvolvedor Júnior. Elaboração de uma Single Page, desenvolvida para um Open Banking, contendo register, login, extrato e saldos.

## Download do projeto

Faça o clone do projeto e crie o ambiente virtual:

```bash
$ git clone https://github.com/ClaraFelix/Simple-Bank.git
$ cd simpples
$ npm install typescript -D
```

## Executando o projeto

Ative o ambiente virtual.

```bash
$ npx nodemon
```

Depois acessa: http://localhost:5000/

## Solução do teste 

A aplicação foi desenvolvida em TypeScript, HTML e CSS; em conjunto com as ferramentas nodeJs, Handlebars, MongoDB, mongoose e express.
Foi elaborado um layout para o usuário cadastrar-se na Api do Simple Bank, e após a realização do cadastro o usuário poderá efetuar o login (com e-mail e senha). 
Com o e-mail e senha inseridos na tela de login, o usuário é direcionado a sua tela de extrato, contendo suas informações inseridas no cadastro (agência e conta), juntamente com seus saques e depósitos. As informações de saques e depósitos deverão serem fornecidas diretamente do banco. 
O foco da API é cadastrar os já então clientes do Simple Bank, para terem acesso as suas contas. 
Na tela de extrato, o usuário poderá consultar seu saldo através de um botão que o redirecionará para outra tela, contendo seu nome, agência, número da conta e o saldo.

Os pontos positivos do projeto foram a utilização da tecnologia do MongoDB para melhor modelagem dos dados, e a utilização do handlebars para objeto de entrada para gerar o HTML.

Os pontos negativos estão na estrutura da API, onde a validação de dados foi pouco trabalhada, podendo ser utilizado o passport para realizar estas validações. O layout também poderia ser melhorado, utilizando o framework react e seus componentes. Não foram realizados os testes unitários por camada.

## Documentação e arquitetura

A linguagem utilizada para o desenvolvimento da API foi o TypeScript. O TypeScript é uma linguagem de código aberto que se baseia em JavaScript, uma das ferramentas mais usadas do mundo, adicionando definições de tipo estático.
Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente.

O Handlebars utilizado no teste é uma linguagem simples de modelagem .Usa um modelo e um objeto de entrada para gerar HTML ou outros formatos de texto. Os modelos de barras de guiador parecem texto normal com expressões de barras de guia incorporadas. Atua como processador de templates que gera a página HTML dinamicamente.

O banco de dados utilizado na API foi o MongoDB. É um banco de dados de documentos, o que significa que ele armazena dados em documentos do tipo JSON.

Como teste, foi utilizado a ferramenta nodemon, que ajuda a desenvolver aplicativos baseados em node.js, reiniciando automaticamente o aplicativo quando mudanças de arquivo no diretório são detectadas.

Foi utilizado o Mongoose, que é um módulo do NodeJS desenvolvido para conectar-se ao MongoDB, baseado em esquemas para modelar os dados do aplicativo. Ele inclui built-in tipo de casting, validação, construção de consulta, ganchos de lógica de negócios, dentre outras coisas.

O Express facilita a criação de aplicações utilizando o Node em conjunto com o JavaScript, tornando este ecossistema ainda mais poderoso.

Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

