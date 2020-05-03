export const ACTION_TYPES = {
  ACTION_TYPE: 'ACTION::TYPE',
};

export const setActionType = (param) => ({
  type: ACTION_TYPES.ACTION_TYPE,
  payload: param,
});
