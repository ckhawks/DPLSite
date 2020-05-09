import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
  <>
    <header>
      <h1>
        <Link to={routes.home()}>DPL</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
  )
}

export default MainLayout
