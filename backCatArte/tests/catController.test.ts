import  request  from "supertest";
import { app, server }  from "../app";

describe ('POST /users', () => {

    test('should create a new user', async () =>{

        const user = {
            id: 22,
            name: 'hola',        
            description: 'nose que poner',
            category: 'Cat',
            image: ' ',
            date: 'holaaa',
            likes: 56

        }

        const response = await request(app).post('/api/memes'); 

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')  
    })

    afterAll(()=>{
        server.close();
    })
})