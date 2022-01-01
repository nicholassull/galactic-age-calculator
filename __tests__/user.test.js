import User from './../src/js/user.js'

describe('User', () => {
  beforeEach(() => {
    user = new User(26);
  });
  
  test('Should create a new user with an age of 26', () => {
    expect(user.earthAge).toEqual(26);
  });

  test('Should return user age in Mercury years', () => {

  });
});