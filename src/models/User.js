class User {
  constructor(name, email, password, birthday) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
  }

  getAge() {
    const today = new Date();
    const birthdayObj = new Date(this.birthday);
    const age = today.getFullYear() - birthdayObj.getFullYear();
    const monthDifference = today.getMonth() - birthdayObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthdayObj.getDate())
    ) {
      return age - 1;
    }

    return age;
  }

  isLegalAge() {
    return this.getAge() >= 18;
  }

  isNameValid() {
    return this.name.length >= 3;
  }

  isPasswordValid() {
    return this.password.length >= 6;
  }

  isEmailValid() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.email);
  }

  isInfosValid() {
    if (!this.isEmailValid()) {
      console.log("email inválido");
    }
    if (!this.isNameValid()) {
      console.log("o nome deve conter ao menos 3 caracteres");
    }
    if (!this.isPasswordValid()) {
      console.log("a senha deve conter ao menos 6 caracteres");
    }

    if (!this.isLegalAge()) {
      console.log(
        "você deve ter ao menos 18 anos para fazer parte do nosso forum"
      );
    }
  }
}

export default User;
