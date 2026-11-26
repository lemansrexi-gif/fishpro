import Logo from '../Components/Logo.jsx';
import MenuCard from '../Components/MenuCard.jsx';
import Screen from '../Components/Screen.jsx';
import { ROUTES } from '../Navigation/routes.js';
import { MENU_SECTIONS } from '../Navigation/sections.js';
import './HomeScreen.css';

// Menú principal: aparece al abrir la app.
export default function HomeScreen() {
  return (
    <Screen dark>
      <header className="home__brand">
        <Logo small />
        <span className="home__brand-name">FISHPRO</span>
      </header>

      <div className="home__welcome">
        <h1 className="home__title">Bienvenido a FISHPRO</h1>
        <p className="home__tagline">Tu compañero inteligente de pesca</p>
      </div>

      <ul className="home__menu">
        {MENU_SECTIONS.map((section) => (
          <MenuCard key={section.route} {...section} />
        ))}
      </ul>

      <a className="home__status" href={ROUTES.STATUS}>
        Ver estado del proyecto
      </a>
    </Screen>
  );
}
