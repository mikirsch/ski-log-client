import React from 'react';
import ReactDOM from 'react-dom';
import ViewData from './ViewData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
