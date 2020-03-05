import React, {Component} from "react";
import "./style.scss";
import OpenPhoto from "../../app_components/open-image/index";

import  { withTranslation } from 'react-i18next';



class Services extends Component{

    render(){
        return(
            <div className="servicesContainer">
               Services
                
            </div>
        )
    }
}
export default withTranslation()(Services);