import TeamsLayout from 'src/layouts/TeamsLayout'
import EditTeamCell from 'src/components/EditTeamCell'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const EditTeamPage = ({ id }) => {
  return (
    <AdminLayout>
      <TeamsLayout>
        <EditTeamCell id={id} />
      </TeamsLayout>
    </AdminLayout>
  )
}

export default EditTeamPage
