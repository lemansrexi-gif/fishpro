import { ROUTES } from './routes.js';

// Las 4 funciones principales de FISHPRO. Las usan el menú y sus pantallas.
export const SECTIONS = {
  identify: {
    route: ROUTES.IDENTIFY,
    icon: 'camera',
    title: 'Identificar pescado',
    description: 'Identifica cualquier pescado mediante una fotografía.',
  },
  assistant: {
    route: ROUTES.ASSISTANT,
    icon: 'assistant',
    title: 'Asistente de pesca',
    description: 'Encuentra señuelos y recibe consejos para pescar.',
  },
  library: {
    route: ROUTES.LIBRARY,
    icon: 'fish',
    title: 'Biblioteca de peces',
    description: 'Explora especies y descubre toda su información.',
  },
  captures: {
    route: ROUTES.CAPTURES,
    icon: 'album',
    title: 'Mis capturas',
    description: 'Guarda y consulta los peces que has pescado.',
  },
};

export const MENU_SECTIONS = Object.values(SECTIONS);
