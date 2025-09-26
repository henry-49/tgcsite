import React from 'react';
import TopBanner from './components/topbanner/TopBanner';
import Services from './components/services/Services';
import TopNavigation from './components/topnavigation/TopNavigation';
import Analysis from './components/analysis/Analysis';


function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner  />
      <Services />
      <Analysis />
    </div>
  );
}

export default App;
