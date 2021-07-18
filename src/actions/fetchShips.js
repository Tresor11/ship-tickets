import axios from 'axios';
import {
  fetchDataSuccess,
  fetchDataPending,
  fetchDataError,
  endpoint,
} from './index';

const fetchShips = () => async (dispatch) => {
  dispatch(fetchDataPending());
  console.log('fetching ships...');
  try {
    const response = await axios.get(`${endpoint}/ships`);
    const data = await response.data;
    console.log(data);
    dispatch(fetchDataSuccess(data));
  } catch (ex) {
    dispatch(fetchDataError(ex.message));
  }
};

export default fetchShips;
