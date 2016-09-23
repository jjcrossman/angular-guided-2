angular.module( 'artistApp' ).service( 'myService', function () {
  this.reallyLike = [];
  this.kindOfLike = [];

  this.addNewArtist = function ( artistObj ) {
    var obj = {
      name: artistObj.name
      , genre: artistObj.genre
      , score: artistObj.score
    }
    if ( obj.score > 50 ) {
      this.reallyLike.push( obj );
    }
    else {
      this.kindOfLike.push( obj );
    }
  };

})
