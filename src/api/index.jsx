import axios from "axios";

/* TODAS LAS FUNCIONES QUE HAGAN LLAMADO A UNA CONSTANTE */
const getUsers = async () => {
    // Make a request for a user with a given ID
    let users = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

        return users
};

export {getUsers};
/* Export default sirve para exportar una función por defecto */

const getProducts = async () => {
    // Make a request for a user with a given ID
    let products = await axios.get('https://ecommerce-uwvs.onrender.com/productos')
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

        return products
};

export {getProducts};
