export const schema = gql`
  type Team {
    id: Int!
    createdAt: DateTime!
    name: String!
    description: String
    logoUrl: String!
    roster: [User]
  }

  type Query {
    teams: [Team!]!
    team(id: Int!): Team!
  }

  input CreateTeamInput {
    name: String!
    description: String
    logoUrl: String!
  }

  input UpdateTeamInput {
    name: String
    description: String
    logoUrl: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team!
    updateTeam(id: Int!, input: UpdateTeamInput!): Team!
    deleteTeam(id: Int!): Team!
  }
`
