import React, { Component } from "react";
import "../style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import xohanoc1 from "../../../../images/xohanoc/xohanoc1.jpg"
import xohanoc2 from "../../../../images/xohanoc/xohanoc2.jpg"
import xohanoc3 from "../../../../images/xohanoc/xohanoc3.jpg"
import xohanoc4 from "../../../../images/xohanoc/xohanoc4.jpg"


class Officain extends Component{
    render(){
        return(
            <div className="carusel">
                <Carousel
                //  showArrows={true}
                    onChange={false}
                    onClickItem={false}
                    onClickThumb={false}
                    autoPlay={true}
                    interval={"2000"}
                    transitionTime={"350"}
                    infiniteLoop={true}
                    >
                    <div>
                        <img src={xohanoc1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={xohanoc2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={xohanoc3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={xohanoc4} />
                        <p className="legend">Legend 4</p>
                    </div>
                    
                </Carousel>
            </div>
        )
    }
}

export default Officain; 