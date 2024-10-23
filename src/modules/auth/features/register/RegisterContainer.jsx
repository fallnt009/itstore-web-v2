import {Link} from 'react-router-dom';
import {LOGIN} from '../../../shared/services/config/routing';

import RegisterForm from './RegisterForm';

export default function RegisterContainer() {
  return (
    <div className="flex flex-col gap-4 self-center">
      <h1 className="font-semibold text-4xl">Register</h1>
      <div className=" w-1/2">
        <RegisterForm />
      </div>
      <p className="flex gap-1">
        Already have an account?
        <Link to={LOGIN} className="font-semibold hover:text-gray-600">
          Login
        </Link>
      </p>
    </div>
  );
}
