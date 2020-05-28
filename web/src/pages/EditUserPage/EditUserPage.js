import UsersLayout from 'src/layouts/UsersLayout'
import EditUserCell from 'src/components/EditUserCell'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const EditUserPage = ({ id }) => {
  return (
    <AdminLayout>
      <UsersLayout>
        <EditUserCell id={id} />
      </UsersLayout>
    </AdminLayout>
  )
}

export default EditUserPage
