import { Link, routes } from '@redwoodjs/router'

const NewsPost = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.newsPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div>{post.body}</div>
    </article>
  )
}

export default NewsPost
