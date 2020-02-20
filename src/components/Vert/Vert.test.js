import React from 'react';
import ReactDOM from 'react-dom';
import Vert from './Vert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vert />, div);
  ReactDOM.unmountComponentAtNode(div);
});
