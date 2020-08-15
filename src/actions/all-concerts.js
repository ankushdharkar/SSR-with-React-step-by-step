import 'babel-polyfill';
import getAllConcerts from "./../../api/all-concerts";
import { FETCH_ALL_CONCERTS_TYPE } from "../constants/action-types";

export default () => async dispatch => {
  const res = await getAllConcerts();
  dispatch({
    type: FETCH_ALL_CONCERTS_TYPE,
    payload: res
  })
}
