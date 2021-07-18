import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default function appStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
