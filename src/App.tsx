import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Catalog from './pages/Catalog';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header title="Dress Catalog" />
      <Container>
        <Switch>
          <Route exact path="/" component={Catalog} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
