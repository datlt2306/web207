function routes($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
        })
        .when("/product", {
            templateUrl: "pages/product.html",
            controller: "productController",
        })
        .when("/product/add", {
            templateUrl: "pages/product-add.html",
            controller: "productController",
        })
        .when("/product/:id/edit", {
            templateUrl: "pages/product-edit.html",
            controller: "productController",
        })
        .when("/product/:id", {
            templateUrl: "pages/product-detail.html",
            controller: "productController",
        })
        .when("/register", {
            templateUrl: "pages/register.html",
            controller: "authController",
        })
        .when("/login", {
            templateUrl: "pages/login.html",
            controller: "authController",
        })
        .when("/404", {
            templateUrl: "pages/notFound.html",
        })
        .otherwise({
            redirectTo: "/404",
        });
}
