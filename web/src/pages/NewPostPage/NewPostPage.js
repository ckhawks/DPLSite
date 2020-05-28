import PostsLayout from 'src/layouts/PostsLayout'
import NewPost from 'src/components/NewPost'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const NewPostPage = () => {
  return (
    <AdminLayout>
      <PostsLayout>
        <NewPost />
      </PostsLayout>
    </AdminLayout>
  )
}

export default NewPostPage
