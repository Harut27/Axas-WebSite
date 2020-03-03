import React, {Component} from "react";
import "../style.scss";
import OpenPhoto from "../../../app_components/open-image/index";


// import Sharfer11 from "../../../../images/catalog/sharfer/Sharfer11.jpg";

const images = []

class Sharfer extends Component{

    render(){
        return(
            <div className="shatfer-container">
                <div className="sharfer-wrapper centered">
                    {/* {
                        images.map((image,index)=>{
                            return(
                                <div className={`${image} img big-cart`} key={index}>
                                    <OpenPhoto src={image} kay={index}/>
                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
        )
    }
}

export default Sharfer;