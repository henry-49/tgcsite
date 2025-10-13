import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation';
import PageTop from '../components/pagetop/PageTop';
import Impressum from '../components/impressum/Impressum';
import Footer from '../components/footer/Footer';

class ImpressumPage extends Component {
  render() {
     return (
          <Fragment>
            <TopNavigation title="Impressum" />
            <PageTop pagetitle="Impressum" />
            <Impressum />
            <Footer />
          </Fragment>
        );
  }
}

export default ImpressumPage