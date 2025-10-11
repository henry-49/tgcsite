import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/topnavigation/TopNavigation'
import PageTop from '../components/pagetop/PageTop'
import AllCourses from '../components/allcourses/AllCourses'
import Footer from '../components/footer/Footer'

class AllCoursePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation  title="All Training" />
        <PageTop pagetitle="All Training" />
        <AllCourses />
        <Footer />
      </Fragment>
    )
  }
}

export default AllCoursePage