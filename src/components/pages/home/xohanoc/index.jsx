import React, {Component} from "react";
import "../style.scss"
import  { withTranslation } from 'react-i18next';
import ImageCart from "../../../app_components/image-cart";

import Xohanoc1 from "../../../../images/xohanoc/xohanoc1.jpg";
import Xohanoc2 from "../../../../images/xohanoc/xohanoc2.jpg";
import Xohanoc3 from "../../../../images/xohanoc/xohanoc3.jpg";
import Xohanoc4 from "../../../../images/xohanoc/xohanoc4.jpg";
import Xohanoc5 from "../../../../images/xohanoc/xohanoc5.jpg";
import Xohanoc6 from "../../../../images/xohanoc/xohanoc6.jpg";
import Xohanoc7 from "../../../../images/xohanoc/xohanoc7.jpg";
import Xohanoc8 from "../../../../images/xohanoc/xohanoc8.jpg";
import Xohanoc9 from "../../../../images/xohanoc/xohanoc9.jpg";
import Xohanoc10 from "../../../../images/xohanoc/xohanoc10.jpg";
import Xohanoc11 from "../../../../images/xohanoc/xohanoc11.jpg";
import Xohanoc12 from "../../../../images/xohanoc/xohanoc12.jpg";
import Xohanoc13 from "../../../../images/xohanoc/xohanoc13.jpg";
import Xohanoc14 from "../../../../images/xohanoc/xohanoc14.jpg";
import Xohanoc15 from "../../../../images/xohanoc/xohanoc15.jpg";
import Xohanoc16 from "../../../../images/xohanoc/xohanoc16.jpg";
import Xohanoc17 from "../../../../images/xohanoc/xohanoc17.jpg";


const images = [Xohanoc1,Xohanoc2,Xohanoc3,Xohanoc4,Xohanoc5,Xohanoc6,Xohanoc7,Xohanoc8,Xohanoc9,Xohanoc10,Xohanoc11,Xohanoc12,Xohanoc13,Xohanoc14,Xohanoc15,Xohanoc16,Xohanoc17]

class Xohanoc extends Component{

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

export default withTranslation()(Xohanoc)