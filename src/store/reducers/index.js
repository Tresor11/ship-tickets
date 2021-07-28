import { combineReducers } from 'redux';

import ships from './ships';
import cities from './cities';

const reducers = combineReducers({ ships, cities });

export default reducers;
