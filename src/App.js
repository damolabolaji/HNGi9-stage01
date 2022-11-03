


import Home from './Home';
import Footer from './Footer';
import Contact from './Contact'



import { Route, Routes } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <div className="content">
        {/* <Routes>
            <Route path='/' element= {<Home/>} />
        </Routes> */}

        <Home/>

        <Contact/>

        <Footer />
        
       

        
      </div>
    </div>
  );
}

export default App;
