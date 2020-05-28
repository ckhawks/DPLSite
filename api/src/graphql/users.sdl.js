export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    name: String!
    bio: String
    teamId: Int
    team: Team
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    name: String!
    bio: String
    teamId: Int
  }

  input UpdateUserInput {
    name: String
    bio: String
    teamId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
