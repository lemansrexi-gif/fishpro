# Services
Reservada para conexiones con servicios externos (API de Claude, fuentes de datos de especies).

Nota para la fase de IA: una PWA es código público, así que la clave de la API de Claude no debe guardarse dentro de la app. Se usará un pequeño servidor intermedio que guarde la clave. Las consultas a servicios externos no se guardan en la caché del Service Worker.
