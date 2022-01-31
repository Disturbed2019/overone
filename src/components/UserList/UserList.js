import React, {Component,Fragment} from "react";
import './UserList.scss'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchUsers, searchUsers} from "../../store/actions/usersList";
import UserItem from "./UserItem/UserItem";

class UserList extends Component{

    renderUsers() {
        return  this.props.users.users.map((item ) => {
            return <UserItem
                 users = {item}
                 key={item.id}
            />
        })
    }



    componentDidMount() {
        this.props.fetchUsers();

    }


    render() {
        return (
            <Fragment>
                {/*<div>*/}
                {/*    <input type="text" className={'input'}/>*/}
                {/*    <button onClick={this.props.searchUsers}>search</button>*/}
                {/*    <button onClick={this.props.fetchUsers}>Reset</button>*/}
                {/*</div>*/}


                <div className={'UserList'}>
                    <h1 className={'UserList__title'}>Users List</h1>
                    <div className="UserList__inner">
                        <ul>
                            {
                                this.props.users.loading
                                    ? <Loader />
                                    : <Fragment>
                                        {this.renderUsers()}
                                    </Fragment>
                            }
                        </ul>

                    </div>
                </div>
            </Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        // searchUsers: () => dispatch(searchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList)