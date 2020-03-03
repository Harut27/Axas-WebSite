import React, {Component} from "react";
import "../style.scss";
import OpenPhoto from "../../../app_components/open-image/index";


// import Dramapanak1 from "../../../../images/catalog/dramapanakner/Dramabanak1.jpg";


const images = []

class Dramapanakner extends Component{

    render(){
        return(
            <div className="dramapanakner-container">
                <div className="dramapanakner-wrapper centered">
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

export default Dramapanakner;