import React from "react";

const Title = ({ title }) => {
    return (  
        <div className="title">
            <h2>{title ? title : "default title"}</h2>
            <div className="underline"></div>
        </div>
    );
}
 
export default Title;