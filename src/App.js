
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Temp from './Components/Temp/Temp';
import Carousel from './Components/Carousel/Carousel'
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
