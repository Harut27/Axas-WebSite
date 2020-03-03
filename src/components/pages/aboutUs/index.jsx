import React, {Component} from "react";
import "./style.scss";

import OpenPhoto from "../../app_components/open-image/index";
import  { withTranslation } from 'react-i18next';

class AboutUs extends Component{
    render(){
        return(
            <div className="aboutContainer">
                <div className="contant-section">
                    <div className="about-img">
                        <div className="about4">

                        </div>
                        <div className="about1">
                            {/* <OpenPhoto src={about1} /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withTranslation()(AboutUs);