import request from 'supertest';
import { app, server } from '../app';

//Test Get

describe('crud memes', () => {

    test('should return a response with status 200 and type json', async () => {

        const response = await request(app).get('/api/memes');

          expect(response.statusCode).toBe(200);
          expect(response.headers['content-type']).toContain('application/json');
    
      });

//Test Post
   
  test('should create a new user', async () => {

    const user = {
        id: 19,
        name: 'Maria',
        description: 'Ucraniana',
        category: 'Cat',
        image: ' ',
        date: 'yo bien, gracias',
        likes: 32,
  
      };
    
    const response = await request(app)

    .post('/api/memes')
    .send(user)
    .set('Content-Type', 'application/json');

     expect(response.statusCode).toBe(200); 

     expect(response.headers['content-type']).toContain('application/json');
    
    });

    //Test Put
    test ('should update a user', async () => {

    const user = {
        id: 88,
        name: 'Jose',
        description: 'Mexicano',
        category: 'Cat',
        image: ' ',
        date: 'nada que temer',
        likes: 32,
   };
   const response = await request(app)

   .put('/api/memes/88')
   .send(user)
   .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(200);

    expect(response.headers['content-type']).toContain('application/json');

});

//Test Delete

    test ('should delete a user', async () => {

        const user = {
        id: 88,
        name: 'Jose',
        description: 'Mexicano',
        category: 'Cat',
        image: ' ',
        date: 'nada que temer',
        likes: 32,

      };

    const response = await request(app)

    .delete('/api/memes/88')
    .send(user)  
    .set('Content-Type', 'application/json');  

     expect(response.statusCode).toBe(200);

     expect(response.headers['content-type']).toContain('application/json');

  });


afterAll((done) => {
    server.close(done);  

});


})
