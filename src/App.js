import React, { Component } from 'react';
import { BrowserRouter as Router,
        Routes,
         Route
        } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import Homepage from './pages/Homepage';
import Navbar from './pages/Navbar';
import './App.css';

class App extends Component {
  render() {
  return(
    <Router>
       <div className="App">
          <Navbar />
          <div id="page-body">
      
      <Routes>
         <Route path='/' element={<Homepage />} />
         <Route path='/about' element={<AboutPage/>} />

         <Route path='/article/:name' element={<ArticlePage/>}  />
         
     </Routes>
     </div>
        
       
       
     {/* <AboutPage/> */}
    </div>

    </Router>
    
    
  
  );
  }
}

export default App;
