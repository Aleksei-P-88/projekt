

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for ( let i=0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

            if  ( a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    detectedPersonalLevel: function() {
        if (this.count < 10) {
            console.log ('Просмотрено мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log ('Вы классический зритель');
        }  else if (this.count >= 30) {
            console.log ('Вы киноман');
        } else {
            console.log ('Произошла ошибка');
        } 
    },
    showMyDB: function(hidden) { 
        if (!hidden){ // если !this.private
            console.log(this);
        } else {
            console.log('этот профиль закрыт');
        }
    },
    writeYourGenres: function() {
        for (let i=1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (genre === "" || genre === null) {
                console.log ('нельзя оставлять незаполнинным поле');
                i--;
            } else {
                this.genres[i-1] = genre;
            }            
        }
        this.genres.forEach((item,i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat=!this.privat;
        } else {
            this.privat=!this.privat;
        }
    }
};
// personalMovieDB.writeYourGenres();

console.log(personalMovieDB);
