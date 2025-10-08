import React from 'react';
import HomePage from './pages/HomePage';
import PageTop from './components/pagetop/PageTop';
import TopNavigation from './components/topnavigation/TopNavigation';


function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pagetitle="About Us" />
    </div>
  );
}

export default App;
