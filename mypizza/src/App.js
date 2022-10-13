import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import About from './About';
import Pizzatypes from './Pizzatypes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Slider/>
      <About/>
      <Pizzatypes/>
      <Footer/>

    </div>
  );
}

export default App;
