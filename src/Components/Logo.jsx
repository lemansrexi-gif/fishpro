import './Logo.css';

// Logotipo de FISHPRO (mismas formas y colores que los iconos de la app), en SVG: no necesita descargar imágenes.
export default function Logo({ small = false }) {
  return (
    <svg
      className={small ? 'logo logo--small' : 'logo'}
      viewBox="-60 -60 120 120"
      role="img"
      aria-label="Logotipo de FISHPRO"
    >
      <polygon className="logo__body" points="18,0 54,-30 44,0 54,30" />
      <ellipse className="logo__body" cx="-10" cy="0" rx="38" ry="26" />
      <polygon className="logo__accent" points="-12,-22 8,-40 14,-18" />
      <path className="logo__gill" d="M -12 -17.3 A 12 20 0 0 1 -12 17.3" />
      <circle className="logo__eye" cx="-33" cy="-6" r="4.2" />
    </svg>
  );
}
