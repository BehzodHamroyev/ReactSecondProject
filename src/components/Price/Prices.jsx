import React from 'react';
import './Price.css';
import Price from './Price';
import Fade from 'react-reveal/Fade';
const data = [
    {
        title: "FREE",
        subTitle: "Organize across all apps by hand",
        price: "0$"

    }, {
        title: "Silver",
        subTitle: "Organize across all apps by hand",
        price: "9.99$"

    }, {
        title: "FRGOLDEE",
        subTitle: "Organize across all apps by hand",
        price: "19.99$"

    }
]
function Prices() {
    return (
        <div className="container Price text-white">
            <div className="row">
                {
                data.map((v, i) => {
                    return (
                        <div className="col-md-4 mb-3">
                            <Fade bottom><Price title={
                                        `${
                                            v.title
                                        }`
                                    }
                                    subTitle={
                                        `${
                                            v.subTitle
                                        }`
                                    }
                                    price={
                                        `${
                                            v.price
                                        }`
                                    }/></Fade>

                        </div>
                    )

                })
            } </div>
        </div>
    )


}
export default Prices;
