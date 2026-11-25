import './StatusRow.css';

const STATE_NAME = { error: 'Problema', warn: 'Aviso', info: 'Normal' };

// state: 'ok' | 'info' | 'warn' | 'error' | 'wait'
export default function StatusRow({ label, state, value, hint }) {
  return (
    <li className="status-row">
      <div className="status-row__main">
        <span>{label}</span>
        <span className={`status-row__pill status-row__pill--${state}`}>{value}</span>
      </div>
      {hint && (
        <p className={`status-row__hint status-row__hint--${state}`}>
          <strong>{STATE_NAME[state]}.</strong> {hint}
        </p>
      )}
    </li>
  );
}
