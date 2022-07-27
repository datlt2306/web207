function routes($routeProvider) {
    $routeProvider
        .when("/product", {
            templateUrl: "pages/product.html",
            controller: "productController",
        })
        .when("/404", {
            templateUrl: "pages/notFound.html",
        })
        .otherwise({
            redirectTo: "/404",
        });
}
