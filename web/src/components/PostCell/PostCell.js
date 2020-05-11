import Post from 'src/components/Post'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    post: post(id: $id) {
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

export const Empty = () => <div>Post not found</div>

export const Success = ({ post }) => {
  return <Post post={post} />
}
