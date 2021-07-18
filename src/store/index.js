import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';

export default function appStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware()));
}
