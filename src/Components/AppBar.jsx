import './AppBar.css';

// Barra superior azul oscuro con botón de volver.
export default function AppBar({ title, backHref }) {
  return (
    <header className="appbar">
      {backHref && (
        <a className="appbar__back" href={backHref} aria-label="Volver al inicio">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
      <h1 className="appbar__title">{title}</h1>
    </header>
  );
}
