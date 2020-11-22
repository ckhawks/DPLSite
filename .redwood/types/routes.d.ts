
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                post: () => "/news/{id:Int}"
posts: () => "/news"
about: () => "/about"
home: () => "/"
              }
            }

            import type AboutPageType from 'c:\Users\David\Documents\DPLSite\web\src\pages\AboutPage\AboutPage'
import type FatalErrorPageType from 'c:\Users\David\Documents\DPLSite\web\src\pages\FatalErrorPage\FatalErrorPage'
import type HomePageType from 'c:\Users\David\Documents\DPLSite\web\src\pages\HomePage\HomePage'
import type NotFoundPageType from 'c:\Users\David\Documents\DPLSite\web\src\pages\NotFoundPage\NotFoundPage'
import type PostPageType from 'c:\Users\David\Documents\DPLSite\web\src\pages\PostPage\PostPage'
import type PostsPageType from 'c:\Users\David\Documents\DPLSite\web\src\pages\PostsPage\PostsPage'
            declare global {
              const AboutPage: typeof AboutPageType
const FatalErrorPage: typeof FatalErrorPageType
const HomePage: typeof HomePageType
const NotFoundPage: typeof NotFoundPageType
const PostPage: typeof PostPageType
const PostsPage: typeof PostsPageType
            }
          