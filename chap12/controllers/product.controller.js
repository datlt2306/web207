function productController($scope, $http, $routeParams) {
    const API = `http://localhost:3000/products`;
    $scope.product = {
        name: "",
    };
    $scope.productList = [];
    const id = $routeParams.id;

    // Mặc định lấy danh sách sản phẩm và hiển thị ra ngoài
    (() => {
        $http.get(API).then(({ data }) => ($scope.productList = data));
    })();
    const getItemProduct = async () => {
        $http.get(`${API}/${id}`).then(({ data }) => ($scope.product = data));
    };
    if (id) {
        getItemProduct();
    }

    // Xóa sản phẩm
    $scope.removeItem = function (id) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            $http
                .delete(`${API}/${id}`)
                .then(() => {
                    const newProducts = $scope.productList.filter((item) => item.id != id);
                    $scope.productList = newProducts;
                    toastr.success("Đã xóa thành công");
                })
                .catch((error) => console.log(error));
        }
    };
    $scope.addItem = function (e) {
        e.preventDefault();
        $http
            .post(`${API}`, $scope.product)
            .then(() => {
                toastr.success("Đã thêm thành công");
                window.location.href = "./#!product";
            })
            .catch((error) => toastr.error("Lỗi", error));
    };
    $scope.updateItem = function (e) {
        console.log($scope.product);
        $http.put(`${API}/${$scope.product.id}`, $scope.product).then(() => {
            console.log("thanh cong");
        });
    };
}
