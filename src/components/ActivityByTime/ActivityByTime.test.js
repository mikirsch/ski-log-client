import React from 'react';
import ReactDOM from 'react-dom';
import ActivityByTime from './ActivityByTime';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActivityByTime logs={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
