import {Outlet} from 'react-router-dom';

import Header from './ui/Header';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
