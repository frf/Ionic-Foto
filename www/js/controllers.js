angular.module('starter.controllers', [])

.controller('FotoCtrl', function($scope,$cordovaCamera) {
      $scope.takePhoto = function () {
        var options = {
          quality: 75,
          targetWidth: 320,
          targetHeight: 320,
          sourceType: Camera.PictureSourceType.CAMERA,
          destinationType: Camera.DestinationType.DATA_URL,
          encodingType: Camera.EncodingType.JPEG,
          saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
          $scope.lastPhoto = "data:image/jpeg;base64," +imageData;
        }, function (err) {
          // An error occured. Show a message to the user
        });
      }

      $scope.takePhoto();
}).controller('HomeCtrl', function($scope) {

});
