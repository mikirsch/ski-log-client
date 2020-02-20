import React from 'react';
import ReactDOM from 'react-dom';
import ActivitySummary from './ActivitySummary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActivitySummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
