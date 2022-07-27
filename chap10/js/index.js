const app = angular.module("myApp", ["ngRoute"]);
app.config(($routeProvider) => {
    $routeProvider
        .when("/product", {
            templateUrl: "pages/product.html",
            controller: "productController",
        })
        .otherwise({
            templateUrl: "pages/other.html",
        });
});
app.controller("productController", productController);
