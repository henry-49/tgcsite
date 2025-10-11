import React, { Component, Fragment } from 'react'
import TopBanner from '../components/topbanner/TopBanner';
import Services from '../components/services/Services';
import TopNavigation from '../components/topnavigation/TopNavigation';
import Analysis from '../components/analysis/Analysis';
import Summary from '../components/summary/Summary';
import RecentProject from '../components/recentproject/RecentProject';
import Courses from '../components/courses/Courses';
import Video from '../components/video/Video';
import ClientReview from '../components/clientreview/ClientReview';
import AboutUs from '../components/about/AboutUs';
import Footer from '../components/footer/Footer';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Tech Solutions Consult Page" />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Courses />
        <Video />
        <ClientReview />
        <AboutUs />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage