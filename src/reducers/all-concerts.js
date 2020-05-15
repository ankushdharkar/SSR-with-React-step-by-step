import { FETCH_ALL_CONCERTS_TYPE } from '../constants/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CONCERTS_TYPE:
      return action.payload;
    default:
      return state;
  }
}
