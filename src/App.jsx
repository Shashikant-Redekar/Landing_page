import { useState } from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Menu from './Components/Menu/menu';
import Reviews from './Components/Reviews/reviews';
import Contacts from './Components/Contacts/contacts';
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Header />
      <section id='home'><Home /></section>
      <section id='about'><About /></section>
      <section id='menu'><Menu /></section>
      <section id='review'><Reviews /> </section>
      <section id='contact'><Contacts /></section>
    </React.Fragment>
  )
}

export default App
