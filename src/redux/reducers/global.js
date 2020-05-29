import ACTION_TYPES from "../actions";
import Dim from '../../constants/Dim';
import Color from '../../constants/Color';
import Font from '../..//constants/Font';

const defaultState = {
  theme: {
    Dim, Color, Font
  }
};

const global = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_STATE: {
      return {
        ...state,
        ...action.obj
      };
    }
    default: {
      return state;
    }
  }
};

export default global;