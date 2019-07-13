import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import { client } from './graphql/client';
import ProductDetail from './pages/ProductDetail';
import ProductsPage from './pages/ProductsPage';

const Container = styled.div`
  max-width: 480px;
  margin: 56px auto 0 auto;
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
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/products/:id" component={ProductsPage} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default App;
