import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TeamForm from 'src/components/TeamForm'

const CREATE_TEAM_MUTATION = gql`
  mutation CreateTeamMutation($input: CreateTeamInput!) {
    createTeam(input: $input) {
      id
    }
  }
`

const NewTeam = () => {
  const [createTeam, { loading, error }] = useMutation(CREATE_TEAM_MUTATION, {
    onCompleted: () => {
      navigate(routes.teams())
    },
  })

  const onSave = (input) => {
    createTeam({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Team</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <TeamForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTeam
