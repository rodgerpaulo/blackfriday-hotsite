import { loadState } from 'javascripts/helpers/localStorage';
import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM
} from 'javascripts/constants/action-types';

let initialState = loadState() || {
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
    case REMOVE_CART_ITEM:
      const prunedIds = state.byId.filter(item => {
        return item !== action.id;
      });
      delete state.byHash[action.id];

      return {
        byId: prunedIds,
        byHash: state.byHash
      };
    default:
      return state;
  }
};

export default rootReducer;
