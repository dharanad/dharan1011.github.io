import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from 'antd';
import HeaderMenu from './HeaderMenu';
import PageFooter from './PageFooter';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';
const App = () => {
  const {Header, Content, Footer} = Layout;
  return (
    <React.Fragment>
      <Layout>
        <Header>
          <HeaderMenu />
        </Header>
        <Content className="site-layout-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Content>
        <Footer>
          <PageFooter />
        </Footer>
      </Layout>
    </React.Fragment>
  );
};

export default App;
