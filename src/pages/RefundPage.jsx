import React, { Component, Fragment } from "react";
import TopNavigation from "../components/topnavigation/TopNavigation";
import PageTop from "../components/pagetop/PageTop";
import RefundDescription from "../components/refundescription/RefundDescription";
import Footer from "../components/footer/Footer";

class RefundPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy" />
        <PageTop pagetitle="Refund Policy" />
        <RefundDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default RefundPage;
