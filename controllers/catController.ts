import catMeme from '../models/catModel';  // Importar el modelo de la tabla Book
import conectionDB from '../database/conectionDB.js'; // Importa tu conexión a la base de datos

// Asegúrate de que la conexión esté activa
async function mostrarLibros() {
  try {
    await conectionDB.authenticate();  // Autenticar la conexión a la base de datos
    console.log('Conexión a la base de datos exitosa 😁');

    // Consultar todos los libros en la base de datos
    const books = await Book.findAll();
    
    // Mostrar los resultados en la terminal
    console.log('Libros en la base de datos:');
    books.forEach(book => {
      console.log(`Título: ${book.title}, Autor: ${book.author}, Precio: ${book.genre}`);
    });
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
  }
}

mostrarLibros();
