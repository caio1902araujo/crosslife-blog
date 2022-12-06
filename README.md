# Blog Crosslife Suzano
O blog da Crosslife é um projeto que será desenvolvido para web, voltado para divulgação da academia através de notícias sobre o mundo fitness, tambem vai ser utilizado para o trabalho de conclusão de curso da faculdade IMPACTA. Para ver o layout completo no figma é só clicar [aqui](https://www.figma.com/file/tctypXIdstFhG983czSxuY/Blog-crosslife?node-id=0%3A1)

![layout](/images/design-crosslife-blog.PNG)

## Blog
O blog foi seperada em várias páginas, onde cada uma apresenta um conteúdo diferente e atrativo, como:
* Home, onde tem o feed e as notícias mais lidas.
* Notícias separadas por categoria (saúde, receitas, fitness, esportes, academia e nutrição).
* Área de pesquisa de notícias.
* Área para ler a notícia completa
* Notícias separadas por autor.

## Tecnologias
Foram utilizados as seguintes tecnologias para o desenvolvimento:
* React
* React router dom
* Date fns

## Como executar o projeto
Antes de começar a preparar todo o ambiente para a execução, é necessário antes ter a API do gerenciador do blog rodando em sua máquina. Para saber o passo a passo de como executar a API é so clicar [aqui](https://github.com/caio1902araujo/crosslife-api).

#### 1. Executando a aplicação com npm
```javascript
// Clonando repositório:
git clone https://github.com/caio1902araujo/crosslife-blog.git

// Entrando no diretório:
cd crosslife-blog

// Instalando dependências:
npm install package.json

// Rodar a aplicação:
npm run start
```

#### 2. Executando aplicação com yarn
```javascript
// Clonando repositório:
git clone https://github.com/caio1902araujo/crosslife-blog.git

// Entrando no diretório:
cd crosslife-blog

// Instalando dependências:
yarn

// Rodar as migrations:
yarn typeorm migration:run

// Rodar a aplicação:
yarn start
```
