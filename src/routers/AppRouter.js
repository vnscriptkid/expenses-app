import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>            
            <Header></Header>       
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/create" component={AddExpensePage}/>                
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;