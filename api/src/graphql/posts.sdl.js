export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    authorId: Int!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
    authorId: Int!
  }

  input UpdatePostInput {
    title: String
    body: String
    authorId: String!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
