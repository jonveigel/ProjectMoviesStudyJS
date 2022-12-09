const movies = require('./database');


const readlineSync = require('readline-sync');

const inputInitial = readlineSync.question('Want to search for a movie? Y/N');

if (inputInitial.toLocaleUpperCase() === 'Y') {
    console.log('These are the categories!');
    console.log('/horror', '/action', '/thriller');

    const inputCategory = readlineSync.question('Which category do you choose?');

    const re = movies.filter(movies => movies.category === inputCategory);

    console.table(re);
} else {
   const moviesDecres = movies.sort((a,b) => a.duration - b.duration);
    console.table(moviesDecres);
}