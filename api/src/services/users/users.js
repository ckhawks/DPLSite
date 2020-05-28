import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  if (input.teamId) {
    return db.user.create({
      data: {
        name: input.name,
        bio: input.bio,
        team: {
          connect: {
            id: input.teamId,
          },
        },
      },
    })
  }
  delete input.teamId
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  if (input.teamId) {
    return db.user.update({
      data: {
        name: input.name,
        bio: input.bio,
        team: {
          connect: {
            id: input.teamId,
          },
        },
      },
      where: { id },
    })
  }
  return db.user.update({
    data: {
      name: input.name,
      bio: input.bio,
      team: null,
    },
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  team: (_obj, { root }) => db.user.findOne({ where: { id: root.id } }).team(),
}
