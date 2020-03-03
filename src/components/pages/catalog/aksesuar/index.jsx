import React, {Component} from "react";
import "../style.scss";
import OpenPhoto from "../../../app_components/open-image/index";


// import Accessories1 from "../../../../images/catalog/acsesuarner/Accessories1.jpg";


const images = []



class Aksesuar extends Component{

    render(){
        return(
            <div className="aksesuar-page">
                <div className="aksesuarner-wrapper centered">
                    {/* {
                        images.map((image,index)=>{
                            return(
                                <div className={`${image} img big-cart`} key={index}>
                                    <OpenPhoto src={image} kay={index}/>
                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
        )
    }
}

export default Aksesuar;