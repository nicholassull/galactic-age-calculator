export default class User {
  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {
    return Math.floor(this.earthAge / 0.24);
  }
}