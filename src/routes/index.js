// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import Dashbord from './Dashboard/Dashbord';
import AboutUs from './Pages/AboutUs';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  component: CoreLayout,
  childRoutes: [
    {
      path: '/',
      component: PublicLayout,
      indexRoute: Home,
      childRoutes: [
        {
          path:'aboutus',
          component: AboutUs
        }

      ]
    },
    {
      path: '/dashboard',
      component: PrivateLayout,
      indexRoute: {
        component: Dashbord
      },
    }
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
