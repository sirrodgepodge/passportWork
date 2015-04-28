module.exports = function(name, video, callback) {
    this.getCollection(function(error, heroes){
            if(error) callback(error);
            else {
		heroes.update(
					  {name: name},
					  {"$push": {videos: video}},
					  function(error, hero){
					      if(error) callback(error);
					      else callback(null, hero);
					  });
            }
        });
};