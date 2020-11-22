import PostsLayout from 'src/layouts/PostsLayout'
import DefaultLayout from 'src/layouts/DefaultLayout'
import PostsCell from 'src/components/PostsCell'

const PostsPage = () => {
  return (
    <DefaultLayout>
      <PostsLayout>
        <PostsCell />
      </PostsLayout>
    </DefaultLayout>
  )
}

export default PostsPage
