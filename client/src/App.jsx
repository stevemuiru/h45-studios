import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Atelier from './pages/Atelier';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/atelier/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
