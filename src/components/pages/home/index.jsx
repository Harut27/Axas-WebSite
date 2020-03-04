import React, {Component} from "react";
// import "./style.scss"
// import logo from "../../../images/logos/logo-white.png"
import  { withTranslation } from 'react-i18next';

class Home extends Component{

    render(){

    // const { t, i18n } = useTranslation();

        return(
            <div className="homeContainer">
                <div className="home-wrapper">
                   Home
                </div>
            </div>
        )
    }
}

export default withTranslation()(Home)