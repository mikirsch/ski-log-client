const onChangeUtil = (event, state) => {
  const newState = { ...state };
  newState[event.target.id] = event.target.value;
  return newState;
};

const formatDate = date => {
  date = tzFix(date);
  return `${date.getFullYear()}-${
    date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()}`;
};

const tzFix = date =>
  new Date(date.setMinutes(date.getMinutes() + date.getTimezoneOffset()));

export { onChangeUtil, formatDate, tzFix };
