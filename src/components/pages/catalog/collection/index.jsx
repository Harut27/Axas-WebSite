import React, {Component} from "react";
import "../style.scss";
import OpenPhoto from "../../../app_components/open-image/index";



// import CollMar46 from "../../../../images/catalog/collection/CollectionMarine46.jpg";


const images = []



class Collection extends Component{

    render(){
        return(
            <div className="collection-container">
                <div className="collection-wrapper centered">
                    {/* {
                        images.map((image,index)=>{
                            return(
                                <div className={`${image} img medium-cart`} key={index}>
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

export default Collection;