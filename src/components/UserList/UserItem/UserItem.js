import React from "react";
import './UserItem.scss';

const UserItem = (props) => {
    return (
        <li className={'UsersItem__content'}>
            <h3 className={'UsersItem__title'}>
                {props.users.name}
            </h3>
            <div className={'UsersItem__info'}>
                <div className={'UsersItem__avatar'}>
                    <img  src={props.users.avatarUrl} alt=""/>
                </div>

            </div>
        </li>

    )
};
export default UserItem