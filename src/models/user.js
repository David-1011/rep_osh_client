export default class User {
  constructor(email, firstName, lastName, password) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
  static validatePassword(password2) {
    if (password2 === this.password) {
      return true;
    } else {
      return false;
    }
  }
}
