import TeamsLayout from 'src/layouts/TeamsLayout'
import TeamsCell from 'src/components/TeamsCell'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout';

const TeamsPage = () => {
  return (
    <AdminLayout>
      <TeamsLayout>
        <TeamsCell />
      </TeamsLayout>
    </AdminLayout>
  )
}

export default TeamsPage
