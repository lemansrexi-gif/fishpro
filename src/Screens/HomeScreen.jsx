import Button from '../Components/Button.jsx';
import Logo from '../Components/Logo.jsx';
import Screen from '../Components/Screen.jsx';
import { ROUTES } from '../Navigation/routes.js';
import './HomeScreen.css';

// Pantalla temporal de bienvenida. En la Fase 2 será reemplazada por el menú principal.
export default function HomeScreen() {
  return (
    <Screen dark>
      <div className="home__center">
        <Logo />
        <h1 className="home__title">FISHPRO</h1>
        <p className="home__tagline">Identifica, consulta y registra tus capturas.</p>
      </div>
      <Button variant="light" href={ROUTES.STATUS}>
        Ver estado del proyecto
      </Button>
      <p className="home__phase">Fase 1: base del proyecto</p>
    </Screen>
  );
}
