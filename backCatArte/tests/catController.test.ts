import  request  from "supertest";
import { app, server }  from "../app";

describe ('backCatArte', () => {

    test('should return a response with 200 and type json', async () =>{

        const response = await request(app).post('/creatememe'); 

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')  
    })

    afterAll(()=>{
        server.close();
    })
})