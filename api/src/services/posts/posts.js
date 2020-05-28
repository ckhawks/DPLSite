import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findOne({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  return db.post.create({
    data: {
      title: input.title,
      body: input.body,
      author: {
        connect: {
          id: input.authorId,
        },
      },
    },
  })
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: {
      title: input.title,
      body: input.body,
      author: {
        connect: {
          id: input.authorId,
        },
      },
    },
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}
