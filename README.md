# Watson Text to Speech app

Este repositório contém aplicação desenvolvida por meio do Express e React js para conversão de texto em voz com a API Text to Speech do Watson. 

Utilização
-------------

Após clonar o repositório siga os passos a seguir para conseguir executar a aplicação:

1. Realizar a instalação das dependencias com o comando `npm install` nas pastas server e webapp.
2. Adicionar as informações do banco de dados "development" pelo arquivo database.json no diretório server/config
3. Com o diretório server selecionado no terminal, execute o comando `npx sequelize db:create` para criar o banco de dados.
4. Com o diretório server selecionado no terminal, execute o comando `npx sequelize db:migrate` para criar a tabela utilizada pela aplicação.
5. Com o diretório server selecionado no terminal, execute o comando `npx ts-node server.ts`  para que o servidor seja ativo.
6. Com o diretório **webapp** selecionado no terminal, execute o comando `npm start` para abrir a aplicação.
7. Após isso, será possível acessar a página no navegador pela url http://localhost:3000
