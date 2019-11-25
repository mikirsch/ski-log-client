const onChangeUtil = (event, state) => {
  const newState = { ...state };
  newState[event.target.id] = event.target.value;
  return newState;
};

const formatDate = date => {
  return `${date.getFullYear()}-${
    date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()}`;
};

export { onChangeUtil, formatDate };
