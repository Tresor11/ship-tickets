import * as actionTypes from './actionTypes';

export const endpoint = 'https://ship-tickets-api.herokuapp.com/';
export const fetchDataSuccess = (payload) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataPending = () => ({
  type: actionTypes.FETCH_DATA_PENDING,
});

export const fetchDataError = (payload) => ({
  type: actionTypes.FETCH_DATA_ERROR,
  payload,
});
