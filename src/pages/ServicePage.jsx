import React, { Component, Fragment } from "react";
import TopNavigation from "../components/topnavigation/TopNavigation";
import PageTop from "../components/pagetop/PageTop";
import Footer from "../components/footer/Footer";
import Services from "../components/services/Services";
import ContactUs from "../components/contactus/ContactUs";

class ServicePage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation />
            <PageTop pagetitle="Our Services" />
            <Services />
            <ContactUs />
            <Footer />
        </Fragment>
    )
  }
}

export default ServicePage;
