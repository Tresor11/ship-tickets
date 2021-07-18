import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  pending: false,
  ships: [],
  error: '',
};

const shipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_PENDING:
      return { ...state, pending: true };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        ships: action.payload,
        error: '',
      };
    case actionTypes.FETCH_DATA_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default shipsReducer;
