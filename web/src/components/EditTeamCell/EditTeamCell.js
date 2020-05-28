import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TeamForm from 'src/components/TeamForm'

export const QUERY = gql`
  query FIND_TEAM_BY_ID($id: Int!) {
    team: team(id: $id) {
      id
      createdAt
      name
      description
      logoUrl
      roster {
        name
        id
      }
    }
  }
`
const UPDATE_TEAM_MUTATION = gql`
  mutation UpdateTeamMutation($id: Int!, $input: UpdateTeamInput!) {
    updateTeam(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ team }) => {
  const [updateTeam, { loading, error }] = useMutation(UPDATE_TEAM_MUTATION, {
    onCompleted: () => {
      navigate(routes.teams())
    },
  })

  const onSave = (input, id) => {
    updateTeam({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Team {team.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <TeamForm team={team} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
