import Icon from './Icon.jsx';
import './MenuCard.css';

// Tarjeta grande del menú principal. Es un enlace: abre la pantalla de su función.
export default function MenuCard({ route, icon, title, description }) {
  return (
    <li>
      <a className="menu-card" href={route}>
        <span className="menu-card__icon">
          <Icon name={icon} className="menu-card__glyph" />
        </span>
        <span className="menu-card__text">
          <span className="menu-card__title">{title}</span>
          <span className="menu-card__description">{description}</span>
        </span>
        <Icon name="chevron" className="menu-card__chevron" />
      </a>
    </li>
  );
}
