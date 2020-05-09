import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <p class="subtitle">This is a subtitle</p>
      <h2>This is a header 2</h2>
      <h3>Holy crap header 3</h3>
      <p>this is a paragraph</p>
      <p>Find me in ./web\src\pages\HomePage\HomePage.js</p>
    </MainLayout>
  )
}

export default HomePage