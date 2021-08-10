//Task 1
const input = new Elem('input');
input.attr('disabled', true);
const heading=new Elem('h1');
heading.html('newValue').append('!').prepend('!');

//Task 2
const student1=new Student('Jasurbek', 'Normurodov', 2019);
console.log(student1.getCourse);

//Task 3
const worker = new Worker('Иван', 'Иванов', 100, 31);
console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 100
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 3100$ - то есть 100*31
