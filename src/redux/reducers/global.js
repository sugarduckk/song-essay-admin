import ACTION_TYPES from "../actions";
import Dim from "../../constants/Dim";
import Color from "../../constants/Color";

const defaultState = {
  theme: {
    Dim, Color
  },
  user: null,
  authLoading: true,
  dialogScreen: {
    text: null,
    show: false
  },
  confirmationScreen: {
    text: null,
    show: false,
    okCallback: null
  },
  customScreen: {
    FormItems: null,
    formProps: null,
    show: false,
    submitCallback: null,
    validator: null
  },
  navDrawerOpen: false,
  userDoc: null,
  userContacts: null,
  userChatrooms: null,
  fcmToken: null
};

const global = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER: {
      return {
        ...state,
        user: action.user,
        authLoading: false
      };
    }
    case ACTION_TYPES.SET_DIALOG_SCREEN: {
      return {
        ...state,
        dialogScreen: {
          text: action.text,
          show: true
        }
      };
    }
    case ACTION_TYPES.DISMISS_DIALOG_SCREEN: {
      const originalText = state.dialogScreen.text;
      return {
        ...state,
        dialogScreen: {
          text: originalText,
          show: false
        }
      };
    }
    case ACTION_TYPES.SET_CONFIRMATION_SCREEN: {
      return {
        ...state,
        confirmationScreen: {
          text: action.text,
          show: true,
          okCallback: action.okCallback
        }
      };
    }
    case ACTION_TYPES.OK_CONFIRMATION_SCREEN: {
      if (state.confirmationScreen.okCallback) {
        state.confirmationScreen.okCallback();
      }
      const originalText = state.confirmationScreen.text;
      return {
        ...state,
        confirmationScreen: {
          text: originalText,
          show: false,
          okCallback: null
        }
      };
    }
    case ACTION_TYPES.CANCEL_CONFIRMATION_SCREEN: {
      const originalText = state.confirmationScreen.text;
      return {
        ...state,
        confirmationScreen: {
          text: originalText,
          show: false,
          okCallback: null
        }
      };
    }
    case ACTION_TYPES.SET_CUSTOM_SCREEN: {
      return {
        ...state,
        customScreen: {
          FormItems: action.FormItems,
          formProps: action.formProps,
          show: true,
          submitCallback: action.submitCallback,
          validator: action.validator
        }
      };
    }
    case ACTION_TYPES.SUBMIT_CUSTOM_SCREEN: {
      const OriginalFormItems = state.customScreen.FormItems;
      return {
        ...state,
        customScreen: {
          FormItems: OriginalFormItems,
          formProps: null,
          show: false,
          submitCallback: null,
          validator: null
        }
      };
    }
    case ACTION_TYPES.CANCEL_CUSTOM_SCREEN: {
      const originalRender = state.customScreen.render;
      return {
        ...state,
        customScreen: {
          render: originalRender,
          show: false,
          submitCallback: null
        }
      };
    }
    case ACTION_TYPES.SET_NAV_DRAWER_OPEN: {
      return {
        ...state,
        navDrawerOpen: action.open
      };
    }
    case ACTION_TYPES.SET_USER_DOC: {
      return {
        ...state,
        userDoc: action.userDoc
      };
    }
    case ACTION_TYPES.SET_USER_CONTACTS: {
      return {
        ...state,
        userContacts: action.userContacts
      };
    }
    case ACTION_TYPES.SET_USER_CHATROOMS: {
      return {
        ...state,
        userChatrooms: action.userChatrooms
      };
    }
    case ACTION_TYPES.SET_FCM_TOKEN: {
      return {
        ...state,
        fcmToken: action.fcmToken
      };
    }
    default: {
      return state;
    }
  }
};

export default global;