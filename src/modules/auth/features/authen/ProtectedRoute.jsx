import {Navigate} from 'react-router-dom';
import useAuth from '../../../shared/hooks/useAuth';

import {LOGIN} from '../../../shared/services/config/routing';

export default function ProtectedRoute({children}) {
  const {authenUser} = useAuth();
  if (!authenUser) {
    return <Navigate to={LOGIN} />;
  }
  return children;
}
