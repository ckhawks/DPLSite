import { Link, routes } from '@redwoodjs/router'

const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary">
          <Link to={routes.admin()} className="navbar-brand">
            <img src="/dpladmin.svg" height="44" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto">
              <Link className="nav-item nav-link text-white" to={routes.home()}>
                BACK HOME
              </Link>
              <Link
                className="nav-item nav-link text-white"
                to={routes.posts()}
              >
                POSTS
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
