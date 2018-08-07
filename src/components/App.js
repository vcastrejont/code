import React, { Component } from 'react';
import Header from './Header';
import Aside from './Aside';
import Posts from './Posts';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div  className="container">
        <Header />
        <Aside />
        <main><Posts /></main>
        <Footer />
      </div>
    );
  }
}

export default App;
