# **BACKEND - 🐱 MUSEO VIRTUAL DE MEMES "MeCat"**

## Descripción

Este proyecto ha sido desarrollada para "MeCat" el museo virtual dedicado a los memes de gatos más divertidos y virales, con el objetivo de centralizar y gestionar la información de toda su colección de memes felinos en una base de datos relacional. La API expone una serie de endpoints que permiten realizar operaciones CRUD (Create, Read, Update, Delete) sobre las obras, facilitando así la integración con las aplicaciones front-end de la red, desarrolladas en React.

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

A continuación se presenta imagenes del proyecto en funcionamiento:...


<img width="214" alt="test pass" src="https://github.com/user-attachments/assets/ef3dc929-a2aa-4702-b0f6-4e53841fde92">




<img width="300" alt="capture MySQL" src="https://github.com/user-attachments/assets/2156d62f-777e-49ac-8f4a-9d7598b5ffd7">






 Tambien te tenemos una documentacion breve sobre el **Museo Vitual meCat** 
 y las funciones del postman en documentacion y en video para que puedas ver la presentacion de manera mas visual:
 
- [Documentacion-Postman](https://documenter.getpostman.com/view/37812250/2sAXqzXymS "Documentacion-Postman")👈📖

- [Video-Postman](https://youtu.be/He1ewiLILxo "Video-Postman")👈📹

- [Museo Virtual-General](https://www.youtube.com/watch?v=p0XRk3Gknc4 "Museo Virtual-General")👈🏛️

## 💻 Tecnologías empleadas

[![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-4DB33A?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/): Entorno de ejecución y framework web para el desarrollo del backend.

[![SQL](https://img.shields.io/badge/SQL-307DB1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/): Lenguaje de consulta estructurado para la gestión de la base de datos.

[![Sequelize](https://img.shields.io/badge/Sequelize-5272B4?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/): ORM (Object-Relational Mapper) para interactuar con la base de datos de forma más intuitiva.

[![Express Validator](https://img.shields.io/badge/Express%20Validator-blue?style=for-the-badge&logo=express&logoColor=white)](https://www.npmjs.com/package/express-validator): Middleware para validar los datos de entrada a los endpoints.

[![Jest](https://img.shields.io/badge/Jest-blue?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/) [![Supertst](https://img.shields.io/badge/Supertst-blue?style=for-the-badge&logo=supertest&logoColor=white)](https://supertest.js.org/): Framework de testing y herramienta para realizar pruebas unitarias y de integración.

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


##### Después pones el siguiente comando para crear una tabla :
````
CREATE TABLE nombre_de_la_tabla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    columna1 VARCHAR(255) NOT NULL,
    columna2 INT,
    columna3 DATE,);
````
##### Eso es para hacer las columnas y especiificarle su tipo de dato, y haces el mismo comando sobre la linea Ctrl +Enter para verificar

#### luego vas al proyecto y en tu archivo .env pones lo siguiente:
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
#### Tambien se ha añadido una carperta de Interfaces donde se crea un archivo interfaces con el siguiente comando para usarlo en el Model:
````
export interface CatMeme {
    id?: number
    name: string;
    description: string;
    category: string;
    image: string;
    date?: Date | string;
    likes: number;
  }
````
##  En las validaciones hacemos un paso sencillo  de la siguiente forma:

### y por si te lo preguntas
express-validator es una biblioteca que facilita la validación y sanitización de los datos en las peticiones HTTP. Sirve para asegurarse de que los datos que llegan a tu API cumplan con ciertos requisitos (formato, longitud, existencia, etc.). Esto es útil para proteger la aplicación de datos incorrectos, malintencionados o incompletos.

### Creamos una carpeta para la validacion y haremos un archivo ej: 
nombre_de_tu_archivoValidator.ts
##### para continuar  pegas el siguiente cofigo en tu archivo y modificas segun tus preferencias:
````
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()
    });
  }
  next();
};
````
### Pasamos a la sincronizacion del Frontend y el Backend

  El Front se une enlazando el servidor del backend al front atraves de una variable en donde se guarda el localhost , más las peticiones que recibe el controlador del front y trae la información de la Base de Datos y manda esa respuesta al Front. 
  
  Donde por medio de la URL del front  donde se guarda el localhost del backend.
  ````
  const BaseUrl = "http://localhost:3000/api/memes"; 
  ````
  #### Este seria el codigo completo del Front en el archivo de services.js:
````
import axios from "axios";

const BaseUrl = "http://localhost:3000/api/memes"; // Cambia por la URL de tu API si es necesario

// GET Obtener todos los memes
export const getMemes = async () => {
  try {
    // Agregamos un parámetro de consulta aleatorio a la URL
    const response = await axios.get(BaseUrl + "?_=" + new Date().getTime());
    return response.data;
  } catch (error) {
    console.error("Error al obtener los memes:", error);
    throw error;
  }
};

// Obtener un meme por ID
export const getMemeById = async (id) => {
  try {
    const response = await axios.get(`${BaseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el meme:", error);
    throw error;
  }
};

// Obtener memes por categoría
export const getMemeByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${BaseUrl}?category=${encodeURIComponent(category)}`
    );
    console.log("Respuesta de la API por categoría:", response.data); // Verifica la respuesta
    return response.data;
  } catch (error) {
    console.error("Error al obtener memes por categoría:", error);
    throw error;
  }
};

// POST Crear un nuevo meme
export const createMeme = async (memeData) => {
  try {
    const response = await axios.post(BaseUrl, memeData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el meme:", error);
    throw error;
  }
};

// Actualizar un meme existente por ID
export const updateMeme = async (id, updatedMemeData) => {
  try {
    const response = await axios.put(`${BaseUrl}/${id}`, updatedMemeData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el meme:", error);
    throw error;
  }
};

// Eliminar un meme por ID
export const deleteMeme = async (id) => {
  try {
    await axios.delete(`${BaseUrl}/${id}`);
  } catch (error) {
    console.error("Error al eliminar el meme:", error);
    throw error;
  }
};
````

## 🔮 Mirando al futuro

Todo proyecto requiere de mejoras, se tiene identificada la ... si estás interesado en contribuir a esta función, te invito a clonar el repositorio y crear una rama para tus cambios. ¡Tu ayuda es muy valorada!

# Autores ✒️
Ana Maria Garcia - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anagarciaarcia/)

Yeder Pimentel - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yeder-pimentel/)

Omar Lengua - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/omarlengua/)

Enmanuel Feliciano - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enmanuelfeliciano/)

Wilder Aguilar - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Wilder-Aguilar) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wilderaguilar/)

# Licencia 📄
Este proyecto está bajo la Licencia ((Tu Licencia)) 