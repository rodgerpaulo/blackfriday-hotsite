# Black Friday hotsite

Um processo de compras criado em React para testar e Estudar!

[![Build Status](https://travis-ci.com/rodgerpaulo/blackfriday-hotsite.svg)](https://travis-ci.com/rodgerpaulo/blackfriday-hotsite)
[![Maintainability](https://api.codeclimate.com/v1/badges/6d24c65db059eaa2cf63/maintainability)](https://codeclimate.com/github/rodgerpaulo/blackfriday-hotsite/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6d24c65db059eaa2cf63/test_coverage)](https://codeclimate.com/github/rodgerpaulo/blackfriday-hotsite/test_coverage)

> Este projeto foi inicialmente configurado utilizando o [Create React App](https://github.com/facebookincubator/create-react-app)

## Stack

- Webpack 4
- React com Redux (Redux Logger)
- Sass e Postcss
- Linting (Eslint, Prettier e Stylelint)
- Precommit Lints
- Redux Logger
- WhyDidYouUpdate

## Requisitos

- Node 8.11+

## Instalação

Instalar as dependências

```sh
npm install
# ou com yarn
yarn install
```

## Setup da IDE

Para garantir a qualidade e consistência, é feita integração do **Eslint**, **Prettier** e **Stylelint**.
A configuração desta integração em tempo de execução é feita pelo **Visual Studio**, por isso recomendo utiliza-lo para rodar este projeto.

#### Plugins

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

## Rodando o projeto

```sh
npm run start
# ou com yarn
yarn start
```

## Testing

Os testes unitários ainda estão sendo implantados, porém já é possível rodar

```sh
npm run test
# ou com yarn
yarn test
```

Para analisar o _coverage_

```sh
npm run coverage
# ou com yarn
yarn coverage
```

## Build

Para gerar os assets na pasta **build** basta executar:

```sh
npm run build
# ou com yarn
yarn build
```
