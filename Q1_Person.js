class Person{
    constructor(name, age, gender, contact){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.contact = contact;
    }
    getDetatil(){
        return `The person Details are
        name:
        age:
        gender:
        contact: `
    }
}
var obj1 = new Person("Abi","23","F","abirami@gmail.com");
console.log(obj1.getDetatil());

