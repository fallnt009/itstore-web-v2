import {Outlet} from 'react-router-dom';

import Header from './ui/Header';
import Footer from './ui/Footer';
export default function AuthLayout() {
  //no Navbar
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
