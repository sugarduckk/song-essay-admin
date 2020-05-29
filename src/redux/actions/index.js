const ACTION_TYPES = {
  SET_STATE: 'SET_STATE'
};

export const setState = (obj) => {
  return {
    type: ACTION_TYPES.SET_STATE,
    obj
  };
};

export default ACTION_TYPES;