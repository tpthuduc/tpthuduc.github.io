import React from 'react';
import NewsGridList from './news_grid';
import HideAppBar from './header_bar';
import NewsResponsiveGrid from './news_responsive_grid'

function Home() {
  return (
    <div style ={{backgroundColor: '#F5F7F9'}}>
      {/* <News></News> */}
      <HideAppBar/>
      <NewsGridList/>
    </div>
  );
}

export default Home
