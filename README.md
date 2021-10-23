# Apollo-Server-Express Sandbox

This is a basic functioning graphQL API with some user data that is able to be read and created. It is based on the following [YouTube tutorial](https://www.youtube.com/watch?v=xCzm1bbOpfw&ab_channel=PedroTech). It is used as a sandbox to prepare for my [Book Search Engine](https://github.com/DavidTunnell/book-search-engine-graphql-mongodb-express-react-node) project.

This project uses the following technologies/libraries.

-   [Apollo-Server-Express](https://www.npmjs.com/package/apollo-server-express) as Middleware to Allow for the [GraphQL](https://graphql.org/) API Interaction
-   [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) as the Server for API and HTTP Requests and Serving the React Build Directory Frontend
-   [Nodemon](https://nodemon.io/) for more Pleasant Node.js Development

## Example Queries

```
query ExampleQuery {
  getAllUsers {
    name
    age
    married
  }
}
```

```
mutation {
  createUser(name: "Michael", age: 35, married: true) {
    name
    age
    married
  }
}

```
