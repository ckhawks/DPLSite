import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary">
          <Link to={routes.home()} className="navbar-brand">
            <img src="/dpl.svg" height="44" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto">
              <Link className="nav-item nav-link text-white" to={routes.home()}>
                HOME
              </Link>
              <Link
                className="nav-item nav-link text-white"
                to={routes.about()}
              >
                ABOUT
              </Link>
              <Link className="nav-item nav-link text-white" to={routes.home()}>
                TEAMS
              </Link>
              <Link className="nav-item nav-link text-white" to={routes.home()}>
                PLAYERS
              </Link>
              <Link className="nav-item nav-link text-white" to={routes.home()}>
                STANDINGS
              </Link>
              <Link className="nav-item nav-link text-white" to={routes.home()}>
                SCHEDULE
              </Link>
              <Link
                className="nav-item nav-link text-white form-inline my-2 my-lg-0"
                to={routes.admin()}
              >
                ADMIN
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
