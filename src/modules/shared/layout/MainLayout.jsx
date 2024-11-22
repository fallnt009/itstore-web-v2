import {Outlet} from 'react-router-dom';

import Header from './ui/Header';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="2xl:mx-40 xl:mx-20 lg:mx-10">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
