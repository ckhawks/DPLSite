import PostsLayout from 'src/layouts/PostsLayout'
import PostCell from 'src/components/PostCell'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const PostPage = ({ id }) => {
  return (
    <AdminLayout>
      <PostsLayout>
        <PostCell id={id} />
      </PostsLayout>
    </AdminLayout>
  )
}

export default PostPage
