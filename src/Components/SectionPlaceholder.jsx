import { ROUTES } from '../Navigation/routes.js';
import AppBar from './AppBar.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Screen from './Screen.jsx';
import './SectionPlaceholder.css';

// Pantalla provisional de una función: título, descripción y botón para volver al inicio.
// Cada función real reemplazará esta plantilla en su propia fase.
export default function SectionPlaceholder({ section }) {
  const { icon, title, description } = section;
  return (
    <Screen header={<AppBar title={title} backHref={ROUTES.HOME} />}>
      <div className="section">
        <span className="section__icon">
          <Icon name={icon} className="section__glyph" />
        </span>
        <p className="section__description">{description}</p>
        <p className="section__note">Esta pantalla se desarrollará en una próxima fase.</p>
      </div>
      <Button href={ROUTES.HOME}>Volver al inicio</Button>
    </Screen>
  );
}
