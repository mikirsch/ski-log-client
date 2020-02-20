import React from 'react';
import ReactDOM from 'react-dom';
import VertCalcSection from './VertCalcSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VertCalcSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
