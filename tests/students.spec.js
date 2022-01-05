const axios = require('axios');

describe('On /student', () => {
  it('should POST /student success added student to university', async () => {
    const body = {
      first_name: 'Baba',
      last_name: 'Kabaka',
      age: 21,
      university_id: 2,
    };
    const response = await axios.post('http://127.0.0.1:3001/student', body);
    expect(response.status).toBe(201);
    expect(response.data).toEqual(expect.objectContaining({
      id: expect.any(Number),
      first_name: expect.any(String),
      last_name: expect.any(String),
      age: expect.any(Number),
      user_role: expect.any(String),
      university_id: expect.any(Number),
    }));
  });


  it('should PUT /student success update student data', async () => {
    const body = {
      id: 7,
      first_name: 'sdffhsodig',
      last_name: 'Spaksgjakpsg',
      age: 21,
    };
    const response = await axios.put('http://127.0.0.1:3000/student', body);
    expect(response.status).toBe(201);
    expect(response.data).toEqual(expect.objectContaining({
      id: expect.any(Number),
      first_name: expect.any(String),
      last_name: expect.any(String),
      age: expect.any(Number),
      user_role: expect.any(String),
      university_id: expect.any(Number),
    }));
  });

  it('should PUT /student not success update student data when user not found', async () => {
    const body = {
      id: 777777777777,
      first_name: 'sdgfsdhgdsg',
      last_name: 'asfsdghsdgdaf',
      age: 21,
    };
    try {
      const response = await axios.put('http://127.0.0.1:3000/student', body);
      expect(response.status).not.toBe(201);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toEqual(expect.objectContaining({
        message: expect.stringContaining('User not found!'),
      }));
    }
  });

  it('should DELETE /student not success when user not found', async () => {
    const body = {
      id: 777777777777,
    };
    try {
      const response = await axios.delete('http://127.0.0.1:3000/student', { data: body });
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toEqual(expect.objectContaining({
        message: expect.stringContaining('Student not found!'),
      }));
    }
  });

  it('should DELETE /student not success when user is not student', async () => {
    const body = {
      id: 2,
    };
    try {
      const response = await axios.delete('http://127.0.0.1:3000/student', { data: body });
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual(expect.objectContaining({
        message: expect.stringContaining('This user is not student!'),
      }));
    }
  });

  it('should GET /student/university/list success', async () => {
    const response = await axios.get('http://127.0.0.1:3000/student/university/list?university_id=1');
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      page: expect.any(Number),
      university_id: expect.any(Number),
      students: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          first_name: expect.any(String),
          last_name: expect.any(String),
          age: expect.any(Number),
          user_role: expect.any(String),
          university_id: expect.any(Number),
        }),
      ]),
    }));
  });

  it('should GET /student/course/list success', async () => {
    const response = await axios.get('http://127.0.0.1:3000/student/course/list?course_id=2');
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      page: expect.any(Number),
      course_id: expect.any(Number),
      students: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          first_name: expect.any(String),
          last_name: expect.any(String),
          age: expect.any(Number),
          user_role: expect.any(String),
          university_id: expect.any(Number),
        }),
      ]),
    }));
  });

  it('should GET /student/course/rating success', async () => {
    const response = await axios.get('http://127.0.0.1:3000/student/course/rating?course_id=2');
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      course_id: expect.any(Number),
      ratings: expect.arrayContaining([
        expect.objectContaining({
          student_id: expect.any(Number),
          rating: expect.any(Number),
        }),
      ]),
    }));
  });
});
