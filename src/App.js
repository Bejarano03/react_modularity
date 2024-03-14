import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {ContentA} from './components/ContentA';
import {ContentB} from './components/ContentB';

export default function App() {
  return (
    <>
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </>
  )
}
