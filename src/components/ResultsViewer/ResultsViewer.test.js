import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResultsViewer from './ResultsViewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ResultsViewer results={[]} type="list" />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
