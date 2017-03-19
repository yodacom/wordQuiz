export class Person {
  constructor(
    firstName,
    lastName,
    email,
    nickname,
    password,
    personalityType,

        ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.nickname = nickname;
    this.password = password;
    this.personalityType = personalityType;
  }
}

export class PersonalityType {
  constructor(primary, secondary, central) {
    this.primary = primary;
    this.secondary = secondary;
    this.central = central;
    this.type = {
      B: {
        b: 6,
        l: 5,
        w: 7,
      },
      G: {
        g: 3,
        f: 2,
        t: 4,
      },
      R: {
        r: 9,
        o: 1,
        p: 8,
      },
    };
  }

  getPersonalityType() {
    return this.type[this.primary][this.secondary];
  }
}
