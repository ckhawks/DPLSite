import { Link, routes } from '@redwoodjs/router'
import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => (
  <div className="text-center m-5">
    <div className="spinner-border  text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export const Empty = () => {
  return (
    <div className="text-center">
      {'No posts yet. '}
      <Link
        to={routes.newPost()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}
