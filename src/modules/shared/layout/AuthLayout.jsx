import {Outlet} from 'react-router-dom';

import Header from './ui/Header';
import Footer from './ui/Footer';
export default function AuthLayout() {
  //no Navbar
  return (
    <div>
      <Header />
      <div className="mx-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
