import {Outlet} from 'react-router-dom';

import Header from './ui/Header';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function MainLayout() {
  return (
    <div>
      <div className="2xl:mx-20 xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5">
        <Header />
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
