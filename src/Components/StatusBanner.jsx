import './StatusBanner.css';

// Resumen de las comprobaciones del dispositivo. Las funciones pendientes NO cuentan como problemas.
export default function StatusBanner({ checking, errors, warnings }) {
  let tone = 'ok';
  let text = 'Sin problemas detectados.';

  if (checking) {
    tone = 'wait';
    text = 'Comprobando el dispositivo…';
  } else if (errors > 0) {
    tone = 'error';
    text = `${errors} ${errors === 1 ? 'problema real detectado' : 'problemas reales detectados'}. Revisa los puntos marcados.`;
  } else if (warnings > 0) {
    tone = 'warn';
    text = `Sin problemas, pero hay ${warnings} ${warnings === 1 ? 'aviso' : 'avisos'}.`;
  }

  return (
    <p className={`status-banner status-banner--${tone}`} role="status">
      {text}
    </p>
  );
}
