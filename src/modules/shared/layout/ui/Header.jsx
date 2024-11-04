import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';

import {MY_CART, LOGIN} from '../../services/config/routing';

import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

import Dropdown from '../../components/ui/Dropdown';
import AuthToggle from '../../features/dropdown/auth/AuthToggle';
import AuthMenu from '../../features/dropdown/auth/AuthMenu';

export default function Header() {
  const [open, setOpen] = useState(false);

  const {authenUser, logout} = useAuth();
  const {userCart} = useCart();

  const navigate = useNavigate();

  const handleOnClickCart = (e) => {
    e.preventDefault();
    navigate(MY_CART);
    navigate(0);
  };

  const totalItems = userCart?.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="bg-white">
      <div className="flex px-10 py-10 items-center justify-between">
        {/* Logo */}
        <Link to={'/'}>
          <div className="flex-2 font-mono font-extrabold text-5xl font-jetmono text-indigo-700">
            ITStores
          </div>
        </Link>
        {/* Search Bar */}
        {/* <div className="flex-1 mx-10">
          <div className=" p-3 rounded-full bg-neutral-400">Search Bar</div>
        </div> */}
        {/* Cart */}
        {/* Avatar */}
        <div className="flex items-center gap-2">
          {authenUser ? (
            <Link onClick={handleOnClickCart}>
              <div className="flex-2 mx-4 hover:bg-cerulean-blue-800 hover:text-indigo-700 rounded-full p-2">
                <div className="relative  inline-block rounded-full p-1">
                  <MdShoppingCart size={35} />
                  {totalItems > 0 && (
                    <span className="absolute -bottom-2 -right-3 flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex w-full h-full bg-red-600 rounded-full"></span>
                      <span className="relative inline-flex rounded-full justify-center text-sm bg-red-600 h-5 w-5 text-white font-semibold">
                        {totalItems}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <Link to={LOGIN}>
              <div className="flex-2 mx-4 hover:bg-cerulean-blue-800 hover:text-white rounded-full p-2">
                <MdShoppingCart size={35} />
              </div>
            </Link>
          )}
          <div className="rounded-full border-2 hover:border-indigo-700">
            <AuthToggle
              authenUser={authenUser}
              onClick={() => setOpen(!open)}
              onHover={() => setOpen(true)}
            />
            <Dropdown isOpen={open} setOpen={setOpen}>
              <AuthMenu
                authenUser={authenUser}
                logout={logout}
                open={open}
                onClose={() => setOpen(false)}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
