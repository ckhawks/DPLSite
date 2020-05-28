import PostsLayout from 'src/layouts/PostsLayout'
import PostsCell from 'src/components/PostsCell'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const PostsPage = () => {
  return (
    <AdminLayout>
      <PostsLayout>
        <PostsCell />
      </PostsLayout>
    </AdminLayout>
  )
}

export default PostsPage
