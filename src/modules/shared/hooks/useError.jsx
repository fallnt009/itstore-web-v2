import {useContext} from 'react';
import {ErrorContext} from '../store/error/ErrorContext';

export default function useError() {
  return useContext(ErrorContext);
}
