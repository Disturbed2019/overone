import React from "react";
import './BotItem.scss';

const BotItem = (props) => {
    console.log(props)
    return (
        <li className={'BotItem__content'}>
            <h3 className={'BotItem__title'}>
                {props.bots.name}
            </h3>
        </li>

    )
};
export default BotItem