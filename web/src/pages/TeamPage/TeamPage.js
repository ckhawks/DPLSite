import TeamsLayout from 'src/layouts/TeamsLayout'
import TeamCell from 'src/components/TeamCell'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const TeamPage = ({ id }) => {
  return (
    <AdminLayout>
      <TeamsLayout>
        <TeamCell id={id} />
      </TeamsLayout>
    </AdminLayout>
  )
}

export default TeamPage
