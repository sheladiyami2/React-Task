import './App.css';
import $ from 'jquery';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./style/bootstrap.min.css";
import "./style/mystyle.css";
import "./style/responsive.css";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Updatemap from './Component/Update/Updatemap';
import Carouselmap from './Component/Carousel/Carouselmap';

function App() {
  return (
    <>
      <Header/>
      <Carouselmap/>
      <Updatemap/>
      <Footer/>
      
      </>
  )


}

export default App
