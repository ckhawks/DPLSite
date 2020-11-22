import { Link, routes, navigate } from '@redwoodjs/router'

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const Post = ({ post }) => {
  return (
    <>
      <h1>
        <Link to={routes.post({ id: post.id })}>
          {post.title}
        </Link>
      </h1>
      <h2>{timeTag(post.createdAt)}</h2>
      <p>{post.body}</p>
    </>
  )
}

export default Post
