import React from 'react';
import styled from 'styled-components';
import { Icon as SemanticIcon } from 'semantic-ui-react'

const Div = styled.div`
  background: white;
  border-bottom: 1px solid #d9d9d9;
  height: 56px;
`;

const Content = styled.div`
  max-width: 480px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h3`
  color: #525252;
  margin: 0;
  flex: 1;
`;

const Icon = styled(SemanticIcon)`
  color: #525252;
  margin: 0;
  padding: 0 30px 0 10px;
`;

const Header: React.FC = () => (
  <Div>
    <Content>
      <Icon name="arrow left" size="large" />
      <Title>Title</Title>
      <Icon name="search" size="large" />   
    </Content>
  </Div>
);

export default Header;