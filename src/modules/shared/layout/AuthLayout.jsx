import {Outlet} from 'react-router-dom';

import Header from './ui/Header';
import Footer from './ui/Footer';
export default function AuthLayout() {
  //no Navbar
  return (
    <div>
      <div className="2xl:mx-20 xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
