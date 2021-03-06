import React, {Component} from 'react';
import classes from './Layout.css';
import Navigation from "../components/Navigation/Navigation";

class Layout extends Component {


    render () {
        return (
            <div className={classes.Layout}>
                <Navigation/>
                <main>
                    {this.props.children}
                </main>
            </div>

        )
    }
}
export default Layout