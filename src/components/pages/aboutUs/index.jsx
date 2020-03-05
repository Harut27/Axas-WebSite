import React, {Component} from "react";
import "./style.scss";

import OpenPhoto from "../../app_components/open-image/index";
import  { withTranslation } from 'react-i18next';

class AboutUs extends Component{
    render(){
        return(
            <div className="aboutContainer">
                <div className="contant-section">
                AboutUs
                </div>
            </div>
        )
    }
}
export default withTranslation()(AboutUs);