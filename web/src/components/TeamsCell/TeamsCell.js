import { Link, routes } from '@redwoodjs/router'

import Teams from 'src/components/Teams'

export const QUERY = gql`
  query TEAMS {
    teams {
      id
      createdAt
      name
      description
      logoUrl
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No teams yet. '}
      <Link
        to={routes.newTeam()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ teams }) => {
  return <Teams teams={teams} />
}
