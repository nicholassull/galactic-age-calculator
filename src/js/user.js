export default class User {
  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {
    return Math.floor(this.earthAge / 0.24);
  }

  venusAge() {
    return Math.floor(this.earthAge / 0.62);
  }

  marsAge() {
    return Math.floor(this.earthAge / 1.88);
  }

  jupiterAge() {
    return Math.floor(this.earthAge / 11.86);
  }

  yearsToLive(avgLife) {
    const yearsLeft = Math.floor(avgLife - this.earthAge);
    return yearsLeft;
  }
  // yearsToLive(avgLife) {
  //   const yearsLeft = Math.floor(avgLife - this.earthAge);
  //   if (yearsLeft === 0) {
  //     return  "You just might be in your final year of life, but don't take my word for it! Live it up!"
  //   } else if (yearsLeft < 0) {
  //     const yearsPassed = yearsLeft * -1;
  //     return `Congratulations! You've made it ${yearsPassed} years passed your average life expectancy!`
  //   } else {
  //     return `It looks like you have about ${yearsLeft} more years left in you! Go get em'!`
  //   }
  // }
}