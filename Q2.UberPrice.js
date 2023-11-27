class Uberprice{
    constructor(baseFee, city, km ){
        this.baseFee = baseFee;
        this.city = city;
        this.km = km;
    }
    getCity(){
        return `baseFee ${this.baseFee}, city: ${this.city}, KM: ${this.km}`;
    }
}
var obj1 = new Uberprice(55, "Chennai", 20);
console.log(obj1.getCity());