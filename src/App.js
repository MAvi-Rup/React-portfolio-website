import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>

      <Footer></Footer>

      <ToastContainer />

    </div>
  );
}

export default App;
