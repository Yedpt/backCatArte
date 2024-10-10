# **BACKEND - 🐱 MUSEO VIRTUAL DE MEMES "MeCat"**

## Descripción
Este proyecto ha sido desarrollada para "MeCat" el museo virtual dediCado a los memes de gatos más divertidos y virales, con el objetivo de centralizar y gestionar la información de toda su colección de memes felinos en una base de datos relacional. La API expone una serie de endpoints que permiten realizar operaciones CRUD (Create, Read, Update, Delete) sobre las obras, facilitando así la integración con las aplicaciones front-end de la red, desarrolladas en React.

## Empezando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

## Requisitos Previos 📋

- **Node.js** instalado en tu máquina.

## Instalación 🔧

Para comenzar con el proyecto, sigue los siguientes pasos:

**1. Clonar el repositorio:**

```bash
git clone https://github.com/Yedpt/backCatArte.git
cd backCatArte
```

**2. Instalar las dependencias:**

```bash
npm install
```

**3. Iniciar el servidor (json-server):**

```bash
npm run api
```

Esto iniciará un servidor en tu localhost que servirá como nuestra API fake.

**4. Abrir el archivo `index.html`:** ⚙️

Puedes abrir `index.html` en tu navegador para ver la aplicación en funcionamiento.

## Instalaciones

Para comenzar, debes instalar las siguientes dependencias junto con sus tipos en un proyecto de TypeScript:

## Instalación de dependencias principales
````
npm install express sequelize mysql2 dotenv
````
## Instalación de TypeScript y sus tipos
````
npm install --save-dev typescript @types/node @types/express @types/dotenv
````
## Instalación de express-validator
````
npm install express-validator
````
## Instalación de jest y supertest para pruebas
````
npm install --save-dev jest supertest @types/jest @types/supertest
````

## Imágenes de la Web 🌅

A continuación se presentea imagenes del poryecto en funcionamiento:...



## 💻 Tecnologías empleadas

[![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-4DB33A?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/): Entorno de ejecución y framework web para el desarrollo del backend.

[![SQL](https://img.shields.io/badge/SQL-307DB1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/): Lenguaje de consulta estructurado para la gestión de la base de datos.

[![Sequelize](https://img.shields.io/badge/Sequelize-5272B4?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/): ORM (Object-Relational Mapper) para interactuar con la base de datos de forma más intuitiva.

[![Express Validator](https://img.shields.io/badge/Express%20Validator-blue?style=for-the-badge&logo=express&logoColor=white)](https://www.npmjs.com/package/express-validator): Middleware para validar los datos de entrada a los endpoints.

[![Jest](https://img.shields.io/badge/Jest-blue?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/): Framework de testing y herramienta para realizar pruebas unitarias y de integración.

[![Postman](https://img.shields.io/badge/Postman-F65E1D?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/): Herramienta para documentar y probar los endpoints de la API.

##  🛠️ Arquitectura

La aplicación sigue una arquitectura MVC (Modelo-Vista-Controlador):

Modelo: Define la estructura de los datos y las interacciones con la base de datos (Sequelize).

Vista: Los endpoints de la API que exponen los datos y las funcionalidades (Express).

Controlador: La lógica de negocio que conecta el modelo y la vista.

# Estructura de Carpetas


├── /src
│   ├── /config
│   │   └── database.ts -- **Configuración de Sequelize**

│   │


│   ├── /controllers
│   │   └── memeController.ts -- **Controlador para la lógica de memes**

│   │


│   ├── /models
│   │   └── Meme.ts --     **Modelo meme de sequilize**

│   │


│   ├── /routes
│   │   └── memeRoutes.ts --    **Rutas relacionadas a memes**

│   │


│   ├── /middlewares
│   │   └── validation.ts --   **Validaciones de Express Validator**

│   │


│   ├── /tests
│   │   └── meme.test.ts --  **Pruebas para los endpoints de memes**

## Ahora vamos con la parte del  testing

##### Despues que instalas MySQL Workbench creas una database con el siguiente comando:
````
CREATE DATABASE nombre_de_tu_base de datos;
````
##### Luego colocate en la linea y haz un **Ctrl + Enter** para verificar que se cree de manera correcta.

##### Depues pones el siguiente comando para crear una tabla :
````
CREATE TABLE nombre_de_la_tabla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    columna1 VARCHAR(255) NOT NULL,
    columna2 INT,
    columna3 DATE,);
````
#####Eso es para hacer las columnas y especiificarle su tipo de dato, y haces el mismo comando sobre la linea Ctrl +Enter para verificar

### luego vas al proyecto y en tu archivo .env pones lo siguiente:
````
DB_PASSWORD = tu_ contraseña_de_MySQL
DB_HOST=localhost
DB_USER= tu_usuario
DB_DEV_NAME= nombre_de_tu_base de dtos
DB_PORT=3306
PORT=3000
````

###  Iniciar el Test
   ##### En la consola ejecutas el siguiente comando:
````
npm run test
````

## 🔮 Mirando al futuro

Todo proyecto requiere de mejoras, se tiene identificada la ... si estás interesado en contribuir a esta función, te invito a clonar el repositorio y crear una rama para tus cambios. ¡Tu ayuda es muy valorada!

# Autores ✒️
Ana Maria Garcia - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)

Yeder Pimentel - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)

Omar Lengua - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)

Enmanuel Feliciano - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)

Wilder Aguilar - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Wilder-Aguilar) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wilderaguilar/)

# Licencia 📄
Este proyecto está bajo la Licencia ((Tu Licencia)) 
