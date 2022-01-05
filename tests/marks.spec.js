const axios = require('axios');

describe('On /mark', () => {
  it('should POST /mark success added mark for student', async () => {
    const body = {
      mark: 85,
      student_id: 7,
      course_id: 3,
    };
    const response = await axios.post('http://127.0.0.1:3000/mark', body);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      id: expect.any(Number),
      mark: expect.any(Number),
      student_id: expect.any(Number),
      course_id: expect.any(Number),
    }));
  });

  it('should POST /mark not success added mark for student if body is bad', async () => {
    try {
      const body = {
        mark: 85,
        student_id: 7,
      };
      const response = await axios.post('http://127.0.0.1:3000/mark', body);
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});
