import React from "react";
import './link.css';
function Link({url, title}) {
    return (
        <div className="link text-dark"
            key={title}>
            <a href={url}>
                {title}</a>
        </div>
    )

}
export default Link;
