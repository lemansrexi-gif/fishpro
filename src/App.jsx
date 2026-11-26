import { lazy, Suspense } from 'react';
import HomeScreen from './Screens/HomeScreen.jsx';
import { ROUTES } from './Navigation/routes.js';
import { useRoute } from './Navigation/useRoute.js';

// Estas pantallas se descargan solo cuando se abren (carga más rápida al iniciar).
const StatusScreen = lazy(() => import('./Screens/StatusScreen.jsx'));
const IdentifyScreen = lazy(() => import('./Screens/IdentifyScreen.jsx'));
const AssistantScreen = lazy(() => import('./Screens/AssistantScreen.jsx'));
const LibraryScreen = lazy(() => import('./Screens/LibraryScreen.jsx'));
const CapturesScreen = lazy(() => import('./Screens/CapturesScreen.jsx'));

const SCREENS = {
  [ROUTES.HOME]: HomeScreen,
  [ROUTES.STATUS]: StatusScreen,
  [ROUTES.IDENTIFY]: IdentifyScreen,
  [ROUTES.ASSISTANT]: AssistantScreen,
  [ROUTES.LIBRARY]: LibraryScreen,
  [ROUTES.CAPTURES]: CapturesScreen,
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
