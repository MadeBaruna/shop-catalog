import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <h1>Start</h1>
    </div>
  );
}

export default App;
