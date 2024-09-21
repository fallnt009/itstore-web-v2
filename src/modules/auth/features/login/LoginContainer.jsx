import {Link} from 'react-router-dom';
import {REGISTER} from '../../../shared/services/config/routing';

import LoginForm from './LoginForm';

export default function LoginContainer() {
  return (
    <div className="flex flex-col gap-4 self-center">
      <h1 className="font-semibold text-4xl">Sign In</h1>
      <div className=" w-1/2">
        <LoginForm />
      </div>
      <p className="flex gap-1">
        new to ITSTORE?
        <Link to={REGISTER} className="font-semibold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
