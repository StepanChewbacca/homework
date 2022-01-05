const axios = require("axios");

describe('On /teacher', () => {
    it('should POST /teacher success added teacher to university', async () => {
        const body = {
            first_name: 'asfasgf',
            last_name: 'asfasfasf',
            age: 45,
            university_id: 2
        };
        const response = await axios.post('http://127.0.0.1:3000/teacher', body);
        expect(response.status).toBe(201);
        expect(response.data).toEqual(expect.objectContaining({
            id: expect.any(Number),
            first_name: expect.any(String),
            last_name: expect.any(String),
            age: expect.any(Number),
            user_role: expect.stringContaining('teacher'),
            university_id: expect.any(Number)
        }));
    });

    it('should POST /teacher not success added teacher to university when body does not contain all required fields', async () => {
        const body = {
            first_name: 'asfdasfasf',
            last_name: 'asfasfasf',
            age: 45,
        };
        try {
            const response = await axios.post('http://127.0.0.1:3000/teacher', body);
            expect(response.status).not.toBe(200);
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });

    it('should GET /teacher/list success', async () => {
        const response = await axios.get('http://127.0.0.1:3000/teacher/list?university_id=1');
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expect.objectContaining({
            page: expect.any(Number),
            teachers: expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    age: expect.any(Number),
                    user_role: expect.stringContaining('teacher'),
                    university_id: expect.any(Number)
                })
            ])
        }));
    });
});
