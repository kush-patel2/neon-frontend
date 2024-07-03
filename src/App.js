
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
import NeonController from './Pages/NeonSigns/NeonController';
import AcrylicLetter from './Pages/LED Board/AcrylicLetter';
import LEDBoard from './Pages/LED Board/LEDBoard';
import Backlight from './Pages/LED Board/Backlight';
import ReversibleBoard from './Pages/LED Board/ReversibleBoard';
import Flex from './Pages/LED Board/Flex';
import BacklitLED from './Pages/LED Board/BacklitLED';
import Gallery from './Pages/Gallery/Gallery';
import CustomNeonFloro from './Pages/CustomizeSigns/CustomNeonFloro';
import CustomMultiColor from './Pages/CustomizeSigns/CustomMultiColor';
import CustomSingleColor from './Pages/CustomizeSigns/CustomSingleColor';

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
        <Route path="/neon-controller" element={<NeonController/>}/>
        <Route path="/acrylic-letters" element={<AcrylicLetter/>}/>
        <Route path="/led-sign-board" element={<LEDBoard/>}/>
        <Route path="/backlight-board" element={ <Backlight/>}/>
        <Route path="/reversible-board" element={ <ReversibleBoard/>}/>
        <Route path="/flex-board" element={ <Flex/>}/>
        <Route path="/backlit-led-board" element={ <BacklitLED/>}/>
        <Route path="/gallery" element={ <Gallery/>}/>
        <Route path="/custom-neon-floro" element={ <CustomNeonFloro/>}/>
        <Route path="/custom-multicolor" element={ <CustomMultiColor/>}/>
        <Route path="/custom-singlecolor" element={ <CustomSingleColor/>}/>
      </Routes>
      <Footer/>
   
      
      
    </div>
  );
}

export default App;
