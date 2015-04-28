module.exports = function(collection, callback, name, imgext, industry, contributions, story, books, movies) {
    this.getCollection(function(error, collection) {
            if(error) callback(error);
            else {
                if(typeof(heroes.length)=="undefined") heroes = [heroes];
                for( var i =0;i< heroes.length;i++ ) {
                    var hero = heroes[i];
                    hero.date_we_added = new Date();
		    hero.name = name;
		    hero.imgext = imgext;
		    hero.industry = industry;
		    hero.contributions = contributions;
		    hero.story = story;
		    hero.books = books;
		    hero.movies = movies;
                }
                collection.insert(heroes, function() {
                        callback(null, articles);
                    });
            }
        });
};