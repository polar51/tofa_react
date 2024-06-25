import { useRoutes } from 'react-router-dom';
import defaultRoutes from '../app-routes';

const useAppRoutes = () => useRoutes([...defaultRoutes]);

export default useAppRoutes;
