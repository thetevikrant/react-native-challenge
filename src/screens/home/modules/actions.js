import Constants from "./constants";
import config from "../../../config";

const
  requestBegin = () => {
    return {
      type: Constants.REQUEST_BEGIN,
    };
  },

  fetchListEnd = (payload = []) => {
    return {
      type: Constants.FETCH_LIST_END,
      payload,
    };
  },

  fetchList = () => {
    return (dispatch) => {
      dispatch(requestBegin());
      return fetch(`${config.baseUrl}/5a05a78c300000f431fe0add`, {
        method: "get",
        headers: config.headers,
      })
      .then((response) => {
        response.json().then((json) => {
          dispatch(fetchListEnd(json));
        });
      })
      .catch((error) => {
        dispatch(fetchListEnd());
      });
    };
  },

  clearList = () => {
    return {
      type: Constants.CLEAR_LIST,
    };
  };

export default {
  fetchList,
  clearList,
};
