class Person {
    constructor (
        firstName,
        lastName,
        email,
        nickname,
        password,
        personalityType
        
        ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.personalityType = personalityType;
        }
}

class PersonalityType = {
    constructor (
        center,
        primary,
        secondary
    ){
        this.center = center;
        this.primary = primary;
        this.secondary = secondary;
    }
}

get PersonalityType() {
    return
        this.center +
        this.primary +
        this.secondary 
        // lookup value of result of primary + secondary in table.
}

PersonalityTypes = {

}