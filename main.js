// const Product = {
//     getProducts: async function () {
//         const response = await fetch("http://localhost:3000/products");
//         const data = await response.json();
//         return data;
//     },
//     removeProduct: async function (id) {
//         const response = await fetch("http://localhost:3000/products/" + id, {
//             method: "DELETE",
//         });
//         const data = await response.json();
//         return data;
//     },
//     addProduct: async function (data) {
//         const response = await fetch("http://localhost:3000/products/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer 12313311",
//             },
//             body: JSON.stringify(data),
//         });
//         const data = await response.json();
//         return data;
//     },
// };

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

const getProducts = async () => {
    const { data } = await instance.get("/products");
    console.log(data);
};
const addProducts = async (product) => {
    const { data } = await instance.post("/products", product);
    console.log(data);
};
const editProducts = async (product) => {
    const { data } = await instance.post("/products/" + product.id, product);
    console.log(data);
};
getProducts();
