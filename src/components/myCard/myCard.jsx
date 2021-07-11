import React from "react";
import './myCard.css';
import User from './user.svg'
class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return <div className="col-md-6 col-lg-4">
            <div className="myCard">
                <img className="m-0" src={User}
                    alt=""/>
                <div className="ml-3">
                    <p  className="text-white m-0 fw-bold">
                        {
                        this.state.title
                    }</p>
                    <p className="text-white  m-0 mt-2">
                        {
                        this.state.subTitle
                    }</p>
                </div>
            </div>

        </div>

    }


}
export default MyCard;
