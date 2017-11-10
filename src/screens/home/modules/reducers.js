import Constants from "./constants";

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.FETCH_LIST_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        list: action.payload,
      };
    },
    [Constants.CLEAR_LIST]: (state, action) => {
      return {
        ...state,
        fetch: false,
        list: [],
      };
    },
  },

  initialState = {
    fetch: false,
    list: [],
  };

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
