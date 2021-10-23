https://www.youtube.com/watch?v=xCzm1bbOpfw&ab_channel=PedroTech

Learn Apollo-Server-Express! In this video I will go over the basics of graphql using the GraphQL library Apollo Server. I have other tutorials on GraphQL if you want to check out!

Extension: Apollo GraphQL

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
