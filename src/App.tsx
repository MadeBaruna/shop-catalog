import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import { client } from './graphql/client';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle />
        <Header title="Dress Catalog" />
        <Container>
          <Switch>
            <Route exact path="/" component={Catalog} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default App;
