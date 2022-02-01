import React, {Component, Fragment} from 'react';
import './Navigation.scss'

import {NavLink} from "react-router-dom";


class Navigation extends Component{


    renderLinks(links) {
        return links.map((link,index) => {
            return (
                <li key={index} className={'Nav__item'}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )

        })
    }

    render() {

        const links = [
            {to: '/', label: 'Main', exact: true},
            {to:'bots', label: 'Bots', exact: true}
        ];

        return (
            <Fragment>
                <nav >
                    <ul className={'Nav'}>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
            </Fragment>

        );
    }
}

export default Navigation