
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contactus from './Pages/Contactus/Contactus';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import NeonGo from './Pages/NeonGo/NeonGo';
import NeonFloro from './Pages/NeonSigns/NeonFloro';
import MulticolorNeon from './Pages/NeonSigns/MulticolorNeon';
import SingleColorNeon from './Pages/NeonSigns/SingleColorNeon';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/neongo' element={<NeonGo/>}/>
        <Route path="/neonfloro" element={<NeonFloro/>}/>
        <Route path="/multicolorneon" element={<MulticolorNeon/>}/>
        <Route path="/singlecolorneon" element={<SingleColorNeon/>}/>
      </Routes>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
