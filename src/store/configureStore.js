import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import DevTools from 'containers/DevTools';
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'


console.log(reducers)
const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory))
  // Required! Enable Redux DevTools with the monitors you chose
);

export default function configureStore(initialState) {
  console.log('configuring store')
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}