//var fuploadApp = angular.module('fuploadApp');

fupload.service('multipartForm', ['$http', function($http){
	this.uploadFileToUrl =function(file, uploadUrl){
		var fd = new FormData();
/*		for ( var key in data)
			fd.append( key, data[key] );*/
		fd.append('file', file);
		$http.post(uploadUrl, fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }

		}).success(function(){
			console.l0g('File upload Successful');
		}).error(function(){
			console.log('File upload not Successful');
		});
	};
	
}]);