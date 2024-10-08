import request from 'supertest';
import { app, server } from '../app';

describe('DELETE /users', () => {

    afterAll((done) => {
    server.close(done);  

  });

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

      .delete('/api/memes/19')
      .send(user)  
      .set('Content-Type', 'application/json');  

       expect(response.statusCode).toBe(200);

       expect(response.headers['content-type']).toContain('application/json');

  });
});
