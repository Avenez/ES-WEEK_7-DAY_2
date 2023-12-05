class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  getAge(otherUser) {
    let age1 = this.age.split("/");
    let age2 = otherUser.age.split("/");
    if (age1[0] < age2[0] && age1[1] < age2[1] && age1[2] < age2[2]) {
      console.log(this.firstName + " è più grande di " + otherUser.firstName);
    } else console.log(otherUser.firstName + " è più piccolo di " + this.firstName);
  }
}

let paolo = new User("Paolo", "Rossi", "18/10/1989", "Padova");
let marco = new User("Marco", "Blu", "18/12/1989", "Milano");

paolo.getAge(marco);
