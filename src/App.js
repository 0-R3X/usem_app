// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Header from './Components/Header';
import Events from './Components/Events';
import PhotoGallery from './Components/AllPhotos/PhotoGallery';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Gallery from './Components/AllPhotos/Gallery';
// import ImageGallery from './Components/AllPhotos/ImageGallery';

function App() {

  return (
    <div>
      <Router>
        <Header />


        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/photos" element={<PhotoGallery/>} />
        </Routes>


        <Footer />
      </Router>
      </div>
  );
}

export default App;
