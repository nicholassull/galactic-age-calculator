import User from './../src/js/user.js'

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User(26);
  });
  
  test('Should create a new user with an age of 26', () => {
    expect(user.earthAge).toEqual(26);
  });

  test('Should return user age in Mercury years', () => {
    expect(user.mercuryAge()).toEqual(108);
  });

  test('Should return user age in Venus years', () => {
    expect(user.venusAge()).toEqual(41);
  });

  test('Should return user age in Mars years', () => {
    expect(user.marsAge()).toEqual(13);
  });

  test('Should return user age in Jupiter years', () => {
    expect(user.jupiterAge()).toEqual(2);
  });
});

describe('User.yearsToLive()', () => {
  let user;
  beforeEach(() => {
    user = new User(26);
  });

  test("Should return the number of years left in the user's life based on demographic average", () => {
    expect(user.yearsToLive(85)).toEqual(59);
  });
});