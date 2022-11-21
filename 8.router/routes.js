function routes($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./pages/home.html",
        })
        .when("/product", {
            templateUrl: "pages/product.html",
            controller: "productController",
        })
        .when("/404", {
            templateUrl: "pages/404.html",
        })
        .otherwise({
            redirectTo: "/404",
        });
}
