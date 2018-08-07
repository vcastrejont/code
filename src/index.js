import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import Store from './store'
import { filterText, activeStatus, sortBy } from './actions/filters';
import getVisiblePosts from './selectors/posts';

const store = createStore(Store,applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
