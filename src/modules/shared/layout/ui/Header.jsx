import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';

import useAuth from '../../hooks/useAuth';
import Dropdown from '../../components/ui/Dropdown';
import AuthToggle from '../../features/dropdown/auth/AuthToggle';
import AuthMenu from '../../features/dropdown/auth/AuthMenu';

export default function Header() {
  const [open, setOpen] = useState(false);

  const {authenUser, logout} = useAuth();
  const navigate = useNavigate();

  const handleOnClickCart = (e) => {
    // startLoading();
    try {
      e.preventDefault();
      // navigate('/yourcart');
      // navigate(0);
    } catch (err) {
      // console.log(err);
    } finally {
      // stopLoading();
    }
  };

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
              <div className="flex-2 mx-4 hover:bg-cerulean-blue-800 hover:text-white rounded-full p-2">
                <div className="flex">
                  <MdShoppingCart size={35} />
                </div>
              </div>
            </Link>
          ) : (
            <Link to={'/login'}>
              <div className="flex-2 mx-4 hover:bg-cerulean-blue-800 hover:text-white rounded-full p-2">
                <MdShoppingCart size={35} />
              </div>
            </Link>
          )}
          <Dropdown setOpen={setOpen}>
            <AuthToggle
              authenUser={authenUser}
              onClick={() => setOpen(!open)}
            />
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
  );
}
