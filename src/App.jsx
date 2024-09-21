import {ToastContainer} from 'react-toastify';
import Spinner from './modules/shared/components/ui/Spinner';

import useLoading from './modules/shared/hooks/useLoading';

import Router from './routes/Router';

function App() {
  const {loading} = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="top-right" />
    </>
  );
}

export default App;
