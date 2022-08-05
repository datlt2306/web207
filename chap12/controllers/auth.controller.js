function authController($scope, $http) {
    const API = `http://localhost:3000`;
    $scope.user = {
        email: "",
        password: "",
    };
    $scope.message = "";

    $scope.register = function (e) {
        e.preventDefault();

        $http
            .post(`${API}/register`, $scope.user)
            .then(() => console.log("thanhf cong"))
            .catch((error) => console.log(error));
    };
    $scope.login = function (e) {
        e.preventDefault();
        $http
            .post(`${API}/login`, $scope.user)
            .then(() => console.log("thanhf cong"))
            .catch((error) => ($scope.message = error.data));
    };
}
