import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation';
import PageTop from '../components/pagetop/PageTop';
import TermsAndCondition from "../components/termsandcondition/TermsAndCondition";
import Footer from '../components/footer/Footer';



class TermsPage extends Component {
  render() {
     return (
       <Fragment>
         <TopNavigation title="Trems And Condition " />
         <PageTop pagetitle="Trems And Condition" />
         <TermsAndCondition />
         <Footer />
       </Fragment>
     );
  }
}

export default TermsPage