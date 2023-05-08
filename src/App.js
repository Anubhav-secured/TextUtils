import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/contact';
import {  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light') // whether darkmode is enabled or not 
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='rgb(16 15 16)';
      showalert("Dark Mode has been Enabled","success")
      // document.body.style.backgroundColor='#1a195b';
    }
    else 
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled","success")
    }
  }

  return (
    <>
    <Router>

      <Navbar title='TextAnalyzer' mode={mode} toggleMode={toggleMode} aboutText='About' contacttext='Contact'/>
      <Alert alert={alert}/>
      <div className="container my-3">    
        <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}/>
              <Route exact path="/" element={<TextForm mode={mode} showalert={showalert} heading="Text Analyzer" id="center"/>}/>
              <Route exact path="/contact" element={<Contact mode={mode}/>}/>
        </Routes> 
      </div>
    </Router>
    </>
  );
}

export default App;
