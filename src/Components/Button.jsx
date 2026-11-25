import './Button.css';

// variant: 'primary' (azul oscuro, fondos claros) | 'light' (azul claro, fondos oscuros)
// Con `href` se comporta como enlace (navegación); sin `href`, como botón con `onClick`.
export default function Button({ children, href, onClick, variant = 'primary', disabled = false }) {
  const className = `btn btn--${variant}`;
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
