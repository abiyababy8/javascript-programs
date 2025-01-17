const movies=[
    {name:"Dhrishyam",release:2010,language:"malayalam"},
    {name:"Rajamanikyam",release:2004,language:"malayalam"},
    {name:"Avesham",release:2024,language:"malayalam"},
    {name:"Taare Zameen Par",release:2007,language:"hindi"},
    {name:"Marco",release:2025,language:"malayalam"},
]
//add new movie
movies.push({name:"Kanguva",release:2024,language:"Tamil"})
//filter movies that released after 2010
let movieNames2010=[];
const movieNames=movies.forEach((item)=>{
    if(item.release>2010){
        movieNames2010.push(item.name)
        return item.name
    }
})
console.log("Movies Released after 2010")
console.log(movieNames2010)
//sort movies according to their release date
const sortedMovies=movies.sort((a,b)=>a.release-b.release)
console.log("Sorted Movies")
console.log(sortedMovies)