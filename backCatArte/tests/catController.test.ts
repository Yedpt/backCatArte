import request from 'supertest';
import { app, server } from '../app';

describe('POST /users', () => {

    afterAll((done) => {
    server.close(done);  

  });

  test('should create a new user', async () => {

    const user = {
      id: 19,
      name: 'Carlos',
      description: 'caribe',
      category: 'Cat',
      image: ' ',
      date: 'tu como estas',
      likes: 26,

    };

    const response = await request(app)

      .post('/api/memes')
      .send(user)  
      .set('Content-Type', 'application/json');  

       expect(response.statusCode).toBe(200);

       expect(response.headers['content-type']).toContain('application/json');
       
  });
});
