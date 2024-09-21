import {Navigate} from 'react-router-dom';
import useAuth from '../../../shared/hooks/useAuth';

export default function ProtectedRoute({children}) {
  const {authenUser} = useAuth();
  if (!authenUser) {
    return <Navigate to={'/login'} />;
  }
  return children;
}
