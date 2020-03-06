import React, { Component } from "react";
import "../style.scss";
import ImageCart from "../../../app_components/image-cart";

import Nnjasenyak0 from "../../../../images/nnjasenyak/nnjasenyak.jpg";
import Nnjasenyak1 from "../../../../images/nnjasenyak/nnjasenyak1.jpg";
import Nnjasenyak2 from "../../../../images/nnjasenyak/nnjasenyak2.jpg";
import Nnjasenyak3 from "../../../../images/nnjasenyak/nnjasenyak3.jpg";
import Nnjasenyak4 from "../../../../images/nnjasenyak/nnjasenyak4.jpg";
import Nnjasenyak5 from "../../../../images/nnjasenyak/nnjasenyak5.jpg";
import Nnjasenyak6 from "../../../../images/nnjasenyak/nnjasenyak6.jpg";
import Nnjasenyak7 from "../../../../images/nnjasenyak/nnjasenyak7.jpg";
import Nnjasenyak8 from "../../../../images/nnjasenyak/nnjasenyak8.jpg";
import Nnjasenyak9 from "../../../../images/nnjasenyak/nnjasenyak9.jpg";
import Nnjasenyak10 from "../../../../images/nnjasenyak/nnjasenyak10.jpg";
import Nnjasenyak11 from "../../../../images/nnjasenyak/nnjasenyak11.jpg";
import Nnjasenyak12 from "../../../../images/nnjasenyak/nnjasenyak12.jpg";
import Nnjasenyak13 from "../../../../images/nnjasenyak/nnjasenyak13.jpg";
import Nnjasenyak14 from "../../../../images/nnjasenyak/nnjasenyak14.jpg";

const images = [Nnjasenyak0,Nnjasenyak1,Nnjasenyak2,Nnjasenyak3,Nnjasenyak4,Nnjasenyak5,Nnjasenyak6,Nnjasenyak7,Nnjasenyak8,Nnjasenyak9,Nnjasenyak10,Nnjasenyak11,Nnjasenyak12,Nnjasenyak13,Nnjasenyak14]


class Nnjasenyak extends Component{

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

export default Nnjasenyak; 