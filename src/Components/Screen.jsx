import './Screen.css';

// Contenedor base de todas las pantallas: fondo, márgenes seguros y ancho máximo.
export default function Screen({ children, header = null, dark = false }) {
  return (
    <div className={`screen${dark ? ' screen--dark' : ''}`}>
      {header}
      <main className="screen__inner">{children}</main>
    </div>
  );
}
