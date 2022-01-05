const axios = require('axios');

describe('On /course', () => {
  it('should POST /course success added course to university', async () => {
    const body = {
      name: 'asdasd',
      teacher_id: 6,
      university_id: 1,
    };
    const response = await axios.post('http://127.0.0.1:3000/course', body);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      teacher_id: expect.any(Number),
      university_id: expect.any(Number),
    }));
  });

  it('should POST /course not success added course to university when body is bad', async () => {
    const body = {
      name: 'Test',
      teacher_id: 1,
      university_id: '1asd',
    };
    try {
      const response = await axios.post('http://127.0.0.1:3000/course', body);
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  it('should DELETE /course success', async () => {
    const body = {
      id: 1,
    };
    const response = await axios.delete('http://127.0.0.1:3000/course', { data: body });
    expect(response.status).toBe(200);
  });

  it('should GET /course/list', async () => {
    const response = await axios.get('http://127.0.0.1:3000/course/list?university_id=1');
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      page: expect.any(Number),
      courses: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          teacher_id: expect.any(Number),
          university_id: expect.any(Number),
        }),
      ]),
    }));
  });

  it('should POST /student-course success link student to the course', async () => {
    const body = {
      student_id: 7,
      course_id: 2,
    };
    const response = await axios.post('http://127.0.0.1:3000/course/student-course', body);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      student_id: expect.any(Number),
      course_id: expect.any(Number),
    }));
  });

  it('should POST /student-course not success link student to the course when course not found', async () => {
    const body = {
      student_id: 7,
      course_id: 2222222,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3000/student-course', body);
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toEqual(expect.objectContaining({
        message: expect.stringContaining('Course not found!'),
      }));
    }
  });

  it('should POST /student-course not success link student to the course when user not found', async () => {
    const body = {
      student_id: 712312312312321,
      course_id: 2,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3000/course/student-course', body);
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toEqual(expect.objectContaining({
        message: expect.stringContaining('User not found!'),
      }));
    }
  });

  it('should DELETE /student-course success drop student to the course ', async () => {
    const body = {
      student_id: 7,
      course_id: 2,
    };
    const response = await axios.delete('http://127.0.0.1:3000/student-course', { data: body });
    expect(response.status).toBe(200);
  });
});
