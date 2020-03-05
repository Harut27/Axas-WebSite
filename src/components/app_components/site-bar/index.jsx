import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import  { withTranslation } from 'react-i18next';



class SiteBar extends Component{

    render(){

    return(
        <div>
            <div className="sitebar-manu">
                <div className="sitebar-link">
                    <Link to="/home/nnjasenyak">{this.props.t("sitebar.1")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/home/xohanoc">{this.props.t("sitebar.2")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/home/chashasenyak">{this.props.t("sitebar.3")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/home/mankakan">{this.props.t("sitebar.4")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/home/officain">{this.props.t("sitebar.5")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/home/naxasrah">{this.props.t("sitebar.6")}</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default withTranslation()(SiteBar);