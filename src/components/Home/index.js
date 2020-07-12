import React from 'react';
import News from './data'
import NewsGridList from './news_grid';
import HideAppBar from './header_bar'

function Home() {
  return (
    <div style ={{backgroundColor: '#fff'}}>
      {/* <News></News> */}
      <HideAppBar/>
      <NewsGridList/>
    </div>
  );
}

export default Home
