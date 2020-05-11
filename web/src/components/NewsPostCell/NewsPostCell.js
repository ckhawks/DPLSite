import NewsPost from 'src/components/NewsPost/NewsPost.js'

export const QUERY = gql`
  query($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="text-center m-5">
    <div className="spinner-border  text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return <NewsPost post={post} />
}
