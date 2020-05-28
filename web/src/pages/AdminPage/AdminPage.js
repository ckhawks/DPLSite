import UsersCell from 'src/components/UsersCell'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'
import PostsLayout from 'src/layouts/PostsLayout/PostsLayout'
import TeamsLayout from 'src/layouts/TeamsLayout/TeamsLayout'
import UsersLayout from 'src/layouts/UsersLayout/UsersLayout'

const AdminPage = () => {
  return (
    <AdminLayout>
      <PostsLayout></PostsLayout>
      <TeamsLayout></TeamsLayout>
      <UsersLayout>
        <UsersCell />
      </UsersLayout>
    </AdminLayout>
  )
}

export default AdminPage
