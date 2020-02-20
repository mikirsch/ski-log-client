import React from 'react';
import ReactDOM from 'react-dom';
import DisplayLog from './DisplayLog';

it('renders without crashing with minimal information', () => {
  const testLog = {
    date: new Date()
  };
  const div = document.createElement('div');
  ReactDOM.render(<DisplayLog log={testLog} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with all information', () => {
  const testLog = {
    date: new Date()
  };
  const div = document.createElement('div');
  ReactDOM.render(<DisplayLog log={testLog} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
