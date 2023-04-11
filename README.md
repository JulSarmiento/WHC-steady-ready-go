# APIRestFull Mazuzoe Store
Este es el README para el proyecto de la API REST con Express y FS como persistencia de información.

## Link a GLitch

   - https://glitch.com/edit/#!/steady-ready-go?path=package.json%3A10%3A4
   - https://whc-steady-ready-go.vercel.app/

## Descripción
Este proyecto es una API REST que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos simulada utilizando FS como persistencia de información. La API se ha creado utilizando Node.js y el framework Express.

## Tecnologías empleadas
En este proyecto se han utilizado las siguientes tecnologías:

  - Node.js: versión 18.13.0
  - Express: versión 4.18.2

## Rutas de la API
La API cuenta con las siguientes rutas:

  - GET /elementos
    Esta ruta devuelve un array con todos los elementos de la base de datos.

  - GET /elementos/:id
    Esta ruta devuelve el elemento correspondiente al ID proporcionado en la URL.

  - POST /elementos
    Esta ruta crea un nuevo elemento en la base de datos. El elemento debe ser proporcionado en el cuerpo de la petición.

  - PATCH /elementos/:id
    Esta ruta actualiza el elemento correspondiente al ID proporcionado en la URL. Los cambios deben ser proporcionados en el cuerpo de la petición.

  - DELETE /elementos/:id
    Esta ruta elimina el elemento correspondiente al ID proporcionado en la URL.

## Librerías utilizadas
En este proyecto se han utilizado las siguientes librerías:

- dotenv: para cargar variables de entorno desde un archivo .env.
- body-parser: para analizar el cuerpo de las solicitudes HTTP.
- joi: para validar los datos de entrada.
- http-status: para usar códigos de estado HTTP de manera fácil.
- morgan: para la gestión de logs.

## Instalación y uso
  1. Clona el repositorio.
  2. Instala las dependencias con el comando npm install.
  3. Crea un archivo .env en la raíz del proyecto y establece las variables de entorno necesarias (por ejemplo, el puerto en el que se ejecutará la API).
  4. Ejecuta la API con el comando npm start.

## Licencia
Este proyecto está bajo la Licencia MIT.