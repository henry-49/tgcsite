import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation';
import PageTop from '../components/pagetop/PageTop';
import DataProtection from "../components/dataprotection/DataProtection";
import Footer from '../components/footer/Footer';


class DataProtectionPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Data Protection " />
        <PageTop pagetitle="Data Protection Policy" />
        <DataProtection />
        <Footer />
      </Fragment>
    );
  }
}

export default DataProtectionPage