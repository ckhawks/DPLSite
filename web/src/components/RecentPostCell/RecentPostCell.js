import { Link, routes } from '@redwoodjs/router'
import Post from 'src/components/Post'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div>
      {'No posts yet. '}
    </div>
  )
}

export const Success = ({ posts }) => {
  return (
    <>
      <Post post={posts[posts.length-1]} />
    </>
  )
}
