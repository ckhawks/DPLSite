import { Link, routes } from '@redwoodjs/router'

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const NewsPost = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.newsPost({ id: post.id })}>{post.title}</Link>
        </h2>
        <p className="subtitle">{timeTag(post.createdAt)}</p>
      </header>
      <p>{post.body}</p>
    </article>
  )
}

export default NewsPost
