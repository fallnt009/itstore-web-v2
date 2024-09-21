import {useContext} from 'react';
import {LoadingContext} from '../store/loading/LoadingContext';

export default function useLoading() {
  return useContext(LoadingContext);
}
