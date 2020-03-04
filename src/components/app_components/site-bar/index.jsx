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
                    <Link to="/catalog/aksesuar">{this.props.t("sitebar.1")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/catalog/collection">{this.props.t("sitebar.2")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/catalog/dramapanakner">{this.props.t("sitebar.3")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/catalog/gotiner">{this.props.t("sitebar.4")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/catalog/koshikner">{this.props.t("sitebar.5")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/catalog/payusakner">{this.props.t("sitebar.6")}</Link>
                </div>
                <div className="sitebar-link">
                    <Link to="/catalog/sharfer">{this.props.t("sitebar.7")}</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default withTranslation()(SiteBar);