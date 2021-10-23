const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();

const { typeDefs, resolvers } = require("./schema");

//think of graphql has a middleware that runs for every request
//ApolloServer always takes typeDefs, resolvers
//type-Defs - type definitions are similar to model definitions but for graphQL, you also define the types of queries and mutations (modification to data) here
//resolvers - are the functions that are called when requests are made to typeDefs
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//apply ApolloServer middleware to express server app
server.start().then(() => {
    server.applyMiddleware({ app });
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
