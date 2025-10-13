import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation';
import PageTop from '../components/pagetop/PageTop';
import TermsAndCondition from "../components/termsandcondition/TermsAndCondition";
import Footer from '../components/footer/Footer';



class TermsPage extends Component {
  render() {
     return (
       <Fragment>
         <TopNavigation title="Terms And Condition " />
         <PageTop pagetitle="Terms And Condition" />
         <TermsAndCondition />
         <Footer />
       </Fragment>
     );
  }
}

export default TermsPage