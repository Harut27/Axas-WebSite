import React, { Component } from "react";
import "./style.scss";

const ImageCart = (src)=>{

        return(
            <div className="imageCart">
                <img src={src} alt=""/>
            </div>
        )
}

export default ImageCart;