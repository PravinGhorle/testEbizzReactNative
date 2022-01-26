import {
  DATA_FAILURE,
  DATA_SUCCESS,
  DATA_REQUEST,
} from './DataTypes';

export const data_request = () => {
  return{
    type :DATA_REQUEST
  };
};

export const data_success= (data) =>{
  return{
    type: DATA_SUCCESS,
    payload: data
  };
};

export const data_failure = () => {
  return{
    type : DATA_FAILURE
  }
};