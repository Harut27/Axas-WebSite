import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import SitebarLayout from "./sitebar-layout"
import AboutUs from "../components/pages/aboutUs";
import ContactUs from "../components/pages/contactUs";
import Services from "../components/pages/services";

import Nnjasenyak from "../components/pages/home/nnjasenyak";
import Xohanoc from "../components/pages/home/xohanoc";
import Chashasenyak from "../components/pages/home/chashasenyak";
import Mankakan from "../components/pages/home/mankakan";
import Officain from "../components/pages/home/officain";
import Naxasrah from "../components/pages/home/naxasrah";




const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/aboutus" component={AboutUs} />;
        <GuestLayout exact path="/contactus" component={ContactUs} />;
        <GuestLayout exact path="/services" component={Services} />;

        <SitebarLayout exact path="/" component={Nnjasenyak} />;
        <SitebarLayout exact path="/home" component={Nnjasenyak} />;
        <SitebarLayout exact path="/home/nnjasenyak" component={Nnjasenyak} />;
        <SitebarLayout exact path="/home/xohanoc" component={Xohanoc} />;
        <SitebarLayout exact path="/home/chashasenyak" component={Chashasenyak} />;
        <SitebarLayout exact path="/home/mankakan" component={Mankakan} />;
        <SitebarLayout exact path="/home/officain" component={Officain} />;
        <SitebarLayout exact path="/home/naxasrah" component={Naxasrah} />;



        
      </Switch>
    </Router>
  );
};

export default Routes;
