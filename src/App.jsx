import React from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'

const App = () => {
  return (
    <>
    <div id="main" className='overflow-hidden'>
      <Header />
      <Page1  />
      <Page2  />
      <Page3  />
      <Page4  />
      <Page5  />
      <Page6  />
      <Page7  />
      <Page8  />
      <Page9  />
    </div>
    </>
  )
}

export default App