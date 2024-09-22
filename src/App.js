// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Header from './Components/Header';
import Events from './Components/Events';
import PhotoGallery from './Components/AllPhotos/PhotoGallery';
import ScrollToTop from './Components/scrollToTop'; 

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import ClubJoin from './Components/ClubJoin';

function App() {

  return (
    <div>
      <Router>
        {/* <PopupPoster/> */}
        <Header />


        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>} />
          <Route path="/events" element={<><Events/></>} />
          <Route path="/photos" element={<PhotoGallery/>} />
          <Route path="/join" element={<ClubJoin/>} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </Router>
      </div>
  );
}

export default App;
