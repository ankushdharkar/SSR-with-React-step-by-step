import getAllConcerts from "./../../api/all-concerts";
import { FETCH_ALL_CONCERTS } from "../constants/action-types";

export const fetchAllConcerts = () => async dispatch => {
  const res = await getAllConcerts();

  dispatch({
    type: FETCH_ALL_CONCERTS,
    payload: res
  })
}
