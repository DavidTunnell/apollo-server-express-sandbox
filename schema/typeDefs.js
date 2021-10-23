const { gql } = require("apollo-server-express");

const typeDefs = gql`
    # Types/Models
    type User {
        name: String!
        age: Int!
        married: Boolean!
    }

    #Queries
    type Query {
        getAllUsers: [User]
    }

    #Mutations
`;

module.exports = typeDefs;
