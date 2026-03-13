import React, { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import locomotiveScroll from "locomotive-scroll";

function App() {

  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: 200,
    });
  });


  return (
    <div ref={scrollRef}>
      <LandingPage/>
    </div>
  )
}

export default App
