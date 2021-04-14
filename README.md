# LDXPS back-end

## Techs
- NodeJS
- Express
- Knex
- Sqlite3
- Cors

## Getting started

To clone and run the application, you will need to have [Git](https://git-scm.com), [Node.js](https://nodejs.org) + [Yarn](https://yarnpkg.com) installed on your machine. With all programs installed, run the following command lines:

## Clone this repository
```bash
$ git clone https://github.com/Vitorhr10/ldxps-backend
```

## Access the repository
```bash
$ cd ldxps-backend
```

## Install the dependencies
```bash
$ yarn install 
or
npm run
```

## Database

Start the database by running:
```bash
yarn knex:migrate
or
npm run knex:migrate
```

The file will be created in the directory: `./src/database/database.sqlite`.
You can install this extension on VS code to see the database: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

## Start server(API)
```bash
yarn dev
or
npm run dev
```

## Available scripts

### run new migrations
```bash
yarn knex:migrate
or
npm run knex:migrate
```

### Revert last migration
```bash
yarn knex:migrate:rollback
or
npm run knex:migrate:rollback
```
