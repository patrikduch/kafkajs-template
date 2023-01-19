# KafkaJs template

Docker template for building modern webservices with Nest.js framework.

## Main features

<ul>
    <li>Dockerization with VSCode debugging</li>
    <li>Kafkajs example</li>
    <li>Dockerized Kafka setup for local environment</li>
    <li>TypeORM integration</li>
    <li>TypeScript oriented</li>
    <li>Unit testing with Jest test runner</li>
    <li>OpenAPI specification with Swagger</li>
</ul>

## Environment setup

With the following commands, create the directory (`.vscode`) and files for debugging.

```
yarn
```

```
docker-compose up --build
```

## Development

### Third party libraries

<ul>
    <li>@nestjs/cqrs</li>
</ul>

### Package state

Check for outdated packages

```
yarn updated
```

## Debugging

Docker containers startup

```
docker-compose up
```

- start up the Nodejs debugger

## Testing

Execute all available tests via Jest test runner.

```
yarn test or yarn test:watch
```

## Deployment

docker build -t nestjs-docker-template .
