import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import TrainingPage from "../pages/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import DataProtectionPage from "../pages/DataProtectionPage";
import ImpressumPage from "../pages/ImpressumPage";

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
            <Route path="/data-protection" element={<DataProtectionPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default AppRouter;
