import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header title="Dress Catalog" />
    </Router>
  );
};

export default App;
