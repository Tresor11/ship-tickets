import axios from 'axios';
import {
  fetchDataSuccess,
  fetchDataPending,
  fetchDataError,
  endpoint,
} from './index';

const fetchShips = () => async (dispatch) => {
  dispatch(fetchDataPending());
  try {
    const response = await axios.get(`${endpoint}/ships`);
    dispatch(fetchDataSuccess(response.data));
  } catch (ex) {
    dispatch(fetchDataError(ex.message));
  }
};

export default fetchShips;
