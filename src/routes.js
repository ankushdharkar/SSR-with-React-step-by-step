import App from './App';
import HomePage from './pages/home';
import AllConcertsPage from './pages/all-concerts';
import NotFoundPage from './pages/not-found';


export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AllConcertsPage,
        path: '/all-concerts'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
