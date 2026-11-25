import { lazy, Suspense } from 'react';
import HomeScreen from './Screens/HomeScreen.jsx';
import { ROUTES } from './Navigation/routes.js';
import { useRoute } from './Navigation/useRoute.js';

// La pantalla de estado se descarga solo cuando se abre (carga más rápida al iniciar).
const StatusScreen = lazy(() => import('./Screens/StatusScreen.jsx'));

const SCREENS = {
  [ROUTES.HOME]: HomeScreen,
  [ROUTES.STATUS]: StatusScreen,
};

export default function App() {
  const route = useRoute();
  const Page = SCREENS[route] ?? HomeScreen;
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
