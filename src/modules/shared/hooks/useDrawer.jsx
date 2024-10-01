import {useContext} from 'react';
import {DrawerContext} from '../store/drawer/DrawerContext';

export default function useDrawer() {
  return useContext(DrawerContext);
}
