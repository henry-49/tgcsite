import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation'
import PageTop from '../components/pagetop/PageTop'
import AllProjects from '../components/allprojects/AllProjects'
import Footer from '../components/footer/Footer'

class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Portfolio" />
        <PageTop pagetitle="Our Portfolio" />
        <AllProjects />
        <Footer />
      </Fragment>
    );
  }
}

export default PortfolioPage;