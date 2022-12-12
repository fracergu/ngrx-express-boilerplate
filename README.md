# Angular with NgRx and Express Boilerplate

> Quickly bootstrap a new project with Angular, NgRx, Express, ESLint, Prettier and Angular Material

## Installing / Developing

First, [create a repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Now you are ready to go:

```shell
npm install
```

This will install the dependencies required to run the boilerplate.

```shell
npm run serve
```

Boom! These scripts run your server and client in development mode.

The default PORTS are:

- `3000` for the server
- `4200` for the client

If you don't like to call all scripts at once, you can also run:

```shell
npm run server:dev
npm run client:dev
```

You can configure the server port by setting the `PORT` environment variable.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 3000) |

## Building

To build the project, run:

```shell
npm run build
```

This will build the client and server.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/*` is the client.

## Tests

At the moment, testing is only available for the client. Karma and Jasmine have been replaced by Jest.
To execute the tests, run:

```shell
npm run test
```

Also can use watch and coverage flags:

```shell
npm run test:watch
npm run test:coverage
```

## Check

A script to check the code style and linting is available:

```shell
npm run check
```
