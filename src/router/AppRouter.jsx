import React, { Component, Fragment } from "react";
import { Row, Card, Col, Container, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import TrainingPage from "../pages/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default AppRouter;
