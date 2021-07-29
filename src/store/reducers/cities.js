import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  pending: false,
  cities: [],
  error: '',
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_PENDING:
      return { ...state, pending: true };
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, pending: false, cities: action.payload };
    case actionTypes.FETCH_DATA_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};

export default citiesReducer;
