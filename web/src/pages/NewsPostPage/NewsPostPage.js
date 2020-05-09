import MainLayout from 'src/layouts/MainLayout/MainLayout'
import NewsPostCell from 'src/components/NewsPostCell/NewsPostCell'

const NewsPostPage = ({ id }) => {
  return (
    <MainLayout>
      <NewsPostCell id={id} />
    </MainLayout>
  )
}

export default NewsPostPage
