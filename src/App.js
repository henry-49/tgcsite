import React from 'react';
import TopBanner from './components/topbanner/TopBanner';
import Services from './components/services/Services';
import TopNavigation from './components/topnavigation/TopNavigation';
import Analysis from './components/analysis/Analysis';
import Summary from './components/summary/Summary';
import RecentProject from './components/recentproject/RecentProject';
import Courses from './components/courses/Courses';


function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner  />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
    </div>
  );
}

export default App;
