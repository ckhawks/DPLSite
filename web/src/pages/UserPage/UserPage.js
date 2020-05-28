import UsersLayout from 'src/layouts/UsersLayout'
import UserCell from 'src/components/UserCell'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const UserPage = ({ id }) => {
  return (
    <AdminLayout>
      <UsersLayout>
        <UserCell id={id} />
      </UsersLayout>
    </AdminLayout>
  )
}

export default UserPage
