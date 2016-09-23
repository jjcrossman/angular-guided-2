'use strict';

//Create a service and inject it into the controller

angular.module( 'artistApp' ).controller( 'FirstCtrl', function ( $scope, myService ) {

  $scope.reallyLike = myService.reallyLike;
  $scope.kindOfLike = myService.kindOfLike;
    // step 1 set a variable called reallyLike on $scope. This variable will be bound to the reallyLike variable in the service
    // step 2 set a variable called kindOfLike on $scope. This variable will be bound to the kindOfLike variable in the service

  $scope.addNewArtist = myService.addNewArtist;
    // step 3 create a function called addArtist the will call the addNewArtist function in the service. You will need to send
    // an artists object as the argument. How you choose to do this is up to you. Once you have added the artist clear the form

});
