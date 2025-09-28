import React from 'react';
import TopBanner from './components/topbanner/TopBanner';
import Services from './components/services/Services';
import TopNavigation from './components/topnavigation/TopNavigation';
import Analysis from './components/analysis/Analysis';
import Summary from './components/summary/Summary';


function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner  />
      <Services />
      <Analysis />
      <Summary />
    </div>
  );
}

export default App;
