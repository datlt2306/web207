function productController($scope, $http) {
    const API = `https://6110f09bc38a0900171f0ed0.mockapi.io/products`;
    $scope.product = {
        name: "",
    };
    $scope.productList = [];

    // Mặc định lấy danh sách sản phẩm và hiển thị ra ngoài
    $http.get(API).then(({ data }) => ($scope.productList = data));

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
    // $scope.updateItem = function (e, product) {
    //     $http.put(`${API}/${product.id}`, product).then(() => {
    //         console.log("thanh cong");
    //     });
    // };
}
