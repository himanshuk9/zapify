import React from 'react'
import Hero from './Hero';
import Topf from './Topf';
import Newcollection from './Newcollection';
import Features from './Features';
import Item from './Item';
import Footer from './Footer';
import Bottomfeatures from './Bottomfeatures';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Hero />
      <Topf/>
      <Newcollection/>
      <Features />
      <Item />
      <Bottomfeatures />
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
