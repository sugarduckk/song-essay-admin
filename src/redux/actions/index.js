const ACTION_TYPES = {
  SET_USER: 'SET_USER',
  SET_DIALOG_SCREEN: 'SET_DIALOG_SCREEN',
  DISMISS_DIALOG_SCREEN: 'DISMISS_DIALOG_SCREEN',
  SET_CONFIRMATION_SCREEN: 'SET_CONFIRMATION_SCREEN',
  OK_CONFIRMATION_SCREEN: 'OK_CONFIRMATION_SCREEN',
  CANCEL_CONFIRMATION_SCREEN: 'CANCEL_CONFIRMATION_SCREEN',
  SET_CUSTOM_SCREEN: 'SET_CUSTOM_SCREEN',
  SUBMIT_CUSTOM_SCREEN: 'SUBMIT_CUSTOM_SCREEN',
  CANCEL_CUSTOM_SCREEN: 'CANCEL_CUSTOM_SCREEN',
  SET_NAV_DRAWER_OPEN: 'SET_NAV_DRAWER_OPEN',
  SET_USER_DOC: 'SET_USER_DOC',
  SET_USER_CONTACTS: 'SET_USER_CONTACTS',
  SET_USER_CHATROOMS: 'SET_USER_CHATROOMS',
  SET_FCM_TOKEN: 'SET_FCM_TOKEN',
};

export const setUser = (user) => {
  return {
    type: ACTION_TYPES.SET_USER,
    user
  };
};

export const setDialogScreen = text => {
  return {
    type: ACTION_TYPES.SET_DIALOG_SCREEN,
    text
  };
};

export const dismissDialogScreen = () => {
  return {
    type: ACTION_TYPES.DISMISS_DIALOG_SCREEN
  };
};

export const setConfirmationScreen = (text, okCallback) => {
  return {
    type: ACTION_TYPES.SET_CONFIRMATION_SCREEN,
    text, okCallback
  };
};

export const okConfirmationScreen = () => {
  return {
    type: ACTION_TYPES.OK_CONFIRMATION_SCREEN
  };
};

export const cancelConfirmationScreen = () => {
  return {
    type: ACTION_TYPES.CANCEL_CONFIRMATION_SCREEN
  };
};

export const setCustomScreen = (FormItems, formProps, submitCallback, validator) => {
  return {
    type: ACTION_TYPES.SET_CUSTOM_SCREEN,
    FormItems, formProps, submitCallback, validator
  };
};

export const submitCustomScreen = (values, setIsSubmitting) => {
  return {
    type: ACTION_TYPES.SUBMIT_CUSTOM_SCREEN,
    values, setIsSubmitting
  };
};

export const cancelCustomScreen = () => {
  return {
    type: ACTION_TYPES.CANCEL_CUSTOM_SCREEN
  };
};

export const setNavDrawerOpen = (open) => {
  return {
    type: ACTION_TYPES.SET_NAV_DRAWER_OPEN,
    open
  };
};

export const setUserDoc = (userDoc) => {
  return {
    type: ACTION_TYPES.SET_USER_DOC,
    userDoc
  };
};

export const setUserContacts = (userContacts) => {
  return {
    type: ACTION_TYPES.SET_USER_CONTACTS,
    userContacts
  };
};

export const setUserChatrooms = (userChatrooms) => {
  return {
    type: ACTION_TYPES.SET_USER_CHATROOMS,
    userChatrooms
  };
};

export const setFCMToken = (fcmToken) => {
  return {
    type: ACTION_TYPES.SET_FCM_TOKEN,
    fcmToken
  };
};

export default ACTION_TYPES;