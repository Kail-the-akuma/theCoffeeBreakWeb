import React from 'react'

import{Header,  Footer, Blog, Features, Possibility, WhatGPT3} from './containers';
import {CTA, Brand, Nav} from './components';



const App = () => {
  return (
    <div className='App'>
      {/*Header Section*/}
      <div className='GradientBG'>
        <Nav/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App