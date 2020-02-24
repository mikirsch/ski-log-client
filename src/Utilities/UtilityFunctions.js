const onChangeUtil = (event, state) => {
  const newState = { ...state };
  newState[event.target.id] = event.target.value;
  return newState;
};

const formatDate = date => {
  return `${date.getFullYear()}-${
    date.getUTCMonth() < 9
      ? '0' + (date.getUTCMonth() + 1)
      : date.getUTCMonth() + 1
  }-${date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate()}`;
};

export { onChangeUtil, formatDate };
