import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BouncingDot from './modules/shared/components/loading/BouncingDot';

import useLoading from './modules/shared/hooks/useLoading';
import Router from './routes/Router';

function App() {
  const {loading} = useLoading();
  return (
    <>
      {loading && <BouncingDot />}
      <Router />
      <ToastContainer
        autoClose="3000"
        theme="light"
        position="top-right"
        toastClassName="custom-toast"
        style={{zIndex: 1000}}
      />
    </>
  );
}

export default App;
