const axios = require('axios');

describe('On /university', () => {
  it('should always pass', () => {
    expect(true).toBeTruthy();
  });

  it('should POST /universities create a new university and return university object', async () => {
    const body = {
      country: 'USA',
      city: 'Columbus',
      name: 'Columbus University',
      accreditation: 3,
    };
    const response = await axios.post('http://127.0.0.1:3000/university', body);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      id: expect.any(Number),
      country: expect.any(String),
      city: expect.any(String),
      name: expect.any(String),
      accreditation: expect.any(Number),
    }));
  });

  it('should GET /university/list success', async () => {
    const response = await axios.get('http://127.0.0.1:3000/university/list');
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({
      page: expect.any(Number),
      universities: expect.any(Array),
    }));
  });

  it('should GET /university success', async () => {
    const response = await axios.get('http://127.0.0.1:3000/university?id=1');
    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining([{
      id: expect.any(Number),
      country: expect.any(String),
      city: expect.any(String),
      name: expect.any(String),
      accreditation: expect.any(Number),
    }]));
  });

  it('should GET /university not success when the id is not in the request', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/university');
      expect(response.status).not.toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  it('should GET /university/student/rating success', async () => {
    const response = await axios.get('http://127.0.0.1:3000/university/student/rating');
    expect(response.status).toBe(200);
    expect(response.data[0]).toEqual(expect.objectContaining({
      university_id: expect.any(Number),
      name: expect.any(String),
      students: expect.any(Array),
    }));
  });
});
