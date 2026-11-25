import { useEffect, useState } from 'react';
import AppBar from '../Components/AppBar.jsx';
import Button from '../Components/Button.jsx';
import ModuleCard from '../Components/ModuleCard.jsx';
import Screen from '../Components/Screen.jsx';
import StatusBanner from '../Components/StatusBanner.jsx';
import StatusRow from '../Components/StatusRow.jsx';
import { ROUTES } from '../Navigation/routes.js';
import { DEVICE_CHECKS, getDeviceChecks } from '../Services/pwaStatus.js';
import './StatusScreen.css';

// Funciones pendientes: todavía no están desarrolladas (no son errores).
const PENDING_MODULES = [
  { key: 'camera', title: 'Cámara', folder: 'src/Camera', description: 'Captura de fotografías de peces.' },
  { key: 'ai', title: 'Inteligencia artificial', folder: 'src/AI', description: 'Identificación de especies y asistente con Claude.' },
  { key: 'library', title: 'Biblioteca de peces', folder: 'src/Library', description: 'Enciclopedia y buscador de especies.' },
  { key: 'database', title: 'Mis capturas', folder: 'src/Database', description: 'Almacenamiento de capturas y fotografías.' },
  { key: 'services', title: 'Servicios externos', folder: 'src/Services', description: 'Conexiones con servicios externos.' },
];

const CHECKING = DEVICE_CHECKS.map((check) => ({ ...check, state: 'wait', value: '…' }));

export default function StatusScreen() {
  const [checks, setChecks] = useState(null);

  useEffect(() => {
    let active = true;
    const refresh = () => getDeviceChecks().then((result) => active && setChecks(result));
    refresh();
    window.addEventListener('online', refresh);
    window.addEventListener('offline', refresh);
    return () => {
      active = false;
      window.removeEventListener('online', refresh);
      window.removeEventListener('offline', refresh);
    };
  }, []);

  const list = checks ?? CHECKING;
  const errors = list.filter((check) => check.state === 'error').length;
  const warnings = list.filter((check) => check.state === 'warn').length;

  return (
    <Screen header={<AppBar title="Estado del proyecto" backHref={ROUTES.HOME} />}>
      <StatusBanner checking={!checks} errors={errors} warnings={warnings} />

      <h2 className="status__heading">Comprobaciones del dispositivo</h2>
      <ul>
        {list.map(({ key, ...check }) => (
          <StatusRow key={key} {...check} />
        ))}
      </ul>
      <p className="status__note">Los valores se leen de tu dispositivo en este momento.</p>

      <h2 className="status__heading">Funciones pendientes</h2>
      <p className="status__intro">Todavía no están desarrolladas. No son errores: se activarán en las siguientes fases.</p>
      <ul>
        {PENDING_MODULES.map(({ key, ...module }) => (
          <ModuleCard key={key} {...module} />
        ))}
      </ul>

      <div className="status__back">
        <Button href={ROUTES.HOME}>Volver al inicio</Button>
      </div>
    </Screen>
  );
}
