module.exports = `
  type Reply {
    id: ID!
    content: String!
    user: User!
    isBestAnswer: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
