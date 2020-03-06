import React, { Component } from "react";
import "../style.scss";
import ImageCart from "../../../app_components/image-cart";


import Chashasenyak1 from "../../../../images/chashasenyak/chashasenyak1.jpg";
import Chashasenyak2 from "../../../../images/chashasenyak/chashasenyak2.jpg";
import Chashasenyak3 from "../../../../images/chashasenyak/chashasenyak3.jpg";
import Chashasenyak4 from "../../../../images/chashasenyak/chashasenyak4.jpg";
import Chashasenyak5 from "../../../../images/chashasenyak/chashasenyak5.jpg";
import Chashasenyak6 from "../../../../images/chashasenyak/chashasenyak6.jpg";


const images = [Chashasenyak1,Chashasenyak2,Chashasenyak3,Chashasenyak4,Chashasenyak5,Chashasenyak6]


class Chashasenyak extends Component{
    render(){
        return(
            <div className="homeContent">
                <div className="renderSection">
                    {
                        images.map((image,index)=>{
                            return(
                                <ImageCart src={image} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Chashasenyak; 