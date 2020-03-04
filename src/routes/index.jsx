import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import GuestLayout from "./guest-layout";
import SitebarLayout from "./sitebar-layout"
import Home from "../components/pages/home";
import AboutUs from "../components/pages/aboutUs";
import ContactUs from "../components/pages/contactUs";
import Services from "../components/pages/services";

// import Aksesuar from "../components/pages/catalog/aksesuar";
// import Collection from "../components/pages/catalog/collection";
// import Dramapanakner from "../components/pages/catalog/dramapanakner";
// import Gotiner from "../components/pages/catalog/gotiner";
// import Koshikner from "../components/pages/catalog/koshikner";
// import Payusakner from "../components/pages/catalog/payusakner";
// import Sharfer from "../components/pages/catalog/sharfer";
// import TnainDekorner from "../components/pages/catalog/tnayin-dekorner";


const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <GuestLayout exact path="/" component={Home} />;
        <GuestLayout exact path="/home" component={Home} />; */}
        <GuestLayout exact path="/aboutus" component={AboutUs} />;
        <GuestLayout exact path="/contactus" component={ContactUs} />;
        <GuestLayout exact path="/services" component={Services} />;

        <SitebarLayout exact path="/home" component={Home} />;
        <SitebarLayout exact path="/" component={Home} />;
        {/* <SitebarLayout exact path="/home/collection" component={Collection} />;
        <SitebarLayout exact path="/home/dramapanakner" component={Dramapanakner} />;
        <SitebarLayout exact path="/home/gotiner" component={Gotiner} />;
        <SitebarLayout exact path="/home/koshikner" component={Koshikner} />;
        <SitebarLayout exact path="/home/payusakner" component={Payusakner} />;
        <SitebarLayout exact path="/home/sharfer" component={Sharfer} />;
        <SitebarLayout exact path="/home/tnainDekorner" component={TnainDekorner} />; */}

       
      </Switch>
    </Router>
  );
};

export default Routes;
