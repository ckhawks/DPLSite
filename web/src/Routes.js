/* eslint-disable prettier/prettier */
// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/players" page={PlayersPage} name="players" />
      <Route path="/teams/new" page={NewTeamPage} name="newTeam" />
      <Route path="/teams/{id:Int}/edit" page={EditTeamPage} name="editTeam" />
      <Route path="/teams/{id:Int}" page={TeamPage} name="team" />
      <Route path="/teams" page={TeamsPage} name="teams" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />

      <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/admin/posts" page={PostsPage} name="posts" />
      <Route path="/admin" page={AdminPage} name="admin" />

      <Route path="/about" page={AboutPage} name="about" />

      <Route path="/article/{id:Int}" page={NewsPostPage} name="newsPost" />
      <Route path="/" page={HomePage} name="home" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
