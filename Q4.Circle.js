class Circle{
    radius  = 1.0;
    color = "Red";

    constructor(){}
        constructor(radius, color){
            this.radius = radius;
            this.color = color;
        }  
getRadius() {
    return this.radius;
}
setRadius(radius){
    this.radius =radius;
}
getcolor(){
    return this.color;
}
setColor(){
    this.color = this.color;
}
toString(){
    return `Circle[radius=${this.radius}, ${this.color}]`;
}
getArea(){
    return Math.PI*this.radius*this.radius;
}
getCircumference(){
    return 2*Math.PI*this.radius;
}
}
var c1 = new Circle();
console.log(c1.getCircumference);
