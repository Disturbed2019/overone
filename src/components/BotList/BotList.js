import React, {Component,Fragment} from "react";
import './BotList.scss'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchBots, searchBots} from "../../store/actions/botsList";
import BotItem from "./BotItem/BotItem";

class BotList extends Component{

    renderBots() {
        return  this.props.bots.bots.map((item ) => {
            // console.log(item)
            return <BotItem
                bots = {item}
                key={item.id}
            />
        })
    }



    componentDidMount() {
        this.props.fetchBots();

    }


    render() {
        return (
            <Fragment>
                <div className={'BotList'}>
                    <h1 className={'BotList__title'}>Bots List</h1>
                    <div className="BotList__inner">
                        <ul>
                            {
                                this.props.bots.loading
                                    ? <Loader />
                                    : <Fragment>
                                        {this.renderBots()}
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
        bots: state.bots,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBots: () => dispatch(fetchBots()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BotList)