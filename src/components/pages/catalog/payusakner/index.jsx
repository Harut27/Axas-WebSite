import React, {Component} from "react";
import "../style.scss";
import OpenPhoto from "../../../app_components/open-image/index";




const images = []


class Payusakner extends Component{

    render(){
        return(
            <div className="payusakner-container">
                <div className="payusakner-wrapper centered">
                    {/* {
                        images.map((image,index)=>{
                            return(
                                <div className={`${image} img bigest-cart`} key={index}>
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

export default Payusakner;