import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

function HomePage() {
  const [phoneStatus, setPhoneStatus] = useState(false);
  useEffect(() => {
    setPhoneStatus(window.screen.width <= 768);
  }, []);
  return (
    <div>
      <Header />
      <Home phoneStatus={phoneStatus} />
      <Footer />
    </div>
  );
}

export default HomePage;
