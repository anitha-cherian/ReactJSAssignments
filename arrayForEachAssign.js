//define oscar movie array of objects
const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
   ]; 
   console.log(" displaying data using foreach");
    oscarMovies.forEach(function(movies,index,array){
      //let  movie=array[index];
       
    console.log(`Index:${index} , Title:${movies.title},Movie: `);

  console.log(array[index]);
    // console.log(movie.title);
    // console.log(movie.year);
    // console.log(movie.genre);
    // console.log(movie.director);
    // console.log(index);
    // console.log(array[index]);

    }); 
    console.log("displaying data using for loop");
   
    for (let index = 0; index < oscarMovies.length; index++) {
        
        const movie = oscarMovies[index];
        console.log(`Index:${index} , Title:${movie.title},Movie:`);
        console.log(movie);
        //console.log(movie.title);
    }