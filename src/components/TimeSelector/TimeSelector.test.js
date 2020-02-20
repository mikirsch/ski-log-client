import React from 'react';
import ReactDOM from 'react-dom';
import TimeSelector from './TimeSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TimeSelector
      beginDate="1234-12-12"
      endDate="1234-12-13"
      changeHandler={() => null}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
