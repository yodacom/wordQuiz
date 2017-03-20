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
    this.bestWords = [];
  }

  addWord(word){
    this.bestWords.push(word);
  }

  removeWord(word){
      const index = this.bestWords.findIndex((w) => w.word == word);
      this.bestWords.splice(index, 1);
  }

  analysis() {
    const count = function (ary, classifier) {
        return ary.reduce((counter, item) => {
            const p = (classifier || String)(item);
            counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
            return counter;
        }, {});
    };

    this.countByCenter = count(this.bestWords, (item) => item.center);

    this.countByPrimary = count(this.bestWords, (item) => item.primary_group);

    this.countBySecondary = count(this.bestWords, (item) => item.secondary_group);

    // console.log(countByCenter);
    // console.log(countByPrimary);
    // console.log(countBySecondary);

    //personalityReport(countByCenter);
}

  getCenter(){
      let highestCenter = '';
      if (this.countByCenter.FE > this.countByCenter.IN) {
          highestCenter = 'FE';
      } else{
          highestCenter = 'IN';
      }
      if (this.countByCenter.TH > this.countByCenter[highestCenter]) {
          highestCenter = 'TH';
      }
      this.center = highestCenter;
      return this.center;
  }

  getPrimary(){
      let highestPrimary = '';
      if (this.countByPrimary.B > this.countByPrimary.G) {
          highestPrimary = 'B';
      } else {
          highestPrimary = 'G';
      }
      if (this.countByPrimary.R > this.countByPrimary[highestPrimary]) {
          highestPrimary = 'R';
      }
      this.primary = highestPrimary;
      return this.primary;
  }

  getSecondary(){
    return 'UNKNOWN';
  }


  getType(){

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
