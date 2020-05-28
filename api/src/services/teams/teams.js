import { db } from 'src/lib/db'

export const teams = () => {
  return db.team.findMany()
}

export const team = ({ id }) => {
  return db.team.findOne({
    where: { id },
    include: { roster: true },
  })
}

export const createTeam = ({ input }) => {
  return db.team.create({
    data: input,
  })
}

export const updateTeam = ({ id, input }) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam = ({ id }) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team = {
  users: (_obj, { root }) => db.team.findOne({ where: { id: root.id } }).users(),
}
