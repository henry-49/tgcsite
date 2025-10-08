import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavigation from '../components/topnavigation/TopNavigation'
import PageTop from '../components/pagetop/PageTop'
import AllCourses from '../components/allcourses/AllCourses'
import Footer from '../components/footer/Footer'

class AllCoursePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="All Courses" />
        <AllCourses />
        <Footer />
      </Fragment>
    )
  }
}

export default AllCoursePage