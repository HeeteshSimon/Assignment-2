var app = angular.module("studentApp",[]);
app.controller("studentCtrl" , ["$scope",function($scope) {
	$scope.data = [
	{ Name : "Heetesh", lastName : "Kumar", DBMS : 29, DSA : 25, OS : 26, WT : 28, CO : 27},
	{ Name : "Adi", lastName : "Malhotra", DBMS : 1, DSA : 2, OS : 1 , WT : 2, CO : 1},
	{ Name : "Hari", lastName : "Singh", DBMS : 1, DSA : 2, OS : 1 , WT : 2, CO : 1},
	{ Name : "Manav", lastName : "Sehgal", DBMS : 1, DSA : 2, OS : 1 , WT : 2, CO : 1}
	];
}]);
