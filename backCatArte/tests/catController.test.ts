import request from 'supertest';
import { app, server } from '../app';
import catMeme from '../models/catModel';


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
  
      
      
        name: "Celia",
        description: "si, tengo 32 años",
        category: "gatos_siendo_gatos1",
        image: "/src/assets/gatos-siendo-gatos1/gatos101.jpg",
        date: "2008-07-13",
        likes: 85
      
  
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
      name: "test",
      description: "si, tengo 100 años",
      category: "gatos_siendo_gatos1",
      image: "/src/assets/gatos-siendo-gatos1/gatos101.jpg",
      date: "2008-07-13",
      likes: 132
   };
   const response = await request(app)

   .put('/api/memes/3')
   .send(user)
   .set('Content-Type', 'application/json');

    expect(response.statusCode).toBe(200);

    expect(response.headers['content-type']).toContain('application/json');

});

// //Test Delete

    test ('should delete a user', async () => {

        const memeToDelete = await catMeme.create({
            name: "test",
            description: "todo test",
            category: "test",
            image: "/src/assets/gatos-siendo-gatos1/gatos101.jpg",
            date: "2008-07-13",
            likes: 102
         });

    const response = await request(app)

    .delete(`/api/memes/${memeToDelete.id}`)
     
    .set('Content-Type', 'application/json');  

     expect(response.statusCode).toBe(200);

     expect(response.headers['content-type']).toContain('application/json');

  });


afterAll((done) => {
    server.close(done);  

});


})
