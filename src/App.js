import React from 'react';

import { Form, Repo } from './pages';
import { Header } from './layout';

import './App.css';

function App(){

  return(
    <>
      <Header />
        <Form/>
        <Repo/>
      <Footer />
    </>
  );

};

export default App;