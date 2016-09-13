var fupload = angular.module('fuploadApp', ['ngRoute', 'ngResource']);

fupload.controller('fuploadCtrl', ['$scope', 'multipartForm', function ($scope, multipartForm) {
	//$scope.customer = {};
	$scope.Submit = function(){
		var file =$scope.customer.file;
		console.log( 'File is ' );
		cosole.dir(file);
		var uploadUrl = '/fileUpload';
		multipartForm.uploadFileToUrl(file, uploadUrl);
		//var uploadUrl = '/upload';
		//multipartForm.post(uploadUrl, $scope.customer);
	};
}]);