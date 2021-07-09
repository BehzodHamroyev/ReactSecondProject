import React from 'react';
import './content.css';
function Content({title, subtitle}) {
    return (
        <div className="content ">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center w-50">
                        {title}</h1>
                    <p className="text-center w-50">
                        {subtitle}</p>
                </div>
            </div>
        </div>
    )

}
export default Content;
