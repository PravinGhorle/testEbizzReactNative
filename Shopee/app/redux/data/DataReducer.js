import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE
} from './DataTypes';
const initial_state = {
  loading: false,
  data:[]
};

export const dataReducer = (state = initial_state, action) => {
  switch(action.type){
    case DATA_REQUEST:
      return{
        ...state,
        loading: true,
        data:[]
      };
    case DATA_SUCCESS:
      return{
        ...state,
        loading:false,
        data: action.payload
      }
    case DATA_FAILURE:
      return{
        ...state,
        loading:false,
        data:[]
      }
    default :{
        return state
      }
  }
}