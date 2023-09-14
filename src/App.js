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
import CarouselWithContent from './Components/CarouselWithContent';
import ContentWithCarousel from './Components/ContentWithCarousel';
import ClubJoin from './Components/ClubJoin';
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
          <Route path="/events" element={<><Events/><CarouselWithContent/><ContentWithCarousel/></>} />
          <Route path="/photos" element={<PhotoGallery/>} />
          <Route path="/join" element={<ClubJoin/>} />
        </Routes>


        <Footer />
      </Router>
      </div>
  );
}

export default App;
