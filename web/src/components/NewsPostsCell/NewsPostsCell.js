export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h1>{post.title}</h1>
        <p className="subtitle">Posted at: {post.createdAt}</p>
      </header>
      <p>{post.body}</p>
    </article>
  ))
}
