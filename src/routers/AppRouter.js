import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter, Router } from 'react-router-dom';
import history from './history';
import routes from './routes';


class AppRouter extends Component {

    componentDidUpdate(prevProps) {        
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        let renderedRoutes;              
        const userType = !this.props.token ? 0 : this.props.userType;        
        renderedRoutes = routes.filter(r => r.visibility === userType).map(r => {            
            let DynamicComponent = r.component;
            return <Route key={r.name} path={r.routePath} render={(props) => <DynamicComponent {...props} key={r.name} />} />
        }); 
        
        return (
            <Router history={history}>
                <Switch>
                    {renderedRoutes}
                    <Redirect to="/" />
                </Switch>            
            </Router>
        );
    }
}

export default withRouter(AppRouter);