<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Developed using <a href="https://nestjs.com/" target="_blank">Nest.js</a>, a progressive <a href="https://nodejs.org/en/" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


## Installation

```bash
$ npm install
```

## Running Prisma
Add path to db (from prisma folder) in DATABASE_URL variable in an .env file (on the root directory)
```bash
$ touch .env
Content: DATABASE_URL="file:./dev.db"
```

```bash
$ npx prisma generate
```

```bash
$ npx prisma studio
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Kafka (w/ Upstash)

https://console.upstash.com/kafka