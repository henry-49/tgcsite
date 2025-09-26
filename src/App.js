import React from 'react';
import TopBanner from './components/topbanner/TopBanner';
import Services from './components/services/Services';
import TopNav from './components/topnav/TopNav';


function App() {
  return (
    <div>
      <TopNav />
      <TopBanner  />
      <Services />
    </div>
  );
}

export default App;
