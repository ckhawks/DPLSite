import TeamsLayout from 'src/layouts/TeamsLayout'
import NewTeam from 'src/components/NewTeam'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const NewTeamPage = () => {
  return (
    <AdminLayout>
      <TeamsLayout>
        <NewTeam />
      </TeamsLayout>
    </AdminLayout>
  )
}

export default NewTeamPage
