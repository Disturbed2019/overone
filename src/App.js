import React, {Component} from "react";
import Layout from "./hoc/Layout";
import UserList from "./components/UserList/UserList";
import BotList from "./components/BotList/BotList";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

class App extends Component{
    render() {
        let routes = (
            <Switch>
                <Route path={"/"} exact component={UserList} />
                <Route path={"/bots"}  component={BotList} />
                <Redirect to={'/'}/>
            </Switch>
        );

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}
export default withRouter(App) ;