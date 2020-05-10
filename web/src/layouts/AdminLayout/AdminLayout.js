import { Link, routes } from '@redwoodjs/router'

const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.admin()}>DPL Admin</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.posts()}>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
