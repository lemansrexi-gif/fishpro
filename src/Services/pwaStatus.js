// Comprobaciones reales del dispositivo/navegador para la pantalla "Estado del proyecto".
//
// Cada comprobación devuelve un estado:
//   'ok'    correcto
//   'info'  dato informativo, NO es un problema
//   'warn'  aviso: algo que conviene revisar
//   'error' problema real que impide usar una función
export const DEVICE_CHECKS = [
  { key: 'secure', label: 'Conexión segura (HTTPS)' },
  { key: 'serviceWorker', label: 'Service Worker activo' },
  { key: 'installed', label: 'Abierta como app instalada' },
  { key: 'online', label: 'Conexión a internet' },
  { key: 'camera', label: 'Soporte de cámara del navegador' },
];

const YES = 'Sí';
const NO = 'No';

async function getServiceWorkerState() {
  if (!('serviceWorker' in navigator)) return 'unsupported';
  try {
    const registration = await navigator.serviceWorker.getRegistration();
    return registration?.active ? 'active' : 'inactive';
  } catch {
    return 'inactive';
  }
}

export async function getDeviceChecks() {
  const secure = window.isSecureContext;
  const online = navigator.onLine;
  const installed = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  // Indica que el navegador permite pedir la cámara; el permiso se solicita al usarla.
  const camera = Boolean(navigator.mediaDevices?.getUserMedia);
  const serviceWorker = await getServiceWorkerState();

  const results = {
    secure: secure
      ? { state: 'ok', value: YES }
      : { state: 'error', value: NO, hint: 'Sin HTTPS no se puede instalar la app ni usar la cámara. Abre la dirección publicada (https://).' },

    serviceWorker:
      serviceWorker === 'active'
        ? { state: 'ok', value: YES }
        : serviceWorker === 'unsupported'
          ? { state: 'error', value: NO, hint: 'Tu navegador no admite Service Worker, necesario para instalar la app.' }
          : { state: 'warn', value: NO, hint: 'Todavía no está activo. Se activa tras la primera visita: recarga la página. En modo desarrollo (npm run dev) nunca se activa.' },

    installed: installed
      ? { state: 'ok', value: YES }
      : { state: 'info', value: NO, hint: 'Estás en el navegador. Aparecerá "Sí" al abrirla desde el icono instalado.' },

    online: online
      ? { state: 'ok', value: YES }
      : { state: 'warn', value: NO, hint: 'Sin internet. Las funciones que lo necesiten no funcionarán hasta que vuelva la conexión.' },

    camera: camera
      ? { state: 'ok', value: YES }
      : { state: 'error', value: NO, hint: secure ? 'Tu navegador no permite usar la cámara.' : 'La cámara requiere conexión segura (HTTPS).' },
  };

  return DEVICE_CHECKS.map(({ key, label }) => ({ key, label, ...results[key] }));
}
