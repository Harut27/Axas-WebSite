import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faInstagram,faYoutube,faViber,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import  { withTranslation } from 'react-i18next';


class ContactUs extends Component{

    render(){
        return(
            <div className="contactContainer">

                contactus
                {/* <div className="picture-section">
                    <img src={Contactimage1} alt=""/>
                </div>
                <div className="adress-section">
                    <span className="contact-title">{this.props.t("contact.1")}</span>


                    <div className="contactData contactMail">
                        <FontAwesomeIcon icon={faEnvelope}/>
                            <span className="contactEmail">hakobiansiranush@gmail.com</span>
                    </div>
                    <div className="contactData contactLocation">
                    <FontAwesomeIcon icon={faLocationArrow}/>
                        <span className="contactAdress">{this.props.t("contact.2")}</span>
                    </div>
                    <div className="contactData contactPhone">
                        <FontAwesomeIcon icon={faPhone}/>
                        <span className="contactPhone">+37494949644</span>
                    </div>
                    <div className="contactViber contactData">
                        <FontAwesomeIcon icon={faViber}/>
                        <span className="contactPhone">+37494949644</span>
                    </div>
                    <div className="contactWhatsapp contactData">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <span className="contactPhone">+37494949644</span>
                    </div>


                    <div className="contact-social-icons">
                        <div className="facebook-icon">
                            <a target="_blank" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        <div className="instagram-icon">
                            <a target="_blank" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                        <div className="youtube-icon">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div> */}
                
            </div>
        )
    }
}
export default withTranslation()(ContactUs);