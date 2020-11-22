import { Link, routes } from '@redwoodjs/router'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'
import RecentPostCell from 'src/components/RecentPostCell'

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <RecentPostCell />
      </DefaultLayout>
    </>
  )
}

export default HomePage
