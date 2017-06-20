import Layout from './components/Layout.js';

// Error Loading page
const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

// Loading modules
const loadRoute = (cb) => {
  return module => cb(null, module.default);
}

//
export default {
  path: '/',
  component: Layout,
  indexRoute: {
    getComponent(location, cb) {
      System.import('./components/Home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'messages',
      getComponent(location, cb) {
        System.import('./components/Messages')
          .then(loadRoute(cb, false))
          .catch(errorLoading);
      },
    },
    {
      path: 'friends',
      getComponent(location, cb) {
        System.import('./components/Friends')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'search',
      getComponent(location, cb) {
        System.import('./components/Search')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },    
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./components/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};