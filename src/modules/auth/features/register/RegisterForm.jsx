import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import Input from '../../../shared/components/ui/Input';
import PasswordInput from '../../components/PasswordInput';

import useAuth from '../../../shared/hooks/useAuth';
import useLoading from '../../../shared/hooks/useLoading';

import validateRegister from '../../utils/validate-register';
import {LOGIN} from '../../../shared/services/config/routing';

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({});

  const {register} = useAuth();
  const {startLoading, stopLoading} = useLoading();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await register(input);
        setInput({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          password: '',
          confirmPassword: '',
        });
        stopLoading();
        toast.success('Register Success');
      }
    } catch (err) {
      //ทำ Notification Box for Error
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
      //relocated to login
      navigate(LOGIN);
      navigate(0);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>
      <Input
        type="text"
        placeholder="first name"
        name="firstName"
        value={input.firstName}
        error={error.firstName}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        placeholder="last name"
        name="lastName"
        value={input.lastName}
        error={error.lastName}
        onChange={handleChangeInput}
      />
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={input.email}
        error={error.email}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        placeholder="mobile"
        name="mobile"
        value={input.mobile}
        error={error.mobile}
        onChange={handleChangeInput}
      />
      <PasswordInput
        type="password"
        placeholder="password"
        name="password"
        value={input.password}
        error={error.password}
        onChange={handleChangeInput}
      />
      <PasswordInput
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        value={input.confirmPassword}
        error={error.confirmPassword}
        onChange={handleChangeInput}
      />

      <button
        type="submit"
        className="rounded-md border-2 p-2 border-indigo-600 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600"
      >
        Register
      </button>
    </form>
  );
}
