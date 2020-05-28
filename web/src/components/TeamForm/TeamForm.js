import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const REMOVE_PLAYER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`
const TeamForm = (props) => {
  const [updateUser] = useMutation(REMOVE_PLAYER_MUTATION)
  const onSubmit = (data) => {
    props.onSave(data, props?.team?.id)
  }

  const onRemovePlayer = (playerId) => {
    console.log(props)
    console.log(playerId)
    updateUser({ variables: { id: playerId, input: { teamId: null } } })
  }

  console.log(props.team?.roster)
  return (
    <div className="box-border text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-4 mb-4"
          titleClassName="mt-0 font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="name"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="name"
          defaultValue={props.team?.name}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="name" className={CSS.errorMessage} />

        <Label
          name="description"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="description"
          defaultValue={props.team?.description}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="description" className={CSS.errorMessage} />

        <Label
          name="logoUrl"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="logoUrl"
          defaultValue={props.team?.logoUrl}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="logoUrl" className={CSS.errorMessage} />
        <label name="roster" className="block mt-6 text-gray-700 font-semibold">
          roster
        </label>
        <ul>
          {props.team?.roster?.map((u) => (
            <li key={u.id}>
              <a
                onClick={() => onRemovePlayer(u.id)}
                className="bg-red-600 text-white hover:bg-red-700 text-xs rounded px-1 py-0 font-semibold tracking-wide"
              >
                X
              </a>{' '}
              {u.name}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TeamForm
