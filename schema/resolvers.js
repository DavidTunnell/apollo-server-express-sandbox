const { users } = require("../pseudo-db/data.js");

//there is where the actual calls go for the defined query/mutation
const resolvers = {
    // a function is needed for each query defined in typeDefs.js
    Query: {
        async getAllUsers() {
            return await users;
        },
    },
    // Mutations: {},
};

module.exports = resolvers;
