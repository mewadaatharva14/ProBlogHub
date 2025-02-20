import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Register from './components/register';
import Login from './components/login';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/category/:id' component={Category} />
                <Route exact path='/blog/:id' component={BlogDetail} />
            </Switch>
        </Layout>
    </Router>
);

export default App;
