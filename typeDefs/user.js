module.exports = `
  type User {
    id: ID!
    username: String!
    email: String!
    role:Role!
    avatar: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  enum Role { ADMIN USER }
  
type Token {
  token: String!
}
  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): Token!
  }
`
