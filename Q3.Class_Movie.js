class Movie{
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
 }
 getPG(movieArr){
    return `movies with ratings are ${this.rating==="PG"}`;
   // return movieArr.filter(movie => Movie.rating==="PG")
 }
}
var film = new Movie("Casino Royale","Eon Productions", "PG-13");

var movies = [ new Movie("mov1","A","PG"),
 new Movie("mov2","B","PG-13"),
 new Movie("mov3","C","PG"),];

console.log(film.getPG(movies));