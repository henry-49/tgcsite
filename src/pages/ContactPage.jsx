import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation'
import PageTop from '../components/pagetop/PageTop'
import Footer from '../components/footer/Footer'
import ContactUs from '../components/contactus/ContactUs'

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Contact Us" />
        <ContactUs />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage