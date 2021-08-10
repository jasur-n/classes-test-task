class User {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year ){
        super(name, surname);
        this.year=year;
    }

    getCourse(){
        //In the task explanation it was said to not use methods. 
        const currentYear=new Date().getFullYear();
        return currentYear-this.year;
    }
}


