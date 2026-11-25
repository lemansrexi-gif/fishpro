import { useEffect, useState } from 'react';
import { ROUTES } from './routes.js';

const current = () => window.location.hash || ROUTES.HOME;

// Devuelve la ruta actual y se actualiza cuando cambia el "#" de la dirección (incluye el botón Atrás de Android).
export function useRoute() {
  const [route, setRoute] = useState(current);

  useEffect(() => {
    const onChange = () => {
      setRoute(current());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
