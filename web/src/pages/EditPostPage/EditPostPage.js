import PostsLayout from 'src/layouts/PostsLayout'
import EditPostCell from 'src/components/EditPostCell'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const EditPostPage = ({ id }) => {
  return (
    <AdminLayout>
      <PostsLayout>
        <EditPostCell id={id} />
      </PostsLayout>
    </AdminLayout>
  )
}

export default EditPostPage
