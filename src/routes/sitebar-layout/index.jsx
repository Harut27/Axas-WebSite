import React, { Component } from "react";
import { Route } from "react-router";
import Navbar from "../../components/app_components/navbar/index";
import SiteBar from "../../components/app_components/site-bar/index";
import "../../global.scss"
import MainImagae from "../../components/app_components/home-main-image"

class CatalogLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <>

        <Navbar />
        <MainImagae/>
        <div className="Sitebar-Layout">
          <SiteBar/>

          <div className="content">
            
            <Route
              {...rest}
              render={matchProps => {
                return <ChildComponent {...matchProps} />;
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CatalogLayout;
