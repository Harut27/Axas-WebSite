import React, {Component} from "react";
import "../style.scss"
import  { withTranslation } from 'react-i18next';

class Home extends Component{

    render(){
        return(
            <div className="homeContent">
                <div className="renderSection">
                   Xohanoc
                </div>
            </div>
        )
    }
}

export default withTranslation()(Home)