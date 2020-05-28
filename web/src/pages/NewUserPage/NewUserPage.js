import UsersLayout from 'src/layouts/UsersLayout'
import NewUser from 'src/components/NewUser'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const NewUserPage = () => {
  return (
    <AdminLayout>
      <UsersLayout>
        <NewUser />
      </UsersLayout>
    </AdminLayout>
  )
}

export default NewUserPage
