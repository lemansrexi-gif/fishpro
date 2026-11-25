import './ModuleCard.css';

export default function ModuleCard({ title, description, folder }) {
  return (
    <li className="module-card">
      <div className="module-card__row">
        <h3 className="module-card__title">{title}</h3>
        <span className="module-card__badge">Pendiente</span>
      </div>
      <p className="module-card__description">{description}</p>
      <p className="module-card__folder">{folder}</p>
    </li>
  );
}
