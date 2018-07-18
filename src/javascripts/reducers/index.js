import { ADD_TO_CART } from 'javascripts/constants/action-types';
import { UPDATE_CART_ITEM } from 'javascripts/constants/action-types';

const initialState = {
  byId: [],
  byHash: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        byId: [ ...state.byId, action.id ],
        byHash: {
          ...state.byHash,
          [action.id]: action.payload
        }
      };
    case UPDATE_CART_ITEM:
      state.byHash[action.id] = {
        ...state.byHash[action.id],
        ...action.payload
      };
      return {
        ...state
      };
    default:
      return state;
  }
};

export default rootReducer;
