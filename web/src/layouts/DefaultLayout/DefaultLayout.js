import { Link, routes } from '@redwoodjs/router'

const DefaultLayout = ({ children }) => {
  return (
  <>
    <header>
      <Link to={routes.home()}>DPL</Link>
      <nav>
        <ul>
          <li>
            <Link to={routes.posts()}>News</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </> );
}

export default DefaultLayout
