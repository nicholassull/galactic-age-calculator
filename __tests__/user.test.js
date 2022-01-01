import User from './../src/js/user.js'

describe('User', () => {
  test('Should create a new user with an age of 26', () => {
    let user = new User(26);
    expect(user.earthAge).toEqual(26);
  });
});