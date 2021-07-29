import axios from 'axios';
import {
  fetchDataSuccess,
  fetchDataPending,
  fetchDataError,
  endpoint,
} from './index';

const fetchCities = async (dispatch) => {
  dispatch(fetchDataPending());
  try {
    const response = await axios.get(`${endpoint}/cities`);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataError(error));
  }
};

export default fetchCities;
