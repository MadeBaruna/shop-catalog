import React from 'react';
import styled from 'styled-components';
import { Icon as SemanticIcon } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Div = styled.div`
  background: white;
  border-bottom: 1px solid #d9d9d9;
  height: 56px;
  position: fixed;
  width: 100%;
  top: 0;
`;

const Content = styled.div`
  max-width: 480px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
`;

const Title = styled.h3`
  color: #525252;
  margin: 0;
  flex: 1;
  padding-left: 8px;
`;

const Icon = styled(SemanticIcon)`
  color: #525252;
  margin: 0;
  padding: 0 5px;
  cursor: pointer;
`;

interface IProps extends RouteComponentProps<{}> {
  title: string;
}

const Header: React.FC<IProps> = ({ location, history, title }) => (
  <Div>
    <Content>
      {location.pathname !== '/' && (
        <Icon onClick={() => history.goBack()} name="arrow left" size="large" />
      )}
      <Title>{location.state ? location.state.title : title}</Title>
    </Content>
  </Div>
);

export default withRouter(Header);
