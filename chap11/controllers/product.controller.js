function productController($scope, $http) {
    const API = `http://localhost:3000/products`;
    $scope.productList = [];
    // GET, POST, PUT ( PATCH ), DELETE
    $http.get(API).then(({ data }) => ($scope.productList = data));

    $scope.removeItem = function (id) {
        $http
            .delete(`${API}/${id}`)
            .then(() => {
                const newProducts = $scope.productList.filter((item) => item.id != id);
                $scope.productList = newProducts;
            })
            .catch((error) => console.log(error));
    };
    // $scope.addItem = function (e, product) {
    //     e.preventDefault();
    //     $http.post(`${API}`, product).then(() => {
    //         console.log("thanh cong");
    //     });
    // };
    // $scope.updateItem = function (e, product) {
    //     $http.put(`${API}/${product.id}`, product).then(() => {
    //         console.log("thanh cong");
    //     });
    // };
}
