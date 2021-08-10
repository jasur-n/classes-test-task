class User {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    get getFullName(){
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year ){
        super(name, surname);
        this.year=year;
    }

    get getCourse(){
        const currentYear=new Date().getFullYear();
        return currentYear-this.year;
    }
}


