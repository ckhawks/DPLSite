import UsersLayout from 'src/layouts/UsersLayout'
import UsersCell from 'src/components/UsersCell'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const UsersPage = () => {
  return (
    <AdminLayout>
      <UsersLayout>
        <UsersCell />
      </UsersLayout>
    </AdminLayout>
  )
}

export default UsersPage
